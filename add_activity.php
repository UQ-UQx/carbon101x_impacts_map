<?php 
	require_once('inc/header.php');

	$info_msg = '';

	if($warning_msg == '') {
		try {
			$db->create('CorrelationActivities', array(
				'edx_courseid' => $_POST['course_id'],
				'Title' => isset($_POST['activity-title']) ? $_POST['activity-title'] : '',
				'IntroText' => isset($_POST['activity-intro']) ? $_POST['activity-intro'] : '',
				'Question1' => $_POST['activity-q1'],
				'Question1Scale' => $_POST['activity-q1scale'],
				'Question2' => $_POST['activity-q2'],
				'Question2Scale' => $_POST['activity-q2scale'],
				'SPText' => isset($_POST['activity-sptext']) ? $_POST['activity-sptext'] : '',
				));
			$insert_id = $db->id();
			$info_msg .= 'You have successfully added this activity. The activity id is <b>' . $insert_id . '</b>. Please keep it for further usage.';
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
	<div class="row">
	    <div class='info-div col-md-12' id='add-activity-info-div' style='display:block'>
	        <?php echo $info_msg; ?>
	    </div>
    </div>
</div>   
</body>
</html>