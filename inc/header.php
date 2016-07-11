<!DOCTYPE html>
<html lang="en">
<head>
<!-- Remove this livereload line on production -->
<script src="//localhost:35729/livereload.js"></script>

<!-- Remove this livereload line on production -->

	
	<link rel="stylesheet" type="text/css" href="build/css/app.min.css"></link>

	<link rel="stylesheet" type="text/css" 
	href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>

	<link rel="stylesheet" type="text/css" 
	href="node_modules/font-awesome/css/font-awesome.min.css"></link>


<?php
	$root = dirname(__DIR__);
	require_once($root . '/config.php');
	require_once($root . '/lib/lti.php');
	$warning_msg = '';
	$lti = new Lti($config,true);
	$lti_valid = $lti->is_valid();
	if(!$lti->is_valid()) {
		$warning_msg .= '<p>LTI Invalid.</p>';
	}

	if(isset($config['use_db']) && $config['use_db']) {
		try {
			require_once($root . '/inc/db_connection.php');
			$db = Db::instance();
			/*
			require_once($root . '/lib/db.php');
			Db::config( 'driver',   'mysql' );
			Db::config( 'host',     $config['db']['hostname'] );
			Db::config( 'database', $config['db']['dbname'] );
			Db::config( 'user',     $config['db']['username'] );
			Db::config( 'password', $config['db']['password'] );
			$db = Db::instance();
			*/
		}
		catch (Exception $e) {
			$warning_msg .= '<p>' . $e->getMessage() . '</p>';
		}
	}	
?>
	
<?php
	$dev_message = '<p class="uqx-danger text-center">Dev Version - 
					  DO NOT USE IN COURSES - contact UQx Technical Team</p>';

	$valid_message = '<p class="uqx-valid text-center">LTI Valid</p>';

	$invalid_message = '<p class="uqx-invalid text-center">LTI Invalid 
						- contact UQx Technical Team</p>';

	echo $dev_message;
	if($lti->is_valid()) {
		echo $valid_message;
	} else {
		echo $invalid_message;
		//die();
	}
?>
