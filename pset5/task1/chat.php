<?php
if (isset($_POST['suggest']) && isset($_COOKIE['login'])) {
	$msg = $_POST['suggest'];
	$name = $_COOKIE['login'];
	define('smile1', '<img src=\'img/smile1.png\' class=\'smile\'>');
	define('smile2', '<img src=\'img/smile2.png\' class=\'smile\'>');
	$response = '';

	if (!file_exists('msg.json')) {
		file_put_contents('msg.json', '');
	}
	date_default_timezone_set('Europe/Kiev');
	$json = file_get_contents('msg.json');
	$json = json_decode($json, true);
	$current_time = date('H:i:s');
	$time1 = date_create($current_time);

	if (!isset($json)) {
		$json[0][$current_time] = '<b>admin:</b> welcome to Easy chat';
	}

	//обрезание времени
	foreach ($json as $key => $value) {
		$time2 = date_create($key);
		$interval = date_diff($time1, $time2, true);

		if ($interval->format('%h') > 1) {
			unset($json[$key]);
		}
	}

	if (!empty($msg)) {
		$json[$current_time] = "<b>$name:</b> $msg";

	}

	foreach ($json as $key => $value) {
		$response .= "<p>[$key] $json[$key]</p>";
	}
	$response = str_replace(':)', smile1, $response);
	$response = str_replace(':(', smile2, $response);

	echo $response;

	$json = json_encode($json, JSON_PRETTY_PRINT);
	file_put_contents('msg.json', $json);
} else {

	setcookie('usr_msg', 'you must authorize first');
	header("Location: index.html");
	exit();


}


