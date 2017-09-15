<?php
	$ip_reg = '/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i';
	$url_reg = '/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/i';
	$email_reg = '/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/iu';
	$date_reg = '/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/i';
	$time_reg = '/^([0-1]\d|2[0-3])(:[0-5]\d){2}$/i';

	if (isset($_POST['ip']) && isset($_POST['url']) && isset($_POST['email']) && isset($_POST['date']) && isset($_POST['time'])){

		preg_match($ip_reg,$_POST['ip'],$res_ip);
		preg_match($url_reg,$_POST['url'],$res_url);
		preg_match($email_reg,$_POST['email'],$res_email);
		preg_match($date_reg,$_POST['date'],$res_date);
		preg_match($time_reg,$_POST['time'],$res_time);

		file_put_contents('log.txt', $res_url);

		if($res_ip[0] !== $_POST['ip'] ||
			$res_url[0] != $_POST['url'] ||
			$res_email[0] !== $_POST['email'] ||
			$res_date[0] != $_POST['date'] ||
			$res_time[0] !== $_POST['time']) {
				echo 'not valid';
		} else {
			echo 'valid';
		}
	}
