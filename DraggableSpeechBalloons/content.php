<?php
	if (!file_exists('bubles.json')) {
		file_get_contents('bubles.json','');
	}

	if ($_POST['action'] == 'addtext') {
		$json = file_get_contents('bubles.json');
		$json = json_decode($json, true);

		if(empty($_POST['msg'])) {

			unset($json[$_POST['id']]);

		} else {
			$json[$_POST['id']]['text'] = $_POST['msg'];
		}
		
		$json = json_encode($json, JSON_PRETTY_PRINT);
		file_put_contents('bubles.json',$json);
	}

	if ($_POST['action'] == 'coord') {
		$json = file_get_contents('bubles.json');
		$json = json_decode($json, true);
		$json[$_POST['id']]['left'] = $_POST['left'];
		$json[$_POST['id']]['top'] = $_POST['top'];
		$json = json_encode($json, JSON_PRETTY_PRINT);
		file_put_contents('bubles.json',$json);
	}

	if ($_POST['action'] == 'load') {
		$json = file_get_contents('bubles.json');
		echo $json;		
	}



?>