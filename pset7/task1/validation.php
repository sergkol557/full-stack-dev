<?php
$ip_reg = '/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i';
$url_reg = '/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/i';
$email_reg = '/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/iu';
$date_reg = '/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/i';
$time_reg = '/^([0-1]\d|2[0-3])(:[0-5]\d){2}$/i';

if (isset($_POST['datatype']) && isset($_POST['data'])) {

    $datatype = $_POST['datatype'] . '_reg';
    preg_match($$datatype, $_POST['data'], $answer);


    if ($answer[0] !== $_POST['data']) {
        echo $_POST['datatype'] . ' not valid';
    } else {
        echo $_POST['datatype'] . ' valid';
    }
}
