// /**
//  * Created by harpreet on 20/04/16.
//  */
// var year;
//
// main();
//
// function userInput(event){
//     var inputYear = document.getElementById("menuInput").value;
//     year = format.parse(inputYear);
//
//
//     d3.select('svg').remove();
//     main(year);
//     return false;
// }
//
//
//
// var format = d3.time.format("%Y");
//
// var y = 1980;
// var arrayYears = new Array();
//
// while (y<2013){
//     arrayYears.push(format.parse(y.toString()));
//     y++;
// }
//
//
// for(var i =0; i<arrayYears.length; i++){
//     var option  = document.createElement('option');
//     document.getElementById('menuInput').appendChild(option).value = arrayYears[i].getFullYear();
//     document.getElementById('menuInput').appendChild(option).text = arrayYears[i].getFullYear();
//     // console.log(arrayYears[i].getFullYear())
// }
// //Add years to the drop down menu
//
// // addYearsToMenu();
//
//
// function main (arg){
//
//     d3.csv("immune.csv",function(data){
//
//         data.forEach(function(d,i){
//             d.Value = +d.Value;
//             d.Year = format.parse(d.Year);   // format input to time format.
//         })
//
//         if(arg !== undefined){
//             year = arg
//         }
//
//         else{
//             year = arrayYears[0]
//             console.log(data)
//             console.log(year)
//         }
//
//         //console.log(arrayYears[arrayYears.length-1])
//
//
//
//
//
//         var nested = d3.nest().key(function(d)
//             {
//                 return d.Country;
//             })
//             .key(function(d){
//                 return d.Year;
//             })
//             .entries(data)
//
//         var nested1 = d3.nest().key(function(d)
//             {
//                 return d.Country;
//             })
//
//             .map(data)
//
//
//         var min = d3.min(data, function(d){
//             return d.Value;
//         })
//
//
//         var height = 600;
//         var width = 1100;
//         var c;
//
//
//         nested.forEach(function(d){
//
//             d.values.forEach(function(d,i){
//                 var initial = 0;
//                 var offset =20;
//
//                 d.values.forEach(function(d,i){
//                     d.y1 = offset+(d.Value/2);
//                     d.y0 = offset;
//                     offset += d.Value/2;
//                 })
//
//             })
//         })
//
//         var countryArray = nested.map(function(d){
//             return d.key
//         })
//
//         var maxValue = d3.max(nested,function(d,i){
//             var l =  d.values[0].values.length
//             return d.values[0].values[l-1].y1;
//         })
//
//         var xscale = d3.scale.ordinal()
//             .domain(countryArray)
//             .rangeRoundBands([0,(width-120)],0.1)
//
//         var yScale = d3.scale.linear().domain([0,maxValue])
//             .rangeRound([(height-140),20])
//
//
//         var xAxis = d3.svg.axis()
//             .scale(xscale)
//             .orient('bottom')
//             .tickSize(8)
//
//         var yAxis = d3.svg.axis()
//             .scale(yScale)
//             .orient("left")
//             .ticks(5)
//             .tickSize(-(width-110))
//
//         var domain = ['Measles','Influenza', 'Hepatitis B', 'Diphtheria, Tetanus, Pertussis'];
//
//         var color = d3.scale.ordinal()
//             .range(['blue','red','orange','green'])
//         color.domain(domain);
//
//
//
//         var svg = d3.select('body').append("svg")
//             .attr('width',width+20)
//             .attr('height',height+20)
//             .append("g")
//             .attr("transform", "translate(" + 50 + "," + 40 + ")");
//
//         svg.append("g")
//             .attr("transform", "translate(0," + (height-140)+ ")")
//             .call(xAxis)
//             .attr("class","xaxis")
//             .selectAll('text')
//             // .attr("y", 10)
//             .attr("dx","-1em")
//             .attr("dy", "-0.2em")
//             .attr("transform",function(d){
//                 return ("rotate(-70)")
//             })
//             .style("text-anchor", "end")
//
//         svg.append('g')
//             .call(yAxis)
//             .attr("class","yaxis")
//             .append("text")
//             .attr("x", 80)
//             .attr("y", 0)
//             .attr("dy", ".71em")
//             .style("text-anchor", "end")
//             .text(function(d){
//                 return "Year: " + year.getFullYear();
//             })
//
//         var countries = svg.selectAll('.countries')
//             .data(nested)
//             .enter()
//             .append("g")
//             .attr('class','countries')
//             .attr("transform", function(d,i){
//                 return "translate(" + xscale(d.key) + ",45)"
//             })
//
//
//         /*
//          nested:
//          key:Australia
//          values: [ ]
//          key: Year
//          values: []
//          .
//          .
//          .
//          */
//         console.log(nested)
//         var mini = d3.min(data,function(d){
//             return d.Year
//         })
//
//         var maxi = d3.max(data,function(d){
//             return d.Year
//         })
//
//         var val;
//
//
//         var z = countries.selectAll('rect')
//             .data(function(d,i){
//                 console.log(i)
//                 console.log(d.values.length)
//
//                 d.values.forEach(function(d){
//                     if (d.key == year){
//                         console.log(year)
//                         console.log(d.values)
//                         val = d.values;
//                     }
//                     // else{
//                     // 	val=undefined;
//                     // }
//                 })
//                 return val;
//             })
//             .enter()
//         z.append('rect')
//             .attr("y",function(d,i){
//                 return yScale(d.y1);
//             })
//             .attr('width', function(d,i){
//                 return xscale.rangeBand();
//             })
//             .attr("height",function(d,i){
//                 return (yScale(d.y0)-yScale(d.y1))
//                 var prev_value = 0;
//                 var result;
//             })
//             .style("fill",function(d,i){
//                     return color(d.Variable)
//                 }
//             )
//
//         var legend = svg.append('g')
//             .selectAll('rect')
//             .data(function(d){
//                 return color.domain();
//             })
//             .enter()
//
//
//         legend.append('rect')
//             .attr("width",25)
//             .attr("height",20)
//             .attr("x",15)
//             .attr("y",function(d,i){
//                 return -40+(20*i)
//             })
//             .style("fill",function(d){
//                 return color(d);
//             })
//
//
//         eachLegend = legend.append('text')
//             .text(function(d){
//                 return d;
//                 // return d.replace(", ", ", \n");
//             })
//
//             .attr("x",50)
//             .attr("y",function(d,i){
//
//                 return -30+(22*i)
//
//             })
//             .style("fill","black")
//             .style("font-size","10px")
//
//
//
//         // function legendFormat(d,i){
//         // 	if (d.indexOf(', ') > -1){
//         // 			d.split(' ');
//         // 		}
//
//
//         // 		return 10+(22*i)
//
//         // }
//     }) // END OF d3.csv("immune.csv")
//
// }