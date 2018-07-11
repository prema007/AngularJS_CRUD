<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$username = $request->username;
$email = $request->email;
$password = $request->password;
$id = uniqid();

$str = file_get_contents('../userdetails.json');
$array = json_decode($str, true);
$array[] = array(
    'id' => $id,
    'username' => $username,
    'email' => $email,
    'password' => $password
);


$fp = fopen('../userdetails.json', 'w');
fwrite($fp, json_encode($array));

?>


