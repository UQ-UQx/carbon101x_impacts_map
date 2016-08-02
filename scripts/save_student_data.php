<?php

    $response = array();
	//$response['b'] = 'banana';
	//$response['post'] = $_POST;
	
	//error_log("ankith test", 0);


	require_once('../inc/db_connection.php');
	require_once('../lib/grade.php');
	require_once('../config.php');
	require_once('../lib/lti.php');
	
	$lti = new Lti($config,true);
	$vars = array('user_id'=>$_POST['user_id'],'oauth_consumer_key'=>$_POST['lti_id'], 'lis_outcome_service_url'=>$_POST['lis_outcome_service_url'], 'lis_result_sourcedid'=>$_POST['lis_result_sourcedid']);
	$lti->setltivars($vars);

	
	//error_log(json_encode($_POST),0);	
	//error_log(json_encode($lti->calldata()), 0);

	$warning_msg = '';

	if(empty($_POST['studentingroup_id'])) {
		$warning_msg .= '<p>POST var: studentingroup_id is not available.</p>';
	}
	if(empty($_POST['activity_id'])) {
		$warning_msg .= '<p>POST var: activity_id is not available.</p>';
	}
	if(empty($_POST['slider_text'])) {
		$warning_msg .= '<p>POST var: slider_text is not available.</p>';
	}
	if(empty($_POST['assigned_group'])) {
		$warning_msg .= '<p>POST var: assigned_group is not available.</p>';
	}

    if($warning_msg == '') {
	    try {
	    	$db = Db::instance();
			$db->create('StudentInput', array(
				'StudentInGroupID' => $_POST['studentingroup_id'],
				'Response' => $_POST['slider_text'],
				'ActivityID' => $_POST['activity_id'],
				'AssignedGroup' => $_POST['assigned_group'],
			));
		    // Send grade
            $grade = 1;
            if($lti->grade_url() != 'No Grade URL') {
                send_grade($grade,$lti);
            }
		}
		catch(Exception $e) {
			$warning_msg .= '<p>' . $e->getMessage() . '</p>';
		}
    }

    if($warning_msg != '') {
    	$response['warning_msg'] = $warning_msg;
    }

    //$response['warning_msg'] ='werrraaa';
	echo json_encode($response);
