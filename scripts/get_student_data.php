<?php

	require_once('../inc/db_connection.php');
	$edx_userid = $_POST['user_id'];
	$activity_id = $_POST['activity_id'];

	$response = array();
	//$response['a'] = 'apple';
	$response['activity_id'] = $_POST['activity_id'];
	$response['user_id'] = $_POST['user_id'];

	try 
	{
		$db = Db::instance();

		$student_in_group = query_student_in_group($db, $edx_userid, $activity_id);
		if(empty($student_in_group)) {
			$student_in_group = insert_student_in_group($db, $edx_userid, $activity_id);
		}
		$response['student_in_group'] = $student_in_group;

		$student_input = query_student_input($db, $student_in_group);

		$response += $student_input;
	}
	catch(Exception $e) {
		$response['warning_msg'] = '<p>' . $e->getMessage() . '</p>';
	}

	echo json_encode($response);


	function query_student_in_group($db, $edx_userid, $activity_id) {
		$student = array();
		$formatted_result = array();

		$conditions = array(
			'edx_userid' => $edx_userid,
			'ActivityID' => $activity_id
		);
		$result = $db->select('StudentInGroup', '*', $conditions)->fetch();

		return $result;
	}

	// Assign a group to student and insert it into StudentInGroup
	// Note: only do this when there is no record equal to the value of $edx_user_id and $activity_id 
	function insert_student_in_group($db, $edx_userid, $activity_id) {
		$count = $db->read('StudentInGroup', $activity_id, 'ActivityID')->count();

		$data = array(
			'edx_userid' => $edx_userid,
			'ActivityID' => $activity_id
		);

		// Assign student to Group			
		if($count % 2 == 0) {
			$data['AssignedGroup'] = 'A';
		}
		else {
			$data['AssignedGroup'] = 'B';
		}

		$data['id'] = $db->create('StudentInGroup', $data)->id();

		return $data;
	}


	function query_student_input($db, $student_in_group) {
		//$db->read('StudentInput', )
		$conditions = array(
			'StudentInGroupID' => $student_in_group->id,
			'ActivityID' => $student_in_group->ActivityID
		);
		$result = $db->select('StudentInput', '*', $conditions)->fetch();

		$result_all = array();
		if($result) {
			$select = $db->read('StudentInput', $student_in_group->ActivityID, 'ActivityID');
			while($row = $select->fetch()) {
				array_push($result_all, $row);
			}
		}
		return array('user_input' => $result, 'all_input' => $result_all);
	}


