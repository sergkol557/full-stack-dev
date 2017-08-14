<?php
$massiv =array();
	for ($i = 0; $i < 100; $i++) {
		array_push($massiv, rand(0,10));
	}

	$massiv = array_unique($massiv);
	sort($massiv);
	$massiv = array_reverse($massiv);

	print_r($massiv);
?>