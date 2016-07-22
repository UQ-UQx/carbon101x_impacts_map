//require("dimple-js");

module.exports = {
	appendchartto: function(container, data) {
		histo_chart_div(container, data);
	}
}

function histo_chart_div(container, data) {
	var chart_div = $('<div class="chart-container" id="chart_div"></div>');
	container.append(chart_div);

	var svg = dimple.newSvg('#chart_div', 590, 400);
	var format_data = format_chartdata(data);

	var chart = new dimple.chart(svg, data);
	chart.setBounds(80, 30, 480, 330);
	chart.addMeasureAxis("x", "NumOfStudents");
	chart.addCategoryAxis("y", ["Response", "AssignedGroup"]);
	chart.addSeries("AssignedGroup", dimple.plot.bar);
	chart.addLegend(60, 10, 510, 20, "right");
	chart.draw();
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
		format_data[i]['NumOfStudents'] = 1;
	}

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

	console.log('format_data', format_data);

	return format_data;
}