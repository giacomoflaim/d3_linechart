

			var width = 1080;
			var height = 1080;


		/*	
			
			var marginLatSx = 258;
			var	marginLatDx = 200;
			var marginTop= 905;
			var marginBottom = 456;


			var widthGrid = 1024;
			var margin = 10;
			var marginC = 25;
			var marginAx = 196;
			var marginGrid = 258;
			var rValues = [7,25];
			var circle;
			var Numero;
*/
			

            
			

			var svg = d3.select('#chart')
					.append('svg')
					.attr('width', width +'px')
					.attr('height', height + 'px')
					.style('background-color','#343449');

            var formatComma = d3.format(",");
			
			var parseTime = d3.timeParse("%d-%b-%y");

			/*var x = d3.scaleTime()
				.range([marginLatSx, width-marginLatDx]);
			
			var y = d3.scaleLinear()
				.range([height-marginBottom, marginTop]);

			var radius = d3.scaleOrdinal()
				.range([rValues[0],rValues[1]]);

			var color = d3.scaleOrdinal()
				.range(['#FFFFFF','#ffdd91']);
*/
            
			

			



			d3.csv('TotaleD3.csv').then(function(data){


				






				

				var colonnaRegione = data.map(function(d) {
					  return d.Lombardia					  
					});

				var datoSettimanale = colonnaRegione[colonnaRegione.length-1];
				
				/*var delta = colonnaRegione[colonnaRegione.length-1] - colonnaRegione[colonnaRegione.length-2];
				    
				if (delta>0){var delta = "+" + delta} else {var delta = delta};
*/
				

					

				/*data.forEach(function(d) {
				      d.giorno = parseTime(d.giorno);      
				});*/


				/*x.domain(d3.extent(data, function(d) { 
					return d.giorno; 
				}));
  				y.domain([0, 40000]);

  				radius.domain([1,2]);

  				color.domain([1,2]);*/



  				// AXIS 
  				

				

				svg.append('text')
					.attr('x','540')
					.attr('y','60')
					.attr('text-anchor','middle')
					.text('il bollettino n.'+datoSettimanale)
					//style					
					.style('fill','#FFDD91')
					.style('font-family','Circular Std Bold, serif')
					.style('font-size','26px')
					.style('font-weight','400')
					.style('letter-spacing','8px')
					.style('text-transform','uppercase')
                
                svg.append('rect')
                    .attr('x','0')
                    .attr('y', '100')
                    .attr("width", 1080)
                    .attr("height", 2)
                    .style('fill','#FFDD91');
                
                svg.append('text')
					.attr('x','540')
					.attr('y','761')
					.attr('text-anchor','middle')
					.text(formatComma(datoSettimanale))
					//style					
					.style('fill','#FFDD91')
					.style('font-family','Druk XCond Super ,serif')
					.style('font-size','600')
					.style('font-weight','400')
					.style('letter-spacing','0px')
					.style('text-transform','uppercase')
                
                svg.append('rect')
                    .attr('x','0')
                    .attr('y', '975')
                    .attr("width", 1080)
                    .attr("height", 2)
                    .style('fill','#FFDD91');
                
                
                svg.append('text')
					.attr('x','540')
					.attr('y','1035')
					.attr('text-anchor','middle')
					.text('i contagiati totali del '+datoSettimanale)
					//style					
					.style('fill','#FFDD91')
					.style('font-family','Circular Std Bold, serif')
					.style('font-size','26px')
					.style('font-weight','400')
					.style('letter-spacing','8px')
					.style('text-transform','uppercase')
                

				/*svg.append('text')
					.attr('x','602')
					.attr('y','760')
					.attr('text-anchor','middle')
					.text(datoSettimanale)
					//style					
					.style('fill','#FFDD91')
					.style('font-family','Druk XCond Super ,serif')
					.style('font-size','240px')
					.style('font-weight','900')
					.style('line-height','240px')
					

				svg.append('text')
					.attr('x','602')
					.attr('y','818')
					.attr('text-anchor','middle')
					.text(delta)
					//style					
					.style('fill','#fff')
					.style('font-family','Circular Std Bold, serif')
					.style('font-size','40px')
					.style('font-weight','700')
					.style('letter-spacing','1px')
					
    


				


				svg.append("g")			
					.attr("class", "grid")

					.attr('transform', 'translate('+ (marginGrid)+',0)') 					
					.call(make_y_gridlines()

						.tickSize(-widthGrid)
						.tickFormat("")	)

				// add the Y Axis
				/*svg.append("g")
					.call(d3.axisLeft(y));

				svg.append("g")
					.call(d3.axisBottom(x)); */
				
/*
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
					    	{return color(d.dimensione)})*/

				//document.getElementById("numero").innerHTML = datoSettimanale;
				//document.getElementById("delta").innerHTML = delta;*/


			})

			
			
			
			






	