<?php
function logChat($text)
{
    date_default_timezone_set('Europe/Kiev');

    $current_time = date('d/m/Y  H:i:s');

    if (!file_exists('log.txt')) {
        file_put_contents('log.txt', '');
    }

    $fd = fopen('log.txt', 'r+');
    if (flock($fd, LOCK_EX)) {
        fseek($fd, 0, SEEK_END);
        fwrite($fd, "$current_time - $text \r\n");
        flock($fd, LOCK_UN);
    }
    fclose($fd);
}
