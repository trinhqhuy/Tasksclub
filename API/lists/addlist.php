<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Header: *');
header('Content-Type: application/json; charset=UTF-8');
http_response_code(200);

$data = json_decode(file_get_contents('php://input'));


$tokensession = '';
$content = '';
$icon = '';
$color = '';
if(isset($data)) {
    $tokensession = $data->tokensession;
    $content = $data->content;
    $icon = $data->icon;
    $color = $data->color;
    $checktoken = $db->fetch_assoc("SELECT * FROM `token` WHERE `id_token` = '$tokensession'",1); 
    
    if($checktoken != '') {
        $iduser = $checktoken['id_user'];
        $user_row = $db->get_list("INSERT INTO `lists`(`id_user`, `name`, `icon`,`color`) VALUES ('$iduser','$content','$icon','$color')");
        if($user_row == 1) {
            echo json_encode([
                'error'=> true,
                'message'=> 'Bạn đã đăng ký thành công',
            ]);
        }else{
            
            echo json_encode([
                'error'=> false,
                'message'=> 'Tài khoản không tồn tại hoặc mật khẩu không đúng'
            ]);
        }
    }else {
        
            echo json_encode([
                'error'=> false,
                'message'=> 'Tài khoản không tồn tại hoặc mật khẩu không đúng'
            ]);
    }

}else {
    echo json_encode([
        'error'=> false,
        'message'=> 'Chưa nhập thông tin',
    ]);
}
exit();

?>