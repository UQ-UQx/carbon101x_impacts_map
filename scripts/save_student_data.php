<?php
	session_start();

	require_once('../inc/db_connection.php');
	require_once('../lib/php/grade.php');
	require_once('../config.php');
	require_once('../lib/php/lti.php');

    $response = array();
//    $response['post'] = $_POST;
//    $response['session'] = $_SESSION;

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

?>