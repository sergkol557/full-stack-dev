<?php
	if (isset($_POST['suggest']) && isset($_COOKIE['login'])) {
		$msg = $_POST['suggest'];
		$name = $_COOKIE['login'];
		define("smile1", "<img src=\"img/smile1.png\" class=\'smile\'>");
		define("smile2", "<img src=\"img/smile2.png\" class=\'smile\'>");
		$response = "";

		$servername = "localhost";
		$username = "user";
		$password = "qweasdzxc";
		$dbname = "EasyChat";
   
		$conn = new mysqli($servername, $username, $password, $dbname);
   
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 

		function retrieveData() {

			$sql = "SELECT timer, msg FROM messages";
			global $conn;
			$answer = $conn->query($sql);			
			if ($conn->connect_error) {
				die("Error retrieve data: " . $conn->connect_error);
			} 
			return $answer;
		}

		function insertData ($timer, $message) {
            global $conn;
			$sql_insert = "INSERT messages (timer, msg)
			VALUES ( '$timer', '$message' )";
			if (!$conn->query($sql_insert)) {
				echo "Error insert data: " . $sql_insert . $conn->error;
			}
		}

		function deleteData ($timer) {
			global $conn;
			//DELETE FROM `EasyChat`.`users` WHERE `login`='a';
			$sql_delete = "DELETE FROM messages WHERE timer = '$timer'";
			if (!$conn->query($sql_delete)) {
				echo "Error deleting record: " . $sql_delete . $conn->error;
			}
		}

		$sql_response = retrieveData ();


		$current_time = date("H:i:s");
		$time1 = date_create($current_time);

		if ($sql_response->num_rows == 0) {
			insertData ($current_time, '<b>admin:</b> welcome to Easy chat');
		}

		$sql_response = retrieveData ();

		//обрезание времени
		while ($row = $sql_response -> fetch_assoc()) {
			$time2 = date_create($row['timer']);
			$interval = date_diff($time1, $time2, true);
			if ($interval->format("%h") > 1) {
				deleteData($row['timer']);
			}
		}

		$sql_response = retrieveData ();

		if (!empty($msg)) {
			$msg = str_replace(":)", smile1, $msg);
			$msg = str_replace(":(", smile2, $msg);

			insertData ($current_time, "<b>$name:</b> $msg");
		}

		$sql_response = retrieveData ();

		while ($row = $sql_response -> fetch_assoc()) {
			$response .= "<p>".$row['timer']." ". $row['msg']."</p>";
		}

		echo $response;


		$conn->close(); 
	}
