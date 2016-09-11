// As JQuery will be used for majority of our JS code, you can attach it to the global scope
// Along with helpers such as mathJS and underscoreJS
global.$ = global.jQuery = require("jquery");
global.math = require('mathjs');
//global.d3 = require("d3");
global._ = require("underscore");

// Any special library you want to use can be installed through npm and imported into the specifc files.
// Most of these may not need variables attached in order to use them, see their documentation.
require('bootstrap');
require('twbs-pagination');
require("blueimp-file-upload");
//require("juqery-ui");
//var mouse = require("jquery-ui/ui/widgets/mouse");
//var slider = require("jquery-ui/ui/widgets/slider");

// Files that you create can also be included in any JS file, 
// however their path has to be specified as they are not part of NPM
//var risks = require('./key_risks.js');

$(document).ready(function(){

    var map = new Datamap({
    	element: document.getElementById('fordatamaps'),    	
    	//scope: 'aus'
    	fills: {
	    	defaultFill: 'rgba(23,48,210,0.9)'
    	}
	});

	$('#forui').slider();

	//risks.initRisks();

		//$("input[type='radio']").checkboxradio();
		/*
		$(".risks").controlgroup({
			direction: "vertical"
		});*/
		




});

