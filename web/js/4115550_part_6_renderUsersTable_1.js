$(function(){
    "use strict";
    var usersModel = Backbone.Model.extend({
        defaults:
        {
            id: '',
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            ip_address: '',
            company: '',
            city: '',
            title: '',
            website: ''
        }
    });

    var usersCollection = Backbone.Collection.extend({
        model: usersModel,
        url: '/getAllUsers'
    });

    var users = new usersCollection;

    var usersView = Backbone.View.extend({
        tagName: 'tbody',
        initialize: function() {
            this.render();
        },
        render: function() {
            this.collection.each(function(user) {
                var row = new rowView({model: user});
                $('#tableContainer').append(row.$el.html());
            });
            return this;
        }
    });

    var rowView = Backbone.View.extend({
        tagName: 'tr',
        className: 'row',
        template: _.template($('#row-template').html()),
        initialize: function() {
            this.render();
        },
        render: function()
        {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    var AppView = Backbone.View.extend({
        initialize: function() {
            this.render();
            users.fetch();
        },
        render: function() {
            //var updatedUserViewnew = new usersView({'collection': users});
            $('#tableContainer').DataTable({
                iDisplayLength: 10,
                bPaginate: true,
                sPaginationType: "full_numbers",
                bServerSide: true,
                lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
                sEcho: 0,
                "fnServerData": function ( sSource, aoData, fnCallback, oSettings ) {
                    $.ajax({
                        "dataType": "json",
                        "type": "GET",
                        "url": '/getAllUsers',
                        "data": aoData,
                        "success": function (response) {
                            this.data = response.aaData;
                            fnCallback(response);
                        },
                        "error": function(jqXHR, textStatus, errorThrown) {
                            console.log(txtStatus, errorThrown); // use alert() if you prefer
                        }
                    });
                },
                fnDrawCallback: function(c,b) {

                },
                fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                    /* push this row of data to currData array*/

                }
            });
        }
    });
    var App = new AppView;
});