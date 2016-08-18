module.exports = {
	parseScalestoArray: function(scales) {
	    scaleArr = scales.split(',');
	    for(var i = 0; i <scaleArr.length; i++) {
	        scaleArr[i] = scaleArr[i].trim();
	    }
	    return scaleArr;
	}
}