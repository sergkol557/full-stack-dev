<?php
	if( isset($_POST['width']) && isset($_POST['height'])) {
		$rows = $_POST['height'];
		$cols = $_POST['width'];
	}  else {
		$rows = 8;
		$cols = 8;
	}
	$color1 = 'white';
	$color2 = 'black';
	$size = intval(1200/$cols);

	echo '<table border="1"><tr>';

	for ($i = 0; $i < $rows; $i++){

		echo '<tr>';

		for ($j=0; $j < $cols; $j++) {

			$style = ((	$i % 2 == 0 && $j % 2 == 0) ||
						$i % 2 == 1 && $j % 2 == 1) ? $color1: $color2;

			echo "<td style=\"background-color: $style;width: $size; height: $size;\"></td>";
		}
		echo '</tr>';
	}

	echo "</table>";
?>
