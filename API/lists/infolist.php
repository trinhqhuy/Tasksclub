<?php

$token = trim(htmlspecialchars(stripslashes(addslashes($_GET['token']))));
$id_list = trim(htmlspecialchars(stripslashes(addslashes($_GET['id']))));

$checktoken = $db->fetch_assoc("SELECT * FROM `token` WHERE `id_token` = '$token'",1); 
if($checktoken) {
$iduser = $checktoken['id_user'];
$result = $db->object("SELECT * FROM `lists` WHERE `id`= '$id_list' AND `id_user` = '$iduser'");
echo json_encode($result);
} 
?>