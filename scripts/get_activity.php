<?php

	try {
		echo 'get activity';

	}
	catch(Exception $e) {
		$warning_msg .= '<p>' . $e->getMessage() . '</p>';
	}

?>