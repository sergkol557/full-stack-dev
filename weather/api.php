<?php
function getDataApi()
{
    $currentData = 'http://dataservice.accuweather.com/currentconditions/v1/324291?apikey=%09IPibLDOp87eeRwUoHGvdLJGgvktCY68s&language=en-us&details=false';
    $lastSixHoutslData = 'http://dataservice.accuweather.com/currentconditions/v1/324291/historical?apikey=%09IPibLDOp87eeRwUoHGvdLJGgvktCY68s&language=en-us&details=false';
    $lastData = file_get_contents($lastSixHoutslData);
    $lastJson = json_decode($lastData, true);
    $current = file_get_contents($currentData);
    $currentJson = json_decode($current, true);
    $result = array(
        'cur_time' => $currentJson[0]['EpochTime'],
        'cur_temp' => (int)$currentJson[0]['Temperature']['Metric']['Value'],
        'cur_weather' => selectOption($currentJson[0]['WeatherText'])
    );
    for ($i = 1; $i < 7; $i++) {
        $result[$i]['time'] = $lastJson[$i - 1]['EpochTime'];
        $result[$i]['temp'] = (int)$lastJson[$i - 1]['Temperature']['Metric']['Value'];
        $result[$i]['weather'] = selectOption($lastJson[$i - 1]['WeatherText']);
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
    if (in_array($weathetText, $sun)) {
        return 'sunny';
    } elseif (in_array($weathetText, $cloud)) {
        return 'cloudy';
    } elseif (in_array($weathetText, $rain)) {
        return 'rainy';
    } elseif (in_array($weathetText, $snow)) {
        return 'snowy';
    } else {
        return $weathetText;
    }
}
