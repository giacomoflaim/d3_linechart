

			var width = 320;
			var height = 600;
			var margin = 40;

			var maxHeight = 3000;

			var svg = d3.select('#chart')
					.append('svg')
					.attr('width', width +'px')
					.attr('height', height + 'px');

			
			var parseTime = d3.timeParse("%d-%b-%y");

			var x = d3.scaleTime().range([margin+margin, width-margin]);
			var y = d3.scaleLinear().range([height - margin, margin]);

			var area = d3.area()				    
				    .x(d => x(d.giorno))
				    .y0(y(0))
				    .y1(d => y(d.Abruzzo))


			d3.csv('dataset.csv').then(function(data){			
				

				data.forEach(function(d) {
				      d.giorno = parseTime(d.giorno);
				      
				});


				x.domain(d3.extent(data, function(d) { 
					return d.giorno; 
				}));
  				y.domain([0, 3000]);


  				svg.append("path")
			      .data([data])
			      .attr("class", "area")
			      .attr("d", area);

				/*
				xScale = d3.scaleTime()
					.domain(d3.extent(data, function(d) { return d.giorno; }))
					.range([0+margin+margin, width-margin]);

				yScale = d3.scaleLinear()
					.domain([maxHeight,0])
					.range([margin,height-margin]); */

				
				

					/*
				svg.append("path")
				      .datum(data)
				      .attr("fill", "none")
				      .attr("stroke", "#000")
				      .attr("stroke-width", 1.5)
				      .attr("d", d3.line()
				      .x(function(d) { return xScale(d.giorno) })
				      .y(function(d) { return yScale(d.Abruzzo) })) */


				

				svg.append("path")
				      .datum(data)
				      .attr("fill", "steelblue")
				      .attr("d", area);





				/*svg.append("path")
					    .datum(data)
					    .attr("fill", "#cce5df")
				      	.attr("stroke", "#69b3a2")
				      	.attr("stroke-width", 1.5)
				      	.attr("d", d3.area()
				        .x(function(d) { 
				        	return x(d.giorno) 
				        })
				        .y0(y(0))
				        .y1(function(d) { 
				        	return y(d.Abruzzo) 
				        }))*/


				svg.selectAll(".dot")
					    .data(data)
					  	.enter()
					  	.append("circle") // Uses the enter().append() method
					    .attr("class", "dot") // Assign a class for styling
					    .attr("cx", function(d)
					    	{ return x(d.giorno) })
					    .attr("cy", function(d) { 
					    	return y(d.Abruzzo) })
					    .attr("r", 5)

				


				yAxis = d3.axisLeft(y).ticks();

				yAxisGroup = svg.append('g')
				.attr('id', 'yAxis')
				.attr('class', 'axis');

				yAxisGroup.call(yAxis)
				.attr('transform', 'translate('+ (margin)+',0)');
					     



			})
			
			






	