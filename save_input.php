<?php

    require_once('inc/db_connection.php');
    //print_r($db);
    //print_r($_POST);

    $warning_msg_new = '';
	if(empty($_POST['studentingroup_id'])) {
		$warning_msg_new .= '<p>POST var: studentingroup_id is not available.</p>';
	}
	if(empty($_POST['activity_id'])) {
		$warning_msg_new .= '<p>POST var: activity_id is not available.</p>';
	}
	if(empty($_POST['slider_text'])) {
		$warning_msg_new .= '<p>POST var: slider_text is not available.</p>';
	}
	if(empty($_POST['assigned_group'])) {
		$warning_msg_new .= '<p>POST var: assigned_group is not available.</p>';
	}

    if($warning_msg_new == '') {
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
			$warning_msg_new .= '<p>' . $e->getMessage() . '</p>';
		}
    }

	if($warning_msg_new == '') {
		header('Location: index.php');
	}
	else {
		require_once('inc/header.php');
		$warning_msg_new .= $warning_msg;
	}
?>	
</head>
<body>
   <div class='warning-div' id='warning-msg-div' style='display:block'>
       <?php echo $warning_msg_new; ?>	
   </div>
</body>
</html>