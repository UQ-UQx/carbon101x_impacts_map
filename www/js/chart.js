//require("dimple-js");

module.exports = {
	appendchartto: function(container, data) {
		histo_chart_div(container, data);
	}
}

function histo_chart_div(container, data) {
	var chart_div = $('<div class="row"><div class="col-xs-12 col-md-10 col-md-offset-1 chart-container" id="chart_div"></div></div>');
	container.append(chart_div);

	var svg = dimple.newSvg('#chart_div', "100%", "100%");
	var format_data = format_chartdata(data);

	var chart = new dimple.chart(svg, data);

	chart.setMargins("60px", "30px", "60px", "70px");
	//chart.setBounds(80, 30, 480, 330);
	chart.addMeasureAxis("x", "Number Of Students");
	chart.addCategoryAxis("y", ["Response", "AssignedGroup"]);
	chart.addSeries("AssignedGroup", dimple.plot.bar);
	chart.addLegend("-100px", "30px", "100px", "-70px");
	chart.draw();

	// Add a method to draw the chart on resize of the window
	window.onresize = function() {
		chart.draw(0, true);
	}	
	/*
	 var data = [
      { "Word":"Hello", "Awesomeness":2000 },
      { "Word":"World", "Awesomeness":3000 }
    ];
    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Word");
    chart.addMeasureAxis("y", "Awesomeness");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();
    */
}

function format_chartdata(data) {
	//console.log('data', data);

	var format_data = data;

	for(i=0; i < format_data.length; i++) {
		format_data[i]['Number Of Students'] = 1;
		format_data[i]['Response'] = parseInt(data[i]['Response']);
	}

	/*
	var ActivityID = format_data[0]['ActivityID'];
	var AssignedGroup = format_data[0]['AssignedGroup'];

	// Add dumy objects to ensure every response having data
	for(i=1; i<= 7; i++) {
		var dummy_obj1 = {
			ActivityID: format_data[0]['ActivityID'],
			AssignedGroup: 'A',
			NumOfStudents: 0,
			response: i.toString()
		};
		var dummy_obj2 = {
			ActivityID: format_data[0]['ActivityID'],
			AssignedGroup: 'B',
			NumOfStudents: 0,
			response: i.toString()
		};
		//console.log('dummy', dummy_obj1, dummy_obj2);
		format_data.push(dummy_obj1);
		format_data.push(dummy_obj2);

	}
	*/

	//console.log('format_data', format_data);

	return format_data;
}