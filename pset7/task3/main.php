<?php

require_once 'logger.php';

if (isset($_POST['login']) && isset($_POST['pas'])) {
	$login = $_POST['login'];
	$pas = $_POST['pas'];

	if (!file_exists('users.json')) {
		file_put_contents('users.json', '');
		logChat('create users.json');
	}

	$json = file_get_contents('users.json');
	$json = json_decode($json, true);

	if(empty($json)){
		$json[0]['id'] = 0;
		$json[0]['login'] = 'admin';
		$json[0]['pas'] = '123';
		logChat('create admin role');
	}

	$user_check = checkUser($login, $pas, $json);
	if ($user_check === -1) {
		$index = count($json);
		$json[$index]['id'] = $index;
		$json[$index]['login'] = $login;
		$json[$index]['pas'] = $pas;
		$answer = file_get_contents('chat.html');
		setcookie('login', $login);
		setcookie('usr_msg', "Welcome $login");
		logChat('registered new user '.$login);
	} elseif ($user_check === 1) {
		$answer = file_get_contents('chat.html');
		setcookie('login', $login);
		logChat("user $name authorize");
	} else {
		setcookie('usr_msg', 'wrong password');
		$answer = file_get_contents('index.html');
		logChat("user $login bad password");
	}

	echo $answer;

	$json = json_encode($json, JSON_PRETTY_PRINT);
	file_put_contents('users.json', $json);
} else {
	logChat('redirect illegal user');
	setcookie('usr_msg', 'you must authorize first');
	header("Location: index.html");
	exit();
}

function checkUser($usr_login, $usr_pas, $users)
{
	foreach ($users as $value) {
		if ($value['login'] === $usr_login && $value['pas'] === $usr_pas) {
			return 1;
		} elseif ($value['login'] === $usr_login && $value['pas'] !== $usr_pas) {
			return 0;
		}
	}

	return -1;
}
