<?php
	$ltivars = $lti->calldata();
	//print_r($ltivars);

	$ltivars_warning_msg = '';

	$userId = '';
	$userRoles = '';
	$courseId = '';

	// Assign default values for all possible LTI Variables
	if(isset($ltivars['user_id'])) {
		$userId = $ltivars['user_id'];
	}
	else {
		$ltivars_warning_msg .= '<p>LTI var: user_id is not avaiable.</p>';
	}

	if(isset($ltivars['roles'])) {
		$userRoles = $ltivars['roles'];
	}
	else {
		$ltivars_warning_msg .= '<p>LTI var: roles is not avaiable.</p>';
	}

	if(isset($ltivars['context_id'])) {
		$courseId = $ltivars['context_id'];
	}
	else {
		$ltivars_warning_msg .= '<p>LTI var: context_id is not avaiable.</p>';
	}

	if(isset($ltivars['custom_activity_id'])) {
		$activityId = $ltivars['custom_activity_id'];
	}
	else {
		$ltivars_warning_msg .= '<p>LTI var: custom_activity_id is not avaiable.</p>';	
	}

	$warning_msg .= $ltivars_warning_msg;







