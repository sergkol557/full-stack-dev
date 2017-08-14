<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Summ from -1000 to 1000 only digits with ending 2,3,7</title>
</head>
<body>
<div align="center">
	<?php
	$summ = 0;
	for ($i = -1000; $i < 1001; $i++) {
		if (abs($i %10) == 2 || abs($i %10) == 3 || abs($i %10) == 7) {
			$summ += $i;
		}
	}
	echo "summ is $summ";
	?>
</div>
</body>
</html>