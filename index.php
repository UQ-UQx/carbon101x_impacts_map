<?php
    require_once('inc/header.php'); 
?>
<script type="text/javascript">
    var ltivars = <?php echo json_encode($ltivars); ?>;
    var activity = <?php echo json_encode($activity); ?>;
    var studentInput = <?php echo json_encode($student_input); ?>;
</script>

</head>
<body>
<div class="container">
    <h1>Welcome to the LTI base module</h1>

    <p>This is an LTI boiler plate built on PHP</p>
    <p>You will find that this version now includes the usage of NPM packages, e.g. Browserify, Jquery, Bootstrap ... etc.</p>
    <p>If you need any other external libraries, check to see if it exists on the NPM registry and is being maintained</p>
    
    <dl>
      <dt>LTI Call Data</dt><dd><pre><?php print_r($ltivars);?></pre></dd>
    </dl>
</div>
<script type="text/javascript" src="build/js/app.js"></script>
</body>
</html>