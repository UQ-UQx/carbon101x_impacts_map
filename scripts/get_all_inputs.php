<?php
	require_once('../inc/db_connection.php');

	$response = array();
	//$response['POST'] = $_POST;
	$response['warning_msg'] = '';

	//$warning_msg = '';
	try{
		$db = Db::instance();

		$response['all_inputs'] = query_all_inputs($db, $_POST['ActivityID']);

	}
	catch(Exception $e) {
		$response['warning_msg'] .= '<p>' . $e->getMessage() . '</p>';
	}

	echo json_encode($response);

	function query_all_inputs($db, $activity_id) {
		$all_inputs = array();
		$select = $db->read('CorrelationStudentInput', $activity_id, 'ActivityID');
		while($row = $select->fetch()) {
			array_push($all_inputs, $row);
		}
		return $all_inputs;
	}
