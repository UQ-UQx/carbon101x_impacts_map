<?php

	/*
	$a = array();
	$a['a'] = 'apple';
	$a['b'] = 'banana';
	echo $a;
	echo json_encode($a);

	#print_r($db);
	*/

	$activity = '';

	try {
		$activity = json_encode($db->read('Activities', $activityId)->fetch());
		echo $activity;
	}
	catch(Exception $e) {
		$warning_msg .= '<p>' . $e->getMessage() . '</p>';
	}


?>