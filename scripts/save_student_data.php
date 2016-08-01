<?php

    $response = array();
	$response['b'] = 'banana';
	$response['post'] = $_POST;


	require_once('../inc/db_connection.php');
	require_once('../lib/grade.php');

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
