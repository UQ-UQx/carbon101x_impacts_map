<?php
    require_once('inc/header.php'); 

    // For testing
    if(is_null($ltivars['custom_activity_id'])) {
        $ltivars['custom_activity_id'] = -1;
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
            abc
            </div>
        </div>
        <?php
                        }
                        else {

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
