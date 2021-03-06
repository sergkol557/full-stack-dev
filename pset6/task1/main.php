<?php

require_once 'connectDB.php';

if (isset($_POST['login']) && isset($_POST['pas'])) {
	$login = $_POST['login'];
	$pas = $_POST['pas'];

	$conn = connectDB();

	if ($conn->connect_error) {
		die('Connection failed: ' . $conn->connect_error);
	}

	$sql = "SELECT login, pas FROM users";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {

		while ($row = $result->fetch_assoc()) {

			if ($row['login'] === $login && $row['pas'] === $pas) {
				$answer = file_get_contents('chat.html');
				setcookie('login', $login);
				setcookie('usr_msg', '');
				break;

			} elseif ($row['login'] === $login && $row['pas'] !== $pas) {

				$answer = file_get_contents('index.html');
				setcookie('usr_msg', 'wrong password');
				break;
			}
		}
	}

	if (empty($answer)) {
		setcookie('login', $login);
		setcookie('usr_msg', "Welcome $login");
		//$sql_insert = "INSERT INTO users (login, pas) VALUES ('$login', '$pas')";
		$sql_insert = $conn->prepare("INSERT INTO users (login, pas) VALUES (?, ?)");
		$sql_insert->bind_param("ss", $login, $pas);
		$sql_insert->execute();
		$answer = file_get_contents('chat.html');
		$sql_insert->close();

	}

	echo $answer;

	$conn->close();

} else {
	header("Location: index.html");
	exit();
}
