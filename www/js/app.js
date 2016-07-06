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
var my_poll = require("./poll.js");

//var form_validation = require("./form_validation.js");



$(document).ready(function(){

/*
    $('#add-activity-form').validate({
        rules: {
            'activity-introscreen': {
                required: true
            }
        }, 
    });
*/


/*
    // example of how you can use your JS code in other files
    var poll_questions = ["Question A", "Question B", "Question C"];

    my_poll.init(poll_questions);

    var results = my_poll.getResults(poll_questions);

    console.log(results);
*/

    var lti_data = $("#lti-data").data();

    console.log('AB', lti_data);


    if(lti_data['warningmsg']) {
        $(".input-div").css('display', 'none');
        $("#warning-msg-div").empty();
        $("#warning-msg-div").append(lti_data['warningmsg']);
        $("#warning-msg-div").css('display', 'block');
    }
    else {
    	if(lti_data['userroles'] == 'Instructor') {
    		if(lti_data['activityid'] == -1) {
    			$("#warning-msg-div").css('display', 'none');
    			$("#edit-activity").css('display', 'none');
    			$("#add-activity").css('display', 'block');
    		}
    		else {
    			$("#warning-msg-div").css('display', 'none');
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
        else {

        }
    }

});

$('.input-element').change(function() {
    console.log($(this));
});

