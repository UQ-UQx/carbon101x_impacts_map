<?php 
    session_start();
    require_once('inc/header.php'); 

?>
</head>
<body>
    <dl>
      <dt>LTI Call Data</dt><dd><pre><?php print_r($ltivars);?></pre></dd>
    </dl>
</body>
</html>
