<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">

	<title>Summ from -1000 to 1000</title>
</head>
<body>
	<div align="center">
		<?php
			$summ = 0;
			for ($i = -1000; $i < 1001; $i++) {
				$summ += $i;
			}
			echo "summ is $summ";
		?>
	</div>
</body>
</html>
