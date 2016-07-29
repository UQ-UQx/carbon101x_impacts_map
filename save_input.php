<?php

    //require_once('inc/db_connection.php');
    //print_r($db);
	require_once('inc/header.php');
	require_once('lib/grade.php');
    //print_r($_POST);
    //print_r($lti);
    //print_r('end');

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
	    	//$db = Db::instance();
			$db->create('StudentInput', array(
				'StudentInGroupID' => $_POST['studentingroup_id'],
				'Response' => $_POST['slider_text'],
				'ActivityID' => $_POST['activity_id'],
				'AssignedGroup' => $_POST['assigned_group'],
			));

			// Send grade
			$grade = 1;
			if($lti->grade_url() != 'No Grade URL') {
				send_grade($grade,$lti);
			}
			echo '<META HTTP-EQUIV="Refresh" Content="0; URL=index.php">';

		}
		catch(Exception $e) {
			$warning_msg .= '<p>' . $e->getMessage() . '</p>';
		}
    }


?>	
</head>
<body>
<div class="container">
	<div class="row">
		<div class='warning-div col-md-12' id='warning-msg-div' style='display:block'>
			<?php echo $warning_msg; ?>	
		</div>
	</div>
</div>   
</body>
</html>