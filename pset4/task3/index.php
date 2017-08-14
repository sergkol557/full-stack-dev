<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/style.css">
	<title>pyramid</title>
</head>
<body>
	<div>
		<?php
			for ($j = 0; $j < 50; $j++) {
				echo "<p>";

				for ($i = 0; $i <= $j; $i++) {
					echo "*";
				}

				echo "</p>";
			}
		?>
	</div>
</body>
</html>