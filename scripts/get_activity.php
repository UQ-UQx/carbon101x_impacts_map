<?php

	/*
	$a = array();
	$a['a'] = 'apple';
	$a['b'] = 'banana';
	echo $a;
	echo json_encode($a);

	#print_r($db);
	*/

	try {
		$activity = $db->read('Activities', $activityId)->fetch();
		if(empty($activity)) {
			$warning_msg .= '<p>This activity does not exist. Please contact UQx Technical Team.</p>';
		}
		else {
			$activity = json_encode($db->read('Activities', $activityId)->fetch());
			//echo $activity;
		}
	}
	catch(Exception $e) {
		$warning_msg .= '<p>' . $e->getMessage() . '</p>';
	}


?>