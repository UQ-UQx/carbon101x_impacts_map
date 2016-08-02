<!DOCTYPE html>
<html lang="en">
<head>
<!-- Remove this livereload line on production -->
<script src="//localhost:35729/livereload.js"></script>
<!-- Remove this livereload line on production -->
<!-- <base href="/PSYC101.1x_poll/" />  -->
<base href="/psyc101/1x/PSYC101.1x_poll/" />
<script src="lib/d3.min.js"></script>
<script src="lib/dimple.min.js"></script>
	
	<link rel="stylesheet" type="text/css" 
	href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>

	<link rel="stylesheet" type="text/css" 
	href="node_modules/font-awesome/css/font-awesome.min.css"></link>

	<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">

	<link rel="stylesheet" type="text/css" href="build/css/app.min.css"></link>

<meta name="viewport" content="width=device-width, initial-scale=1">


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
