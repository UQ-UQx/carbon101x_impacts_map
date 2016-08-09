<?php

	try {
		echo 'get activity';

		$activity = $db->read('CorrelationActivities', $ltivars['custom_activity_id'])->fetch();
		if(empty($activity)) {
			$warning_msg .= '<p>This activity does not exist. Please contact UQx Technical Team.</p>';
		}
		else {
			print_r($activity);
		}
	}
	catch(Exception $e) {
		$warning_msg .= '<p>' . $e->getMessage() . '</p>';
	}

?>