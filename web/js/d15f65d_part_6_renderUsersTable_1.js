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
        initialize: function() {
            this.render();
        },
        render: function() {
            $('#tableContainer').DataTable({
                sAjaxSource: "/getAllUsers",
                fnServerData: function( sSource, aoData, fnCallback) {
                    debugger;
                },
                fnDrawCallback: function(){
                    debugger;
                },
                fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                    debugger;
                }
            });
            //this.$el.html(this.template(this.model.toJSON()));
            //this.$el.toggleClass('done', this.model.get('done'));
            //this.input = this.$('.edit');
            //return this;
        }
    });

    var AppView = Backbone.View.extend({
        initialize: function() {
            this.listenTo(users, 'all', this.render);
            users.fetch();
        },
        render: function() {
            var updatedUserViewnew = new usersView();

        }
    });
    var App = new AppView;
});