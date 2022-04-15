<?php
$token = trim(htmlspecialchars(stripslashes(addslashes($_GET['token']))));
$list_id = trim(htmlspecialchars(stripslashes(addslashes($_GET['id']))));

$checktoken = $db->fetch_assoc("SELECT * FROM `token` WHERE `id_token` = '$token'",1); 
if($checktoken) {
$iduser = $checktoken['id_user'];
$result = $db->object("SELECT * FROM `tasks` WHERE `id_user` = '$iduser' AND `id_list`= '$list_id' AND `finish` = '0'");
echo json_encode($result);
} 
?>