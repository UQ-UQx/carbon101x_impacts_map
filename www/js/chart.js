//require("dimple-js");

module.exports = {
	appendchartto: function(container_id, data) {
		//histo_chart_div(container, data);
		console.log('chart ...', container_id, data);
		scatterplot_chart_div(container_id, data);

		//var svg = dimple.newSvg('')
	}
}

function scatterplot_chart_div(container_id, data) {
	var svg = dimple.newSvg(container_id, "100%", "100%");
    var chart = new dimple.chart(svg, data);
    chart.setMargins('60px', '30px', '60px', '70px');

    var x = chart.addCategoryAxis("x", "Question1Response");
    x.title = "Question 1 (units)";
    //console.log('x', x.shapes); 

    var y = chart.addCategoryAxis("y", 'Question2Response');
    y.title = "Question 2 (units)";

    var s = chart.addSeries(null, dimple.plot.buble
    chart.draw();
    //chart.draw(0, true);
    
    window.onresize = function() {
    	chart.draw(0, true);
    }



}

function format_chartdata(data) {
	console.log('data', data);

	for(i=0; i<format_data.length; i++) {

	}
}

