<?php 

    require_once('inc/header.php'); 
    require_once('scripts/get_lti_data.php');

    // Test data
    //$activityId = 38;
    //$userRoles = 'Student';
    //$userId = 98;

    // Get the activity information based on $activityId
    $activity = '';
    if($warning_msg == '') {
	    if($activityId > 0)  {
        	require_once('scripts/get_activity.php');
        }
    }

    //$warning_msg = "HAHA, I AM WARNING MESSAGE.";

?>
</head>
<body>
<div class="container">
    <div class='lti-data' id='lti-data' data-userid="<?php echo $userId; ?>" data-userroles="<?php echo $userRoles; ?>" data-ltiId="<?php echo $lti_id; ?>" data-lisOutcome="<?php echo $lis_outcome_service_url; ?>" data-lisResult="<?php echo $lis_result_sourcedid; ?>" 
    data-courseid="<?php echo $courseId; ?>" data-activityId='<?php echo $activityId; ?>' data-warningmsg="<?php echo $warning_msg; ?>" 
     <?php
        printf('data-activity="%s" ', htmlspecialchars($activity, ENT_QUOTES, 'UTF-8'));
     ?>
    > </div>

    
    <div class='row'>
    <div class='warning-div col-md-12' id='warning-msg-div' style='display:block'></div>
    </div>

    <div class='row'>
    <div class='input-div col-md-12' id='add-activity'  style='display:none'>
        <h3>Add Activity</h3>
        <form id='add-activity-form' name='add-activity-form' action='add_activity.php' method='post'>
        <input type="hidden" name="course_id" value="<?php echo $courseId;?>">
        Title:<br>
        <input type='text' id='add-activity-title' name='activity-title'><br>
        Intro Screen A:<br>
        <textarea id='add-activity-intro-screen-a' name='activity-intro-screen-a' rows='10' cols='80' required>
        </textarea><br>
        Intro Screen B:<br>
        <textarea id='add-activity-intro-screen-b' name='activity-intro-screen-b' rows='10' cols='80' required>
        </textarea><br>
        Final Screen:<br>
        <textarea id='add-activity-final-screen' name='activity-final-screen' rows='10' cols='80' required>
        </textarea><br>
        <input type='submit' value='Submit' class="btn btn-primary">
        </form>
    </div>
    </div>

    <div class='row'>
    <div class='input-div col-md-12' id='edit-activity'  style='display:none'>
        <h3>Edit Activity</h3>
        <form id='edit-activity-form' name='edit-activity-form' action='edit_activity.php' method='post'> 
        <input type='hidden' id='edit-activity-id' name='activity-id' value=''><br>
        Title:<br>
        <input type='text' id='edit-activity-title' name='activity-title'><br>
        Intro Screen A:<br>
        <textarea id='edit-activity-intro-screen-a' name='activity-intro-screen-a' rows='10' cols='80' required>
        </textarea><br>
        Intro Screen B:<br>
        <textarea id='edit-activity-intro-screen-b' name='activity-intro-screen-b' rows='10' cols='80' required>
        </textarea><br>
        Final Screen:<br>
        <textarea id='edit-activity-final-screen' name='activity-final-screen' rows='10' cols='80' required>
        </textarea><br>
        <input type='submit' value='Submit' class="btn btn-primary">
        </form>
    </div>
    </div>

    <div class="row">
    <div class='activity-div col-md-12'>
    </div>
    </div>

</div>
<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>
