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
    	if(lti_data['userroles'] == 'Instructor' || lti_data['userroles'] == 'Administrator') {
    		if(lti_data['activityid'] == -1) {
    			$("#warning-msg-div").css('display', 'none');
    			$("#edit-activity").css('display', 'none');
    			$("#add-activity").css('display', 'block');
    		}
    		if(lti_data['activityid'] > 0) {
    			$("#warning-msg-div").css('display', 'none');
    			$("#add-activity").css('display', 'none');
    			$("#edit-activity").css('display', 'block');

                var activity = lti_data['activity'];
                console.log(activity);
                $('#edit-activity-id').val(lti_data['activityid']);
                $('#edit-activity-title').val(activity['Title']);
                $('#edit-activity-intro-screen-a').val(activity['IntroScreenA']);
                $('#edit-activity-intro-screen-b').val(activity['IntroScreenB']);
                $('#edit-activity-final-screen').val(activity['FinalScreen']);
    		}
    	}
        else if(lti_data['userroles'] == 'Student'){
            $.ajax({
                url: 'scripts/get_student_data.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    "activity_id": lti_data['activityid'],
                    "user_id": lti_data['userid'],
                }
            })
            .done(function(response) {
                console.log("success");
                console.log(response);
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            

/*
            $.ajax({
                url: 'scripts/get_student_data.php',
                type: 'POST',
                dataType: 'json',
                data: {"activity_id": lti_data['activityid']}
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
*/

        }
    }

});

$('.input-element').change(function() {
    console.log($(this));
});

