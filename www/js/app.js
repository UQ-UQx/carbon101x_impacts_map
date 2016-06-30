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

// Files that you create can also be included in any JS file, 
// however their path has to be specified as they are not part of NPM
var my_poll = require("./poll.js");




$(document).ready(function(){


    // example of how you can use your JS code in other files
    var poll_questions = ["Question A", "Question B", "Question C"];

    my_poll.init(poll_questions);

    var results = my_poll.getResults(poll_questions);

    console.log(results);

    var lti_data = $("#lti-data").data();

    console.log('A', lti_data);

    if(lti_data['ltivalidate']) {
    	if(lti_data['userroles'] == 'Instructor') {
    		if(lti_data['activityid'] == -1) {
    			$("#lack-lti-data").css('display', 'none');
    			$("#edit-activity").css('display', 'none');
    			$("#add-activity").css('display', 'block');
    		}
    		else {
    			$("#lack-lti-data").css('display', 'none');
    			$("#add-activity").css('display', 'none');
    			$("#edit-activity").css('display', 'block');

    			$.ajax({
    				type: "POST",
    				url: 'scripts/get_activity.php',
    				data: "activity_id=" + lti_data['activityid'],
    				dataType: 'json',
    				success: function(response) {
    					console.log('response', response)
    				}

    			});
    		}
    	}

    }
    else {
    	$("#lack-lti-data").css('display', 'block');	
    	$(".input-div").css('display', 'none');
    }






});

