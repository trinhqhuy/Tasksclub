<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Header: *');
header('Content-Type: application/json; charset=UTF-8');
http_response_code(200);

$data = json_decode(file_get_contents('php://input'));

$tokensession = '';
$idlist = '';
$content = '';
if(isset($data)) {
    $tokensession = $data->tokensession;
    $idlist = $data->idlist;
    $content = $data->content;
    $checktoken = $db->fetch_assoc("SELECT * FROM `token` WHERE `id_token` = '$tokensession'",1); 
    
    if($checktoken != '') {
        $checklistname = $db->fetch_assoc("SELECT * FROM `lists` WHERE `id` = '$idlist'",1);
        $iduser = $checktoken['id_user'];
        $namelist = $checklistname['name'];
        $user_row = $db->get_list("INSERT INTO `tasks`(`id_list`, `id_user`, `namelist`, `content`, `finish`, `star`, `date_add`) VALUES ('$idlist','$iduser','$namelist','$content','0','0','00000000')");
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