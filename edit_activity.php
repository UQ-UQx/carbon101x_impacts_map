<?php 
	require_once('inc/header.php');
	//print_r($_POST);

	$info_msg = '';

	if($warning_msg == '') {
		try {
			
			$data = array(
				'Title' => isset($_POST['activity-title']) ? $_POST['activity-title'] : '',
				'IntroText' => isset($_POST['activity-intro']) ? $_POST['activity-intro'] : '',
				'Question1' => $_POST['activity-q1'],
				'Question1ScaleLabels' => $_POST['activity-q1scale'],
				'Question2' => $_POST['activity-q2'],
				'Question2ScaleLabels' => $_POST['activity-q2scale'],
				'SPText' => isset($_POST['activity-sptext']) ? $_POST['activity-sptext'] : '',
				);
			$db->update('CorrelationActivities', $data, $_POST['activity-id']);

			$info_msg .= 'You have successfully updated this activity. The activity id is <b>' . $_POST['activity-id'] . '</b>. Please keep it for further usage.';
			
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