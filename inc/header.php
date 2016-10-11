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

<!-- Risks Data-->
<script src="www/js/risk_details.js"></script>

<link rel="stylesheet" type="text/css" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="node_modules/font-awesome/css/font-awesome.min.css">

<link rel="stylesheet" type="text/css" href="build/css/app.min.css">

<meta name="viewport" content="width=device-width, initial-scale=1">

<?php
	$root = dirname(__DIR__);
	require_once($root . '/config.php');
	require_once($root . '/lib/php/lti.php');

	$warning_msg = '';
	$ltivars = array();
	//unset($_SESSION['ltivars']);

	// Initial $ltivars
    if(isset($_POST['oauth_consumer_key']) || empty($_SESSION['ltivars'])) {
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
