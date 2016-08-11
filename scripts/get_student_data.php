<?php

	echo 'get_student_data.php';

	try {
		$student_input = query_student_input($db, $ltivars['user_id'], $ltivars['custom_activity_id']);
		if(!empty($student_input)) {
			$all_inputs = query_all_inputs($db, $ltivars['custom_activity_id']);
		}
	}
	catch(Exception $e) {
		$warning_msg .= '<p>' . $e->getMessage() . '</p>';
	}

	function query_student_input($db, $edx_userid, $activity_id) {
		$conditions = array(
			'edx_userid' => $edx_userid,
			'ActivityID' => $activity_id
		);
		$result = $db->select('CorrelationStudentInput', '*', $conditions)->fetch();
	}

	function query_all_inputs($db, $activity_id) {
		$all_inputs = array();
		$select = $db->read('CorrelationStudentInput', $activity_id, 'ActivityID');
		while($row = $select->fetch()) {
			array_push($all_inputs, $row);
		}
		return $all_inputs;
	}

?>
