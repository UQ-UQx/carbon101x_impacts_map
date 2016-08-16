// As JQuery will be used for majority of our JS code, you can attach it to the global scope
// Along with helpers such as mathJS and underscoreJS
global.$ = global.jQuery = require("jquery");
global.math = require('mathjs');
global._ = require("underscore");

// Any special library you want to use can be installed through npm and imported into the specifc files.
// Most of these may not need variables attached in order to use them, see their documentation.
require('bootstrap');
require('twbs-pagination');
require("blueimp-file-upload");
require("jquery-knob");
//require("jquery-validation");

// Files that you create can also be included in any JS file, 
// however their path has to be specified as they are not part of NPM
var sliders = require('./slider.js');
var charts = require('./chart.js');

$(document).ready(function(){
    console.log('ltivars', ltivars);
    console.log('activity', activity);
    console.log('studentInput', studentInput);
    console.log('allInputs', allInputs);




//    if(ltivars['roles'] == 'Student' && !studentInput) {
    if(ltivars['roles'] == 'Student') {
    	if(studentInput) {
    		var studentDisplayDiv = $('.student-display-div');
	    	charts.appendchartto(studentDisplayDiv, allInputs);
	    	$('.student-input-div').css('display', 'none');
	    	$('.student-warning-div').css('display', 'none');
	    	$('.student-display-div').css('display', 'block');
    	}
    	else {
	    	console.log('input');
	    	$('.student-input-div').css('display', 'block');
	    	$('.student-warning-div').css('display', 'none');
	    	$('.student-display-div').css('display', 'none');
	    	sliders.initSlider($('#slider_1'), $('#slider1_text'), activity['Question1Scale']);
	    	sliders.initSlider($('#slider_2'), $('#slider2_text'), activity['Question2Scale']);
    	}
    }

    function displayAllInputs(container, inputs) {
    	// add all here, 1 divid get_student_data.php into two files, get_student_input and get_all_inputs
    	charts.appendchartto(container, inputs);
    }


    $('#submit_btn').click(function() {
    	console.log('clicked');

        $.ajax({
            url: 'scripts/save_student_data.php',
            type: 'POST',
            dataType: 'json',
            data: {
            	//'edx_userid': ltivars['user_id'],
            	//'ActivityID': ltivars['custom_activity_id'],
            	'Q1Response': $('#slider1_text').val(),
            	'Q2Response': $('#slider2_text').val()
            }
        })
        .done(function(response) {
        	console.log("done", response);
        	if(response['warning_msg']) {
        		$(".student-warning-div").empty();
		        $(".student-warning-div").append(response['warning_msg']);

		    	$('.student-input-div').css('display', 'none');
		    	$('.student-warning-div').css('display', 'block');
		    	$('.student-display-div').css('display', 'none');        		
        	}
        	else {
	    		var studentDisplayDiv = $('.student-display-div');
		    	charts.appendchartto(studentDisplayDiv, allInputs);
		    	$('.student-input-div').css('display', 'none');
		    	$('.student-warning-div').css('display', 'none');
		    	$('.student-display-div').css('display', 'block');
        	}
        })
        .fail(function() {
    		$(".student-warning-div").empty();
	        $(".student-warning-div").append('<p>#submit_btn ajax fails.</p>');

	    	$('.student-input-div').css('display', 'none');
	    	$('.student-warning-div').css('display', 'block');
	    	$('.student-display-div').css('display', 'none');        		
        })
        .always(function() {
            console.log("complete");
        }); 

    });

});

