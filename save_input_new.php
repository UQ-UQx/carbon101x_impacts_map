<?php
    if(isset($_POST['submit_input']) && $_POST['submit_input'])  {
		//echo 'saving';
		//print_r($db);
		print_r($_POST);

		//echo $warning_msg;

		if(empty($_POST['studentingroup_id'])) {
			$warning_msg .= '<p>POST var: studentingroup_id is not available.</p>';
		}
		if(empty($_POST['activity_id'])) {
			$warning_msg .= '<p>POST var: activity_id is not available.</p>';
		}
		if(empty($_POST['slider_text'])) {
			$warning_msg .= '<p>POST var: slider_text is not available.</p>';
		}

		if($warning_msg == '' && $db) {
			try {
				$db->create('StudentInput', array(
					'StudentInGroupID' => $_POST['studentingroup_id'],
					'Response' => $_POST['slider_text'],
					'ActivityID' => $_POST['activity_id'],
					'AssignedGroup' => $_POST['assigned_group'],
				));
			}
			catch(Exception $e) {
				$warning_msg .= '<p>' . $e->getMessage() . '</p>';
			}
		}

		echo '<META HTTP-EQUIV="Refresh" Content="0; URL=index.php">';
    }

?>