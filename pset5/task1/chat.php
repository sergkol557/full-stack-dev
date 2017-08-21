<?php
    if (isset($_POST['suggest'])) {
        $msg = $_POST['suggest'];

        if (!file_exists('msg.json')) {
            file_put_contents('msg.json', '');
        }

        $json = file_get_contents('msg.json');
        $json = json_decode($msg, true);
        $current_time = date("H:i:s");
        //обрезание времени


        if (empty($msg)) {

            echo ($json);

        } else {

            $json[$current_time] = $msg;
            echo $json;
        }
        $json = json_encode($json, JSON_PRETTY_PRINT);
        file_put_contents('msg.json',$json);
    }
