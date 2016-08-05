<?php
    require_once('inc/header.php'); 


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
    </div>

<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>
