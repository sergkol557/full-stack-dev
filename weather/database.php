<?php

require 'DB_connect.php';

function getDataBase()
{
	$result = [];
	$sql_response = retrieveData();
	$index = 1;
	while ($row = $sql_response->fetch_assoc()) {
		if ($index  === 1) {
			$result['cur_temp'] = $row['temperature'];
			$result['cur_weather'] = checkWeather($row['rain_possibility'], $row['snow_posibility'], $row['clouds']);
			$result['cur_time'] = strtotime($row['timestamp']);
			$index++;
			continue;
		}
		$result[$index]['time'] = strtotime($row['timestamp']);
		$result[$index]['temp'] = $row['temperature'];
		$result[$index]['weather'] = checkWeather($row['rain_possibility'], $row['snow_posibility'], $row['clouds']);
		$index++;
	}

	return json_encode($result);
}

function retrieveData()
{
	$conn = connectDB();
	$sql = 'SELECT `timestamp`, `temperature`,`rain_possibility`,`snow_posibility`,`clouds` FROM forecast';
	$answer = $conn->query($sql);
	if ($conn->connect_error) {
		die('Error retrieve data: ' . $conn->connect_error);
	}
	return $answer;
}

function checkWeather($rain, $snow, $cloud)
{
	if ($snow > $rain && $snow > 0.6) {
		return 'snowy';
	} elseif ($rain > $snow && $rain > 0.6) {
		return 'rainy';
	} elseif ($cloud > 15) {
		return 'cloudy';
	} else {
		return 'sunny';
	}
}
