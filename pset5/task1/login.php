<?php
 if (isset($_POST['login']) && isset($_POST['pas'])) {
 	$login = $_POST['login'];
 	$pas = $_POST['pas'];

 	 if (!file_exists('users.json')) {
	    file_put_contents('users.json','');
     }

	$json = file_get_contents('users.json');
 	$json = json_decode($json, true);

 	if (!isset($json[$login])) {
 		$json[$login] = $pas;
 		$answer = file_get_contents('chat.html');
	    setcookie('login', $login);
	    setcookie('pas', $pas);
	    $answer = str_replace('<body>', '<body onload=\'alert("welcome '.$login.'");\'>', $answer);

    } elseif ($json[$login] == $pas) {
	    $answer = file_get_contents('chat.html');
	    setcookie('login', $login);
	    setcookie('pas', $pas);

    } else {
	    $answer = file_get_contents('index.html');
	    $answer = str_replace('<body>', '<body onload=\'alert("wrong password!");\'>', $answer);
    }

    echo $answer;

 	$json = json_encode($json, JSON_PRETTY_PRINT);
 	file_put_contents('users.json', $json);
 }
 ?>