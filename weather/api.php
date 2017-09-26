<?php

function getDataApi()
{
	$currentData = 'http://dataservice.accuweather.com/currentconditions/v1/324291?apikey=%09P3C5bSy30kXkmZ58O33ZkGthRsw2Cjqj&language=en-us&details=false';
	$lastSixHoutslData = 'http://dataservice.accuweather.com/currentconditions/v1/324291/historical?apikey=%09P3C5bSy30kXkmZ58O33ZkGthRsw2Cjqj&language=en-us&details=false';
	$lastData = file_get_contents($lastSixHoutslData);
	$lastjson = json_decode($lastData, true);
	$current = file_get_contents($currentData);
	$currentjson = json_decode($current, true);
	$result = array(
		'cur_time' => $currentjson[0]['EpochTime'],
		'cur_temp' => (int)$currentjson[0]['Temperature']['Metric']['Value'],
		'cur_weather' => selectOption($currentjson[0]['WeatherText'])
	);
	for ($i = 1; $i < 7; $i++) {
		$result[$i]['time'] = $lastjson[$i - 1]['EpochTime'];
		$result[$i]['temp'] = (int)$lastjson[$i - 1]['Temperature']['Metric']['Value'];
		$result[$i]['weather'] = selectOption($lastjson[$i - 1]['WeatherText']);
	}
	return json_encode($result);
}

function selectOption($weathetText)
{

	$sun = array(
		'Sunny',
		'Clear'
	);
	$cloud = array(
		'Some clouds',
		'Clouds and sun',
		'Mostly sunny',
		'Partly sunny',
		'Intermittent clouds',
		'Hazy cunshine',
		'Mostly cloudy',
		'Cloudy',
		'Dreary (Overcast)',
		'Mostly clear',
		'Partly cloudy',
		'Intermittent clouds',
		'Hazy moonlight',
		'Mostly cloudy'
	);
	$rain = array(
		'Showers',
		'Mostly cloudy w/ Showers',
		'Partly sunny w/ Showers',
		'T-Storms',
		'Mostly cloudy w/ T-Storms',
		'Partly sunny w/ T-Storms',
		'Rain',
		'Partly cloudy w/ Showers',
		'Mostly cloudy w/ Showers',
		'Partly cloudy w/ T-Storms',
		'Mostly cloudy w/ T-Storms',
		'Sleet',
		'Freezing rain'
	);
	$snow = array(
		'Flurries',
		'Mostly cloudy w/ Flurries',
		'Partly Sunny w/ Flurries',
		'Snow',
		'Mostly cloudy w/ Snow',
		'Rain and snow',
		'Mostly cloudy w/ Flurries',
		'Mostly cloudy w/ Snow'
	);
	if (in_array($weathetText, $sun,true)) {
		return 'sunny';
	} elseif (in_array($weathetText, $cloud, true)) {
		return 'cloudy';
	} elseif (in_array($weathetText, $rain, true)) {
		return 'rainy';
	} elseif (in_array($weathetText, $snow, true)) {
		return 'snowy';
	} else {
		return $weathetText;
	}
}
