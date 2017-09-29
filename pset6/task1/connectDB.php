<?php

function connectDB(){

	$db_config = parse_ini_file('sql/db_config.ini');

	$servername = $db_config['servername'];
	$username = $db_config['username'];
	$password = $db_config['password'];
	$dbname = $db_config['dbname'];

	$connDB = new mysqli($servername, $username, $password, $dbname);

	return $connDB;
}