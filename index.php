<?php 

    require_once('inc/header.php'); 
    require_once('scripts/get_lti_data.php');

    //$activityId = 27;
    //print $warning_msg;
    if($warning_msg == '') {
	    if($activityId > 0)  {
        	require_once('scripts/get_activity.php');
        }
    }

?>
</head>
<body>
<div class="content">

    <h1 class="mainHeaderTitle">Welcome to the LTI base module</h1> 

    <p>This is an LTI boiler plate built on PHP</p>
    <p>You will find that this version now includes the usage of NPM packages, e.g. Browserify, Jquery, Bootstrap ... etc.</p>
    <p>If you need any other external libraries, check to see if it exists on the NPM registry and is being maintained</p>

    <button type="button" class="gradebutton">Send Grade</button>

    
    <dl>
      <dt>LTI Call Data</dt><dd><pre><?php print_r($ltivars);?></pre></dd>
    </dl>

    <div class='lti-data' id='lti-data' data-userid="<?php echo $userId; ?>" data-userroles="<?php echo $userRoles; ?>" 
    data-courseid="<?php echo $courseId; ?>" data-activityId='<?php echo $activityId; ?>' data-warningmsg="<?php echo $warning_msg; ?>" 
     <?php 
         printf('data-activity="%s"', htmlspecialchars($activity, ENT_QUOTES, 'UTF-8'));
     ?>
    > </div>

    <div class='warning-div' id='warning-msg-div' style='display:block'>

    </div>

    <div class='input-div' id='add-activity'  style='display:none'>
        <p class='title'>Add Activity</p>
        <form id='add-activity-form' name='add-activity-form' action='add_activity.php' method='post'>
        Title:<br>
        <input type='text' id='add-activity-title' name='activity-title' required><br>
        Intro Screen A:<br>
        <textarea id='add-activity-intro-screen-a' name='activity-intro-screen-a' rows='10' cols='80' required>
        </textarea><br>
        Intro Screen B:<br>
        <textarea id='add-activity-intro-screen-b' name='activity-intro-screen-b' rows='10' cols='80' required>
        </textarea><br>
        Final Screen:<br>
        <textarea id='add-activity-final-screen' name='activity-final-screen' rows='10' cols='80' required>
        </textarea><br>
        <input type='submit' value='Submit'>
        </form>
    </div>

    <div class='input-div' id='edit-activity'  style='display:none'>
        <p class='title'>Edit Activity</p>
        <form id='edit-activity-form' name='edit-activity-form' action='edit_activity.php' method='post'>
        Activity ID:<br>       
        <input type='text' id='edit-activity-id' name='activity-id' ><br>
        Title:<br>
        <input type='text' id='edit-activity-title' name='activity-title' required><br>
        Intro Screen A:<br>
        <textarea id='edit-activity-intro-screen-a' name='activity-intro-screen-a' rows='10' cols='80' required>
        </textarea><br>
        Intro Screen B:<br>
        <textarea id='edit-activity-intro-screen-b' name='activity-intro-screen-b' rows='10' cols='80' required>
        </textarea><br>
        Final Screen:<br>
        <textarea id='edit-activity-final-screen' name='activity-final-screen' rows='10' cols='80' required>
        </textarea><br>
        <input type='submit' value='Submit'>
        </form>
    </div>


</div>
<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>
