<?php
require 'database.php';
require 'json.php';
require 'api.php';
if (isset ($_GET['data'])) {
	$data = $_GET['data'];

	header('Content-type:application/json');

	if ($data === 'database') {
		echo getDataBase();
	} elseif ($data === 'json') {
		echo getDataJson();
	} elseif ($data === 'api') {
		echo getDataApi();
	} else {
		header_remove();
		header($_SERVER['SERVER_PROTOCOL']. ' 400 Bad Request', true, 400);
	}
}
