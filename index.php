<?php 

    require_once('inc/header.php'); 
    require_once('scripts/getLtiData.php');

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
    data-courseid="<?php echo $courseId; ?>" data-activityId="<?php echo $activityId; ?>" data-ltivalidate="<?php echo $ltidata_validate; ?>" > 

    <div class='warning-div' id='lack-lti-data'>
        <p></p>
    </div>

    <div class='input-div' id='add-activity'>
        <p class='title'>Add Activity</p>
        <form action='scripts/add_activity.php' method='post'>
        Title:<br>
        <input type='text' id='activity-title'><br>
        Intro Screen:<br>
        <textarea id='activity-intro-screen' rows='10' cols='80'>
        </textarea><br>
        Final Screen:<br>
        <textarea id='activity-final-screen' rows='10' cols='80'>
        </textarea><br>
        <input type='submit' value='Submit'>
        </form>
    </div>


</div>
<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>
