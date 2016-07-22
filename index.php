<?php 

    require_once('inc/header.php'); 
    require_once('scripts/get_lti_data.php');

    // Test data
    $activityId = 11;
    $userRoles = 'Student';
    $userId = 34;

    // Get the activity information based on $activityId
    $activity = '';
    if($warning_msg == '') {
	    if($activityId > 0)  {
        	require_once('scripts/get_activity.php');
        }
    }

    //require_once('save_input.php');
?>
</head>
<body>
<div class="content">

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
        <input type="hidden" name="course_id" value="<?php echo $courseId;?>">
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

    <div class='activity-div'>
    </div>

</div>
<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>
