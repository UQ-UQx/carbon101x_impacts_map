<?php
    require_once('inc/header.php'); 

    // For testing
    $ltivars['custom_activity_id'] = 5;

    
    if($warning_msg == '' && $ltivars['custom_activity_id'] != -1) {
        require_once('scripts/get_activity.php');
    }
    

?>
<script type="text/javascript">
    var ltivars = <?php echo json_encode($ltivars); ?>;
</script>

</head>
<body>
    <?php 
        if($ltivars['roles'] == 'Instructor' || $ltivars['roles'] == 'Administrator') {
            $info_title = '<p class="uqx-info text-center">Staff Role</p>'; 
            $info_message = '<p class="text-info"></p>';
            echo $info_title;
            echo $info_message;
        }
    ?>
    <dl>
      <dt>LTI Call Data</dt><dd><pre><?php print_r($ltivars);?></pre></dd>
    </dl>
    <div class="container">
        <?php   if($warning_msg != "") { ?>
        <!-- warning-div -->
        <div class="row">
            <div class="col-md-12 warning-div" id="warning-msg-div">
                <?php echo $warning_msg; ?>
            </div>
        </div>
        <?php   }
                else {
                    if($ltivars['roles'] == 'Instructor' || $ltivars['roles'] == 'Administrator') {
                        if($ltivars['custom_activity_id'] == -1) {
        ?>
        <!-- add-activity -->
        <div class="row">
            <div class="col-md-12 input-div" id="add-activity">
                <h3>Add Activity</h3>
                <form id='add-activity-form' name='add-activity-form' action='add_activity.php' method='post'>
                <input type="hidden" name="course_id" value="<?php echo $ltivars['context_id'];?>">

                Title:<br>
                <input type='text' id='add-activity-title' name='activity-title' size='60'><br><br>

                Activity Intro Text:<br>
                <textarea id='add-activity-intro' name='activity-intro' rows='10' cols='80' required></textarea><br><br>

                Question 1:<br>
                <textarea id='add-activity-q1' name='activity-q1' rows='10' cols='80' required></textarea><br>
                Question 1 Scale (Number):
                <input type='text' id='add-activity-q1scale' name='activity-q1scale' size='5' required><br><br>

                Question 2:<br>
                <textarea id='add-activity-q2' name='activity-q2' rows='10' cols='80' required></textarea><br>
                Question 2 Scale (Number):
                <input type='text' id='add-activity-q2scale' name='activity-q2scale' size='5' required><br><br>

                Scatterplot diplay text:<br>
                <textarea id='add-activity-sptext' name='activity-sptext' rows='10' cols='80'></textarea><br>

                <input type='submit' value='Save' class="btn btn-primary">
                </form>            
            </div>
        </div>
        <?php
                        }
                        else {
        ?>
        <!-- edit-activity -->
        <div class="row">
            <div class="col-md-12 input-div" id="edit-activity">
                <h3>Edit Activity</h3>
                <form id='edit-activity-form' name='edit-activity-form' action='edit_activity.php' method='post'>
                <input type='hidden' id='edit-activity-id' name='activity-id' value='<?php echo $activity->id; ?>'><br>
                Title:<br>
                <input type='text' id='edit-activity-title' name='activity-title' size='60' value='<?php echo $activity->Title; ?>'><br><br>

                Activity Intro Text:<br>
                <textarea id='edit-activity-intro' name='activity-intro' rows='10' cols='80' required><?php echo $activity->IntroText; ?></textarea><br><br>

                Question 1:<br>
                <textarea id='edit-activity-q1' name='activity-q1' rows='10' cols='80' required><?php echo $activity->Question1; ?></textarea><br>
                Question 1 Scale (Number):
                <input type='text' id='edit-activity-q1scale' name='activity-q1scale' size='5' value='<?php echo $activity->Question1Scale; ?>' required><br><br>

                Question 2:<br>
                <textarea id='edit-activity-q2' name='activity-q2' rows='10' cols='80' required><?php echo $activity->Question2; ?></textarea><br>
                Question 2 Scale (Number):
                <input type='text' id='edit-activity-q2scale' name='activity-q2scale' size='5' value='<?php echo $activity->Question2Scale; ?>' required><br><br>

                Scatterplot diplay text:<br>
                <textarea id='edit-activity-sptext' name='activity-sptext' rows='10' cols='80'><?php echo $activity->SPText; ?></textarea><br>

                <input type='submit' value='Save' class="btn btn-primary">
                </form>            
            </div>
        </div>

        <?php
                        }
        ?>
        <?php
                    }
                    else if($lti_data['roles'] == 'Student'){
                    }
                }
        ?>








    </div>

<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>
