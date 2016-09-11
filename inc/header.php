<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<!-- Remove this livereload line on production -->
<script src="//localhost:35729/livereload.js"></script>
<!-- Remove this livereload line on production -->

<!-- Input the base path here -->
<base href="/carbon101x/carbon101x_impacts_map/" />
<script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
<script src="node_modules/datamaps/dist/datamaps.world.min.js"></script>
<script src="node_modules/datamaps/dist/datamaps.all.min.js"></script>

<link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.min.css"></link>
<link rel="stylesheet" type="text/css" href="node_modules/font-awesome/css/font-awesome.min.css"></link>
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">



<link rel="stylesheet" type="text/css" href="build/css/app.min.css"></link>

<meta name="viewport" content="width=device-width, initial-scale=1">

<?php
	$root = dirname(__DIR__);
	require_once($root . '/config.php');
	require_once($root . '/lib/php/lti.php');

	$warning_msg = '';
	$ltivars = array();
	//unset($_SESSION['ltivars']);

	// Initial $ltivars
	if(empty($_SESSION['ltivars'])) {
		$lti = new Lti($config, true);
		$lti_valid = $lti->is_valid();

		if($lti_valid) {
			$_SESSION['ltivars'] = $lti->calldata();
		}
		else {
			$warning_msg .= '<p>LTI Invalid.</p>';
		}
	}
	else {
		$lti_valid = true;
	}
	$ltivars = $_SESSION['ltivars'];

	// Initial $db
	if(isset($config['use_db']) && $config['use_db']) {
		try {
			require_once($root . '/inc/db_connection.php');
			$db = Db::instance();
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
	if($lti_valid) {
		echo $valid_message;
	} else {
		echo $invalid_message;
		//die();
	}
?>
