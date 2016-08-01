module.exports = {
	actionbydata: function() {
		get_student_data();
	}
}

function get_student_data() {
    console.log('gaga');
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