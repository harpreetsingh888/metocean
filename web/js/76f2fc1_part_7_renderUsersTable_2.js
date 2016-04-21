$(function(){
    "use strict";
    var AppView = Backbone.View.extend({
        el: '#container',
        events: {
            'change select' : 'userInputChange'
        },
        initialize: function() {
            this.template = _.template($('#barGraph-template').html());
            this.render();
        },
        template: '',
        date : '',
        render: function() {
            this.$el.html(this.template);
            this.displayBarGraph(this.date);
            // $('#menuInput').on('change', this.userInputChange, this);
            return this;
        },
        displayBarGraph: function(date)
        {
            var margin = {top: 20, right: 30, bottom: 30, left: 40},
                width = 960 - margin.left - margin.right,
                height = 500 - margin.top - margin.bottom;

            var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var chart = d3.select(".chart")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            d3.xhr('/getAllData', function(data) {
                var object =$.parseJSON(data.response),
                    selectedRow = object[0];

                if (this.date) {
                    for (var dateKey in object) {
                        if (object[dateKey].time === this.date) {
                            selectedRow = object[dateKey];
                        }
                    }
                }

                this.populateSelect(object);

                delete selectedRow.time;
                var array = $.map(selectedRow, function(value, index) {
                    if (index !== 'time') {
                        return [value];
                    }
                });

                x.domain($.map(selectedRow, function(d,i) { return i; }));
                y.domain([0, d3.max(array, function(d,i) { return d; })]);

                chart.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                chart.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);


                var customData = [];
                for (var key in selectedRow) {
                    if (key !== 'time') {
                        var customObject = {'key' : key, 'value': selectedRow[key]};
                        customData.push(customObject);
                    }
                }
                chart.selectAll(".bar")
                    .data(customData)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function(d) { return x(d.key); })
                    .attr("y", function(d) { return y(d.value); })
                    .attr("height", function(d) { return height - y(d.value); })
                    .attr("width", x.rangeBand());
            }.bind(this));
        },
        populateSelect: function(object)
        {
            var dateArray = [];

            for (var key in object) {
                dateArray.push(object[key].time);
            }

            for(var i =0; i<dateArray.length; i++){
                var option  = document.createElement('option');
                document.getElementById('menuInput').appendChild(option).value = dateArray[i];
                document.getElementById('menuInput').appendChild(option).text = dateArray[i];
                if (this.date === dateArray[i]) {
                    document.getElementById('menuInput').appendChild(option).setAttribute('selected', 'selected');
                }
                // console.log(arrayYears[i].getFullYear())
            }
        },
        userInputChange: function(e)
        {
            this.date = e.target.value;
            // d3.select('svg').content;
            var svg = d3.select('svg');
            $(svg[0]).html('');
            this.$('#menuInput').html('').append('<option  value="Select a date">Choose a date</option>');
            this.displayBarGraph(this.date);
        }
    });

    var App = new AppView;
});