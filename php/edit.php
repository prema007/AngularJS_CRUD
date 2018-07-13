<?php


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$id = $request->id;
$username = $request->username;
$email = $request->email;
$password = $request->password;


echo $email;

/*$id = $_POST['id'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];*/
$str = file_get_contents('../userdetails.json');
$array = json_decode($str, true);
foreach ($array as $k => $v) {
    echo $k;
    // IF THE TITLE MATCHES THE SIGNAL STRING
    if ($v['id'] == $id)
    {
    $array[$k] = array(
    'username' => $username,
    'email' => $email,
    'password' => $password
);
    }
}
$fp = fopen('../userdetails.json', 'w');
fwrite($fp, json_encode($array));

?>

