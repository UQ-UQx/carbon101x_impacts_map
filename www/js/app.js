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
//var my_poll = require("./poll.js");
//var form_validation = require("./form_validation.js");
var likert_slider = require("./slider.js");
var chart_container = require("./chart.js");

$(document).ready(function(){

/*
    // example of how you can use your JS code in other files
    var poll_questions = ["Question A", "Question B", "Question C"];

    my_poll.init(poll_questions);

    var results = my_poll.getResults(poll_questions);

    console.log(results);
*/

    var lti_data = $("#lti-data").data();
    var response_data = [];

    console.log('lti-data', lti_data);


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
            $(".input-div").css('display', 'none');
            $('.activity-div').empty();

            var activity = lti_data['activity'];

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
                response_data = response;

                if(activity['Title']) {
                    $('.activity-div').append('<h2>' + activity['Title'] + '</h2>');
                }

                //console.log("success");
                console.log('response', response);
                if(response['user_input']) {
                    // User already inputted
                    console.log('HAD INPUTED');
                    //var div_final = $('<div class="div-final">' + activity['FinalScreen'] + '</div>');
                    var div_final = $(activity['FinalScreen']);
                    $('.activity-div').append(div_final);
                    chart_container.appendchartto($('.activity-div'), response['all_input']);
                }
                else {
                    console.log('NO INPUTED');
                    if(response['student_in_group']['AssignedGroup'] == 'A') {
                        //var div_intro = $('<div class="div-intro div-a">' + activity['IntroScreenA'] + '</div>');
                        var div_intro = $(activity['IntroScreenA']);
                    }
                    else if (response['student_in_group']['AssignedGroup'] == 'B') {
                        //var div_intro = $('<div class="div-intro div-b">' + activity['IntroScreenB'] + '</div>');
                        var div_intro = $(activity['IntroScreenB']);
                    }
                    $('.activity-div').append(div_intro);
                    likert_slider.appendsliderto($('.activity-div'));
                    //$('#studentingroup_id').val(response['student_in_group']['id']);
                    //$('#activity_id').val(response['student_in_group']['ActivityID']);
                    //$('#assigned_group').val(response['student_in_group']['AssignedGroup']);
                    //console.log($('#student_data'));
                }

                $('.activity-div').css('display', 'block');

            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });

        }
    }

    $('.activity-div').on("click", '#submit_btn', function() {
        console.log('lti', lti_data);
        console.log('response_data', response_data);
        //var slider_text = $().val();
        if(response_data['student_in_group']) {
            $.ajax({
                url: 'scripts/save_student_data.php',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        'studentingroup_id': response_data['student_in_group']['id'],
                        'activity_id': response_data['student_in_group']['ActivityID'],
                        'assigned_group': response_data['student_in_group']['AssignedGroup'],
                        'slider_text': $('#slider_text').val(),
                    }
            })
            .done(function(response) {
                $('.activity-div').empty();

                console.log('response', response);
                if(response['warning_msg']) {
                    $(".input-div").css('display', 'none');
                    $("#warning-msg-div").empty();
                    $("#warning-msg-div").append(response['warning_msg']);
                    $("#warning-msg-div").css('display', 'block');
                }
                else {
                    console.log('gaga');
                    /*
                    var activity = lti_data['activity'];
                    var div_final = $(activity['FinalScreen']);
                    $('.activity-div').append(div_final);
                    chart_container.appendchartto($('.activity-div'), response['all_input']);
                    */
                    $.ajax({
                        url: 'scripts/get_student_data.php',
                        type: 'POST',
                        dataType: 'json',
                        data: {
                            "activity_id": lti_data['activityid'],
                            "user_id": lti_data['userid'],
                        }

                    })
                    .done(function(response2) {
                        if(activity['Title']) {
                            $('.activity-div').append('<h2>' + activity['Title'] + '</h2>');
                        }

                        //console.log("success");
                        console.log('response2', response2);
                        if(response2['user_input']) {
                            // User already inputted
                            console.log('HAD INPUTED');
                            //var div_final = $('<div class="div-final">' + activity['FinalScreen'] + '</div>');
                            var div_final = $(activity['FinalScreen']);
                            $('.activity-div').append(div_final);
                            chart_container.appendchartto($('.activity-div'), response2['all_input']);
                        }
                        else {
                            console.log('NO INPUTED');
                            if(response2['student_in_group']['AssignedGroup'] == 'A') {
                                //var div_intro = $('<div class="div-intro div-a">' + activity['IntroScreenA'] + '</div>');
                                var div_intro = $(activity['IntroScreenA']);
                            }
                            else if (response2['student_in_group']['AssignedGroup'] == 'B') {
                                //var div_intro = $('<div class="div-intro div-b">' + activity['IntroScreenB'] + '</div>');
                                var div_intro = $(activity['IntroScreenB']);
                            }
                            $('.activity-div').append(div_intro);
                            likert_slider.appendsliderto($('.activity-div'));
                            $('#studentingroup_id').val(response2['student_in_group']['id']);
                            $('#activity_id').val(response2['student_in_group']['ActivityID']);
                            $('#assigned_group').val(response2['student_in_group']['AssignedGroup']);
                            //console.log($('#student_data'));
                        }

                        $('.activity-div').css('display', 'block');

                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });
                }

            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            }); 
        }
    });


/*
            // Send grade
            $grade = 1;
            if($lti->grade_url() != 'No Grade URL') {
                send_grade($grade,$lti);
            }
*/


});

