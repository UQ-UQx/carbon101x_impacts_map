<?php

	$a = array();
	$a['a'] = 'apple';
	$a['b'] = 'banana';
	$a['id'] = $_POST['activity_id'];
	echo json_encode($a);

?>