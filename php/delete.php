<?php
//if(isset($_GET['id'])){

$id = $_POST['id'];

echo $id;
$str = file_get_contents('../userdetails.json');
$array = json_decode($str, true);
foreach ($array as $k => $v) {
    echo $k;
    // IF THE TITLE MATCHES THE SIGNAL STRING
    if ($k == $id)
    {
        // REMOVE THIS OBJECT
        unset($array[$k]);

    }
}
//$newJsonString = json_encode($data);
//file_put_contents('results.json', $newJsonString);
$fp = fopen('../userdetails.json', 'w');
fwrite($fp, json_encode($array));
//}
?>
