//require("dimple-js");

module.exports = {
	appendchartto: function(container_id, data) {
		//histo_chart_div(container, data);
		console.log('chart ...', container_id, data);

		//var svg = dimple.newSvg('')
	}
}

//function 

/*
function histo_chart_div(container, data) {
	var chart_div = $('<div class="row"><div class="col-xs-12 col-md-10 col-md-offset-1 chart-container" id="chart_div"></div></div>');
	container.append(chart_div);

	var svg = dimple.newSvg('#chart_div', "100%", "100%");
	var format_data = format_chartdata(data);

	var chart = new dimple.chart(svg, data);

	chart.setMargins("60px", "30px", "60px", "70px");
	//chart.setBounds(80, 30, 480, 330);
	chart.addMeasureAxis("x", "Number Of Students");
    var y =	chart.addCategoryAxis("y", ["Response", "AssignedGroup"]);
    y.title = "Generosity";
	chart.addSeries("AssignedGroup", dimple.plot.bar);
	var legend = chart.addLegend("-200px", "30px", "200px", "-70px");
	console.log('legend', legend);
	chart.draw();

	// Add a method to draw the chart on resize of the window
	window.onresize = function() {
		chart.draw(0, true);
	}	
}

function format_chartdata(data) {
	console.log('data', data);

	var format_data = data;

	for(i=0; i < format_data.length; i++) {
		format_data[i]['Number Of Students'] = 1;
		format_data[i]['Response'] = parseInt(data[i]['Response']);
		format_data[i]['AssignedGroup'] = 'Group ' + data[i]['AssignedGroup'];
	}

	//console.log('format_data', format_data);

	return format_data;
}
*/