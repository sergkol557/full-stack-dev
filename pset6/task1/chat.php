<?php

require_once 'connectDB.php';

if (isset($_POST['suggest']) && isset($_COOKIE['login'])) {
	$msg = $_POST['suggest'];
	$name = $_COOKIE['login'];
	define('smile1', "<img src='img/smile1.png' class='smile'>");
	define('smile2', "<img src='img/smile2.png' class='smile'>");
	$response = '';
	date_default_timezone_set('Europe/Kiev');

	$conn = connectDB();

	if ($conn->connect_error) {
		die('Connection failed: ' . $conn->connect_error);
	}

	function retrieveData()
	{

		$sql = 'SELECT timer, msg FROM messages';
		global $conn;
		$answer = $conn->query($sql);
		if ($conn->connect_error) {
			die('Error retrieve data: ' . $conn->connect_error);
		}
		return $answer;
	}

	function insertData($timer, $message)
	{
		global $conn;
		$sql_insert  = $conn->prepare("INSERT INTO messages (timer, msg) VALUES (?, ?)");
		$sql_insert->bind_param('ss', $timer, $message);
		$sql_insert->execute();
		$sql_insert->close();
	}

	function deleteData($timer)
	{
		global $conn;
		$sql_insert  = $conn->prepare("DELETE FROM messages WHERE timer = `?`");
		$sql_insert->bind_param('s', $timer);
		$sql_insert->execute();
	}

	$sql_response = retrieveData();


	$current_time = date('H:i:s');
	$time1 = date_create($current_time);

	if ($sql_response->num_rows === 0) {
		insertData($current_time, '<b>admin:</b> welcome to Easy chat');
	}

	$sql_response = retrieveData();

	//обрезание времени
	while ($row = $sql_response->fetch_assoc()) {
		$time2 = date_create($row['timer']);
		$interval = date_diff($time1, $time2, true);
		if ($interval->format('%h') > 1) {
			deleteData($row['timer']);
		}
	}

	$sql_response = retrieveData();

	if (!empty($msg)) {

		insertData($current_time, "<b>$name:</b> $msg");
	}

	$sql_response = retrieveData();

	while ($row = $sql_response->fetch_assoc()) {
		$response .= '<p>' . $row['timer'] . ' ' . $row['msg'] . '</p>';
	}

	$response = str_replace(":)", smile1, $response);
	$response = str_replace(":(", smile2, $response);

	echo $response;

	$conn->close();
} else {

	setcookie('usr_msg', 'you must authorize first');
	$response = file_get_contents('index.html');
	echo $response;
}
