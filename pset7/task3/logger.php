<?php   
	function logChat ($text){
		date_default_timezone_set('Europe/Kiev');

		$current_time = date('d/m/Y  H:i:s');

		if (!file_exists('log.txt')) {
			file_put_contents('log.txt', '');
		}

		$current_text = file_get_contents('log.txt');
		$current_text .= "$current_time - $text \n";
		file_put_contents('log.txt',$current_text);
	}
