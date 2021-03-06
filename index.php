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

  	//echo $dev_message;
  	if($lti_valid) {
  		//echo $valid_message;
  	} else {
  		echo $invalid_message;
  		//die();
  	}
  ?>
<div class="container">
    <div class='row'>
        <div id="worldmap" class="col-xs-12 col-sm-12 col-md-12"></div>
    </div>

    <div class="row">
        <div id="smallmap" class="col-xs-12 col-sm-4 col-md-4 hidden"></div>
        <div id="key_impact_risks" class="col-xs-12 col-sm-8 col-md-8 hidden">
            <h4 id="key_impact_risks_title">Key Impact Risks</h4>
            <div class="risks">
            </div>
        </div>
    </div>

    <div class="row">
        <div id="risk_level" class="col-xs-12 col-sm-4 col-md-4 hidden">
            <h4>Risk level:</h4>
            <div class="list-group">
                <div class="list-group-item">
	                <h6>Present</h6>
	                <div class="progress">
                        <div class="progress-bar" role="progressbar" id="present_level" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
                <div class="list-group-item">
	                <h6>2°C Warming</h6>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" id="degree2_level" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
                <div class="list-group-item">
	                <h6>4°C Warming</h6>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" id="degree4_level" aria-valuemin="0" aria-valuemax="10"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="risk_details" class="col-xs-12 col-sm-8 col-md-8 hidden">
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
    </div>
</div>
<script type="text/javascript" src="build/js/app.min.js"></script>

</body>
</html>
