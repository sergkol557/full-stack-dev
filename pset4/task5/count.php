<?php
	if (intval($_POST['number']) != 0) {
		$summ = 0;
		$number = $_POST['number'];

		while ( $number >= 1) {
			$summ += $number % 10;
			$number = intval($number / 10);
		}
		echo "summ of digits is $summ";

	} else {
		echo "enter the number";
	}
?>