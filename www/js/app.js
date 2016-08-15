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

$(document).ready(function(){
    console.log('ltivars', ltivars);
    console.log('activity', activity);
    console.log('studentInput', studentInput);
    console.log('allInputs', allInputs);

    if(ltivars['roles'] == 'Student' && !studentInput) {
    	console.log('input');
    	sliders.initSlider($('#slider_1'), $('#slider1_text'), activity['Question1Scale']);
    	sliders.initSlider($('#slider_2'), $('#slider2_text'), activity['Question2Scale']);
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
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        }); 

    });

});

