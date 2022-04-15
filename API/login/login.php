<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Header: *');
header('Content-Type: application/json; charset=UTF-8');
http_response_code(200);

$data = json_decode(file_get_contents('php://input'));
// echo json_encode($data);
$username = '';
$password = '';
if(isset($data)) {
    $username = $data->username;
    $password = $data->password;

if($username && $password) {
    $password = md5($password);
    $user_row = $db->num_rows("SELECT * FROM `user` WHERE `name` = '$username' AND `password` = '$password'");
    if($user_row > 0) {
        $user = $db->fetch_assoc("SELECT * FROM `user` WHERE `name` = '$username' AND `password` = '$password'", 1);
        $token = substr(md5(rand(0,999999)), 0 , 7);
        $iduser = $user['id'];
        //create token
        $query = $db->get_list("INSERT INTO `token`(`id_token`, `id_user`, `name`) VALUES ('$token','$iduser','$username')");
       if($query) {
        echo json_encode([
            'error'=> true,
            'message'=> 'user found',
            'token'=> ''.$token.'',
        ]);
       }else {
        echo json_encode([
            'error'=> false,
            'message'=> 'Tài khoản '.$username.' không tồn tại hoặc mật khẩu không đúng'
        ]);
       }
    }else{
        http_response_code(400);
        echo json_encode([
            'error'=> false,
            'message'=> 'Tài khoản '.$username.' không tồn tại hoặc mật khẩu không đúng'
        ]);
    }
}
}else {
    echo json_encode([
        'error'=> false,
        'message'=> 'Bạn chưa điền đầy đủ thông tin'
    ]);
}
exit();
?>