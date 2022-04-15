<?php
$token = trim(htmlspecialchars(stripslashes(addslashes($_GET['token']))));
$id = trim(htmlspecialchars(stripslashes(addslashes($_GET['id']))));
$do = trim(htmlspecialchars(stripslashes(addslashes($_GET['do']))));

$checktoken = $db->fetch_assoc("SELECT * FROM `token` WHERE `id_token` = '$token'",1); 
if($checktoken) {
$iduser = $checktoken['id_user'];
if($do == 0) {
    $result = $db->query("UPDATE `tasks` SET `finish`='0' WHERE `id_user` = '$iduser' AND `id` = '$id'");
}else if($do == 1) {
    $result = $db->query("UPDATE `tasks` SET `finish`='1' WHERE`id_user` = '$iduser' AND `id` = '$id'");
   
}else if($do == 3) {
    $result = $db->query("UPDATE `tasks` SET `star`='0' WHERE `id_user` = '$iduser' AND `id` = '$id'");
}else if($do == 4) {
    $result = $db->query("UPDATE `tasks` SET `star`='1' WHERE `id_user` = '$iduser' AND `id` = '$id'");
}else if($do == 5) {
    $result = $db->query("DELETE FROM `tasks` WHERE `id_user` = '$iduser' AND `id` = '$id'");
}
}
?>