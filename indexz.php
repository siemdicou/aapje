<!DOCTYPE html>
<html>
<head>
	<title>test</title>
	<link rel="stylesheet" type="text/css" href="style2.css">

</head>
<body>
<div id="wrapper">
	<div id="name">Hardcoregamer666 </div>
	<div id="profile"><img src="img/01.jpg"></div>
	<div class="buttons">
	<a href="?page=home"><div id="button1">quiz</div></a>
	<a href="?page=scoreboard"><div id="button2">scoreboard</div></a>
	<a href="?page=profiel"><div id="button3">profiel</div></a>
	<a href="?page=asfsafs"><div id="button4">zxvzxv</div></a>
	</div>
<?php 
$page = (empty($_GET['page'])) ? '' : $_GET['page'];

	switch ($page) {
		case 'home':
			// include "";
		break;
		case 'home':
			// include "";
		break;
		case 'home':
			// include "";
		break;
		case 'home':
			// include "";
		break;
		
		default:
			// include 'indexz.php';
			break;
	}
 ?>
 <br><br><br><br>
 <h1>gasgs</h1>
</div>
</body>
</html>