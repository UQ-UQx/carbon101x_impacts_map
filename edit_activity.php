<?php 
	require_once('inc/header.php');
	//print_r($_POST);

	$info_msg = '';

	if($warning_msg == '') {
		try {
			$data = array(
				'Title' => $_POST['activity-title'],
				'IntroScreenA' => $_POST['activity-intro-screen-a'],
				'IntroScreenB' => $_POST['activity-intro-screen-b'],
				'FinalScreen' => $_POST['activity-final-screen'],
				);
			$db->update('Activities', $data, $_POST['activity-id']);

			$info_msg .= 'You had successfully updated this activity. The activity id is <b>' . $_POST['activity-id'] . '</b>. Please keep it for futher useage.';
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