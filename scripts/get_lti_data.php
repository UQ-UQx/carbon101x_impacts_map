<?php
	$ltivars = $lti->calldata();
	//print_r($ltivars);

	$ltidata_validate = True;
	$userId = '';
	$userRoles = '';
	$courseId = '';
	$activityId = -1;

	// Assign default values for all possible LTI Variables
	if(isset($ltivars['user_id'])) {
		$userId = $ltivars['user_id'];
	}
	else {
		$ltidata_validate = False;
	}

	if(isset($ltivars['roles'])) {
		$userRoles = $ltivars['roles'];
	}
	else {
		$ltidata_validate = False;
	}

	if(isset($ltivars['context_id'])) {
		$courseId = $ltivars['context_id'];
	}
	else {
		$ltidata_validate = False;
	}

	if(isset($ltivars['custom_activity_id'])) {
		$activityId = $ltivars['custom_activity_id'];
	}







