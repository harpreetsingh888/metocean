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
        /**
         * Render view
         * @returns {AppView}
         */
        render: function() {
            this.$el.html(this.template);
            //Display first graph
            this.drawFirstBarGraph(this.date);
            this.drawSecondBarGraph(this.date);
            this.drawThirdGraph(this.date);
            this.drawFourthGraph();
            return this;
        },
        /**
         * Display first bar graph
         * @param {string} date
         */
        drawFirstBarGraph: function(date)
        {
            //Initial graph configs
            var margin = {top: 20, right: 30, bottom: 30, left: 40},
                width = 400 - margin.left - margin.right,
                height = 250 - margin.top - margin.bottom;

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

            var chart = d3.select(".chart1")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            d3.xhr('/getDataForFirstGraph', function(data) {
                var object =$.parseJSON(data.response),
                    selectedRow = object[0];

                //get data based on date selected
                if (this.date) {
                    for (var dateKey in object) {
                        if (object[dateKey].time === this.date) {
                            selectedRow = object[dateKey];
                        }
                    }
                }

                //populate select
                this.populateSelect(object);

                delete selectedRow.time;
                var array = $.map(selectedRow, function(value, index) {
                    if (index !== 'time') {
                        return [value];
                    }
                });

                x.domain($.map(selectedRow, function(d,i) { return i; }));
                y.domain([0, d3.max(array, function(d,i) { return d; })]);

                //Show x axis labels
                chart.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                //Show y axis labels
                chart.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);

                //Get data in proper format
                var customData = [];
                for (var key in selectedRow) {
                    if (key !== 'time') {
                        var customObject = {'key' : key, 'value': selectedRow[key]};
                        customData.push(customObject);
                    }
                }
                //Display data in chart
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
                if (!this.date && i===0) {
                    document.getElementById('menuInput').appendChild(option).setAttribute('selected', 'selected');
                } else if(this.date === dateArray[i]) {
                    document.getElementById('menuInput').appendChild(option).setAttribute('selected', 'selected');
                }
            }
        },
        userInputChange: function(e)
        {
            this.date = e.target.value;
            // d3.select('svg').content;
            var svgs = $('svg');
            _.each(svgs, function(svg) {
               $(svg).html('');
            });
            this.$('#menuInput').html('').append('<option  value="Select a date">Choose a date</option>');
            this.drawFirstBarGraph(this.date);
            this.drawSecondBarGraph(this.date);
            this.drawThirdGraph(this.date);
        },
        drawSecondBarGraph: function(date)
        {
            //Initial graph configs
            var margin = {top: 20, right: 30, bottom: 30, left: 40},
                width = 400 - margin.left - margin.right,
                height = 250 - margin.top - margin.bottom;

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

            var chart = d3.select(".chart2")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            d3.xhr('/getDataForSecondGraph', function(data) {
                var object =$.parseJSON(data.response),
                    selectedRow = object[0];

                //get data based on date selected
                if (this.date) {
                    for (var dateKey in object) {
                        if (object[dateKey].time === this.date) {
                            selectedRow = object[dateKey];
                        }
                    }
                }

                delete selectedRow.time;
                var array = $.map(selectedRow, function(value, index) {
                    if (index !== 'time') {
                        return [value];
                    }
                });

                x.domain($.map(selectedRow, function(d,i) { return i; }));
                y.domain([0, d3.max(array, function(d,i) { return d; })]);

                //Show x axis labels
                chart.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                //Show y axis labels
                chart.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);

                //Get data in proper format
                var customData = [];
                for (var key in selectedRow) {
                    if (key !== 'time') {
                        var customObject = {'key' : key, 'value': selectedRow[key]};
                        customData.push(customObject);
                    }
                }
                //Display data in chart
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
        drawThirdGraph: function(date)
        {
            //Initial graph configs
            var margin = {top: 20, right: 30, bottom: 30, left: 40},
                width = 400 - margin.left - margin.right,
                height = 250 - margin.top - margin.bottom;

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

            var chart = d3.select(".chart3")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            d3.xhr('/getDataForThirdGraph', function(data) {
                var object =$.parseJSON(data.response),
                    selectedRow = object[0];

                //get data based on date selected
                if (this.date) {
                    for (var dateKey in object) {
                        if (object[dateKey].time === this.date) {
                            selectedRow = object[dateKey];
                        }
                    }
                }

                delete selectedRow.time;
                var array = $.map(selectedRow, function(value, index) {
                    if (index !== 'time') {
                        return [value];
                    }
                });

                x.domain($.map(selectedRow, function(d,i) { return i; }));
                y.domain([0, d3.max(array, function(d,i) { return d; })]);

                //Show x axis labels
                chart.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                //Show y axis labels
                chart.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);

                //Get data in proper format
                var customData = [];
                for (var key in selectedRow) {
                    if (key !== 'time') {
                        var customObject = {'key' : key, 'value': selectedRow[key]};
                        customData.push(customObject);
                    }
                }
                //Display data in chart
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
        drawFourthGraph: function()
        {
            var margin = {top: 20, right: 80, bottom: 30, left: 50},
                width = 500 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

            var parseDate = d3.time.format("%d%m%Y").parse;

            var x = d3.time.scale()
                .range([0, width]);

            var y = d3.scale.linear()
                .range([height, 0]);

            var color = d3.scale.category10();

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var line = d3.svg.line()
                .x(function(d) { return x(d.date); })
                .y(function(d) { return y(d.temperature); })
                .interpolate("basis");

            var chart4 = d3.select(".chart4")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            d3.xhr('/getDataForFourthGraph', function(data) {
                var data =$.parseJSON(data.response);
                color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

                data.forEach(function(d) {
                    d.date = parseDate(d.date);
                });

                var temperatureType = color.domain().map(function(name) {
                    return {
                        name: name,
                        values: data.map(function(d) {
                            return {date: d.date, temperature: +d[name]};
                        })
                    };
                });

                x.domain(d3.extent(data, function(d) { return d.date; })).nice();

                y.domain([
                    0,
                    d3.max(temperatureType, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
                ]).nice();

                chart4.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                chart4.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("Temperature (ºF)");

                var tempType = chart4.selectAll(".temperatureType")
                    .data(temperatureType)
                    .enter().append("g")
                    .attr("class", "temperatureType");

                tempType.append("path")
                    .attr("class", "line")
                    .attr("d", function(d) { return line(d.values); })
                    .style("stroke", function(d) { return color(d.name); });

                tempType.append("text")
                    .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
                    .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
                    .attr("x", 3)
                    .attr("dy", ".35em")
                    .text(function(d) { return d.name; });
            });
        }
    });

    var App = new AppView;
});