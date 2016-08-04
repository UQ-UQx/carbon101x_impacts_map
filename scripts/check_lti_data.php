<?php
    $ltivars = $lti->calldata();

    $required_key = array("user_id", "roles", "oauth_nonce", "oauth_timestamp", "oauth_consumer_key", "custom_activity_id");
    $warning_msg = "";

    foreach($required_key as $value) {
    	if(empty($ltivars[$value])) {
    		$warning_msg .= "<<p>LTI var: " . $value . " is not avaiable.</p>";
    	}
    }
