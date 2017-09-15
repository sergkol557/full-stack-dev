<?php
require 'logger.php';

if (isset($_POST['login']) && isset($_POST['pas'])) {
	$login = $_POST['login'];
	$pas = $_POST['pas'];

	if (!file_exists('users.json')) {
		file_put_contents('users.json', '');
	}

	$json = file_get_contents('users.json');
	$json = json_decode($json, true);

	if (!isset($json[$login])) {
		$json[$login] = $pas;
		$answer = file_get_contents('chat.html');
		setcookie('login', $login);
		setcookie('usr_msg', "Welcome $login");
		logChat('new user added'.$login);

	} elseif ($json[$login] === $pas) {
		$answer = file_get_contents('chat.html');
		setcookie('login', $login);
		setcookie('usr_msg', '');
		logChat("user $login login");

	} else {
		setcookie('usr_msg', 'wrong password');
		$answer = file_get_contents('index.html');
		logChat("user $login wrong password");
	}

	echo $answer;

	$json = json_encode($json, JSON_PRETTY_PRINT);
	file_put_contents('users.json', $json);
} else {
	logChat('redirect illegal user from main.php');
	header("Location: index.html");
	exit();
}


