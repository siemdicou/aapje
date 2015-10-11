<?php 
	require 'config.php';
	require 'database.php';

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>test</title>
	<link rel="stylesheet" type="text/css" href="style2.css">
	<script type="text/javascript" src="script.js"></script>

</head>
<body>
<div id="wrapper">
<?php 
$page = (empty($_GET['page'])) ? '' : $_GET['page'];

	switch ($page) {
		case 'home':
			include "home.php";
		break;
		case 'fotoboek':
			include "fotoboek.php";
		break;
		case 'profile':
			// include "";
		break;
		case 'scoreboard':
			// include "";
		break;
		
		case 'quiz':
			// include "";
		break;
		
		default:
			include 'home.php';
		break;
	}
 ?>
 <br><br><br><br>
</div>
</body>
</html>