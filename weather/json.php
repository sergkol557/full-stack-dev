<?php
function getDataJson()
{
	$content = file_get_contents('data/today.json');
	$content = json_decode($content, true);

	$index = 0;
	$data = [];

	foreach ($content['list'] as $key => $value) {
		if ($index === 0) {
			$data['cur_time'] = $value['dt'];
			$data['cur_temp'] = (int)$value['main']['temp'] - 273;
			$data['cur_weather'] = getPrettyWeather($value['weather']['main']);
		} else {
			$data[$index]['time'] = $value['dt'];
			$data[$index]['temp'] = (int)$value['main']['temp'] - 273;
			$data[$index]['weather'] = getPrettyWeather($value['weather']['main']);
		}
		$index++;
	}

	return json_encode($data);
}

function getPrettyWeather($json_weather)
{
	if ($json_weather === 'Clear') {
		return 'sunny';
	} elseif ($json_weather === 'Rain') {
		return 'rainy';
	} elseif ($json_weather === 'Clouds') {
		return 'cloudy';
	} else {
		return 'snowy';
	}
}
