<?php 
	require_once('inc/header.php');

	$info_msg = '';

	if($warning_msg == '') {
		try {
			$db->create('Activities', array(
				'Edx_courseid' => $_POST['course_id'],
				'Title' => $_POST['activity-title'],
				'IntroScreenA' => $_POST['activity-intro-screen-a'],
				'IntroScreenB' => $_POST['activity-intro-screen-b'],
				'FinalScreen' => $_POST['activity-final-screen'],
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