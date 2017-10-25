<?php

require_once 'logger.php';

if (isset($_POST['suggest']) && isset($_COOKIE['login'])) {
    $msg = $_POST['suggest'];
    $name = $_COOKIE['login'];
    define('smile1', '<img src=\'img/smile1.png\' class=\'smile\'>');
    define('smile2', '<img src=\'img/smile2.png\' class=\'smile\'>');
    $response = '';

    if (!file_exists('msg.json')) {
        file_put_contents('msg.json', '');
        logChat('create msg file');
    }
    date_default_timezone_set('Europe/Kiev');
    $json = file_get_contents('msg.json');
    $json = json_decode($json, true);
    $current_time = date('U');

    if (!isset($json)) {
        $json[0]['id'] = 0;
        $json[0]['userID'] = 0;
        $json[0]['time'] = date('U');
        $json[0]['text'] = 'Welcome to Easy Chat';
        logChat('create welcome msg');
    }

    //обрезание времени
    foreach ($json as $key => $value) {
        $time1 = new DateTime();
        $time2 = date_create_from_format('U', $value['time']);
        $time2->setTimezone(new DateTimeZone('Europe/Kiev'));
        $interval = date_diff($time2, $time1, true);

        if ($interval->format('%h') > 1) {
            unset($json[$key]);
            logChat('delete msg');
        }
    }

    $index = count($json);

    if (!empty($msg)) {
        $json[$index]['id'] = $index;
        $json[$index]['userID'] = getUserID($name);
        $json[$index]['time'] = $current_time;
        $json[$index]['text'] = $msg;
        logChat('receive msg from user ' . $name);
    }

    foreach ($json as $key => $value) {
        $msg_time = date_create_from_format('U', $value['time']);
        $msg_time->setTimezone(new DateTimeZone('Europe/Kiev'));
        $msg_time = date_format($msg_time, 'H:i:s');
        $user_name = getUserName($value['userID']);
        $msg_text = $value['text'];
        $response .= "<p>[$msg_time] <b>$user_name</b>: $msg_text</p>";
    }
    $response = str_replace(':)', smile1, $response);
    $response = str_replace(':(', smile2, $response);
    logChat('send msg to ' . $name);
    echo $response;

    $json = json_encode($json, JSON_PRETTY_PRINT);
    file_put_contents('msg.json', $json);

} else {
    logChat('redirect illegal user');
    setcookie('usr_msg', 'you must authorize first');
    header("Location: index.html");
    exit();
}

function getUserID($usr_name)
{
    $usr_json = file_get_contents('users.json');
    $usr_json = json_decode($usr_json, true);

    foreach ($usr_json as $value) {
        if ($usr_name === $value['login']) {
            return $value['id'];
        }
    }

    return -1;
}

function getUserName($usr_id)
{
    $usr_json = file_get_contents('users.json');
    $usr_json = json_decode($usr_json, true);

    foreach ($usr_json as $value) {
        if ($usr_id === $value['id']) {
            return $value['login'];
        }
    }

    return -1;
}


