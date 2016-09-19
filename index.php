<?php
    require_once('inc/header.php');
?>
<script type="text/javascript">
    var ltivars = <?php echo json_encode($ltivars); ?>;
</script>

</head>
<body>
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
<div class="container">
    <h1>Welcome to the LTI base module</h1>

    <p>This is an LTI boiler plate built on PHP</p>
    <p>You will find that this version now includes the usage of NPM packages, e.g. Browserify, Jquery, Bootstrap ... etc.</p>
    <p>If you need any other external libraries, check to see if it exists on the NPM registry and is being maintained</p>

    <dl>
      <dt>LTI Call Data</dt><dd><pre><?php print_r($ltivars);?></pre></dd>
    </dl>

    <div class='row'>
    <div id="worldmap" class="col-md-offset-2 col-md-8"></div>
    </div>

    <div id="key_impact_risks">
        <h4>Key Impact Risks</h4>
        <div class="risks">
        </div>
    </div>

    <div id="risk_level">
        <h4>Risk level:</h4>
        <div class="list-group">
            <div class="list-group-item row">
                <div class="col-xs-2 level-label">Present</div>
                <div class="col-xs-10 ">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" id="present_level" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
            </div>
            <div class="list-group-item row">
                <div class="col-xs-2 level-label">2 &#8451; Warming</div>
                <div class="col-xs-10">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" id="degree2_level" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
            </div>
            <div class="list-group-item row">
                <div class="col-xs-2 level-label">4 &#8451; Warming</div>
                <div class="col-xs-10">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" id="degree4_level" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="risk_details">
        <div class="details_title">
            <img src="" id="title_img" class="img-responsive img-circle title_img" alt="">
            <h4 id="title_text" class="title_text"></h4>
        </div>
        <div class="details_drivers">
            <div class="drivers_title">
                <h5>Climatic drivers:</h5>
            </div>
            <div class="driver_img_container">
            </div>
        </div>
        <div class="details_facts">
            <h5>Key facts:</h5>
            <ul>
            </ul>
        </div>
        <div class="details_sources">
            <h5>Sources:</h5>
            <ol>
            </ol>
        </div>
    </div>


    <div id="forui"></div>


</div>
<script type="text/javascript" src="build/js/app.js"></script>

</body>
</html>
