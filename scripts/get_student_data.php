<?php
	try {
		$student_input = query_student_input($db, $ltivars['user_id'], $ltivars['custom_activity_id']);
	}
	catch(Exception $e) {
		$warning_msg .= '<p>' . $e->getMessage() . '</p>';
	}

	function query_student_input($db, $edx_userid, $activity_id) {
		$conditions = array(
			'edx_userid' => $edx_userid,
			'ActivityID' => $activity_id
		);
		//print_r($conditions);
		$result = $db->select('CorrelationStudentInput', '*', $conditions)->fetch();
		return $result;
	}
?>
