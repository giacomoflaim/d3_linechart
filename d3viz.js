

			var width = 920;
			var height = 1235;
			var marginLat = 206;
			var margin = 10;
			var marginC = 25;
			var marginAx = 196;
			var marginGrid = 206;
			var rValues = [7,25];
			var circle;
			var Numero;

			


			var maxHeight = 3000;

			var svg = d3.select('#chart')
					.append('svg')
					.attr('width', width +'px')
					.attr('height', height + 'px')
					.attr("xmlns", "http://www.w3.org/2000/svg");

			
			var parseTime = d3.timeParse("%d-%b-%y");

			var x = d3.scaleTime()
				.range([marginLat, width-marginC]);
			
			var y = d3.scaleLinear()
				.range([height - margin, margin]);

			var radius = d3.scaleOrdinal()
				.range([rValues[0],rValues[1]]);

			var color = d3.scaleOrdinal()
				.range(['#FFFFFF','#ffdd91']);
			

			function make_y_gridlines() {		
			    return d3.axisLeft(y)
			        .ticks(8)
				}



			d3.csv('TotaleD3.csv').then(function(data){


				/*LastVal = d3.select('Lombardia', function(d){
				return d.Lombardia[d.Lombardia.length - 1];
				});*/

				//console.log(data.columns.slice(0,2));

				var colonnaRegione = data.map(function(d) {
					  return d.Lombardia					  
					});

				var datoSettimanale = colonnaRegione[colonnaRegione.length-1];
				
				var delta = colonnaRegione[colonnaRegione.length-1] - colonnaRegione[colonnaRegione.length-2];
				    
				if (delta>0){var delta = "+" + delta} else {var delta = delta};

				

					

				data.forEach(function(d) {
				      d.giorno = parseTime(d.giorno);      
				});


				x.domain(d3.extent(data, function(d) { 
					return d.giorno; 
				}));
  				y.domain([0, 40000]);

  				radius.domain([1,2]);

  				color.domain([1,2]);

				
				

  				// AXIS 
  				

				yAxis = d3.axisLeft(y)
						.ticks(8, "s"); 

				yAxisGroup = svg.append('g')
					.attr('id', 'yAxis')
					.attr('class', 'axis')					

				yAxisGroup.call(yAxis)
					.attr('transform', 'translate('+ (marginAx)+',0)')
					.attr('text-anchor','end')


				


				svg.append("g")			
					.attr("class", "grid")
					.attr('transform', 'translate('+ (marginGrid)+',0)') 					
					.call(make_y_gridlines()
						.tickSize(-width)
						.tickFormat("")	)

				// add the Y Axis
				/*svg.append("g")
					.call(d3.axisLeft(y));

				svg.append("g")
					.call(d3.axisBottom(x)); */
				

				svg.append("path")
				      .datum(data)
				      .attr("fill", "none")
				      .attr("stroke", "#fff")
				      .attr("stroke-width", 3)
				      .attr("d", d3.line()
				      .x(function(d) { return x(d.giorno) })
				      .y(function(d) { return y(d.Lombardia) }))


				svg.selectAll(".dot")
					    .data(data)
					  	.enter()
					  	.append("circle") // Uses the enter().append() method
					    .attr("class", "dot") // Assign a class for styling
					    .attr("cx", function(d)
					    	{ return x(d.giorno) })
					    .attr("cy", function(d) { 
					    	return y(d.Lombardia) })
					    .attr("r", function(d)
					    	{return radius(d.dimensione)})
					    .attr("fill", function(d)
					    	{return color(d.dimensione)})

				document.getElementById("numero").innerHTML = datoSettimanale;
				document.getElementById("delta").innerHTML = delta;


			})


			


			
			
			






	