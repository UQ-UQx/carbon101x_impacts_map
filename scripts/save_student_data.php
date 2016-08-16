<?php
	session_start();

    $response = array();
    $response['post'] = $_POST;
    $response['session'] = $_SESSION;

	require_once('../inc/db_connection.php');
	require_once('../lib/php/grade.php');
	require_once('../config.php');
	require_once('../lib/php/lti.php');

	$lti = new Lti($config, true);
	$lti->setltivars($_SESSION['ltivars']);   

	$warning_msg = '';
	try {
		$db = Db::instance();
		$db->create('CorrelationStudentInput', array(
			'edx_userid' => $_SESSION['ltivars']['user_id'],
			'ActivityID' => $_SESSION['ltivars']['custom_activity_id'],
			'Question1Response' => $_POST['Q1Response'],
			'Question2Response' => $_POST['Q2Response']
		));

	}
	catch(Exception $e) {
		$warning_msg .= '<p>' . $e->getMessage() . '</p>';
	}

	$response['warning_msg'] = $warning_msg;
    echo json_encode($response);



/*
	require_once('../inc/db_connection.php');
	require_once('../lib/grade.php');
	require_once('../config.php');
	require_once('../lib/lti.php');
	
	$lti = new Lti($config,true);
	$vars = array('user_id'=>$_POST['user_id'],'oauth_consumer_key'=>$_POST['lti_id'], 'lis_outcome_service_url'=>$_POST['lis_outcome_service_url'], 'lis_result_sourcedid'=>$_POST['lis_result_sourcedid']);
	$lti->setltivars($vars);

	
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
*/
?>