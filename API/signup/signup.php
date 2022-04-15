
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
$email = '';
$repassword = '';
if(isset($data)) {
    $username = $data->username;
    $password = $data->password;
    $email = $data->email;
    $repassword = $data->repassword;
    if($username && $password && $email && $repassword) {
        if(strlen($username) > 5 && strlen($password) > 7 && strlen($repassword) > 7) {
            $password = md5($password);
            $repassword = md5($repassword);
            $regexEmail = "/([a-z0-9_]+|[a-z0-9_]+\.[a-z0-9_]+)@(([a-z0-9]|[a-z0-9]+\.[a-z0-9]+)+\.([a-z]{2,4}))/i"; 
            $regexUser = "/^[_a-zA-Z0-9- ]+$/";
            //check user account & email
            $checkUser = $db->num_rows("SELECT * FROM `user` WHERE `name` = '$username'");
            $checkEmail = $db->num_rows("SELECT * FROM `user` WHERE `email` = '$email'");
            if ($checkUser < 1 && $checkEmail < 1) {
                //check user format
                if (preg_match($regexUser, $username)) {
                        //Check email
                    if(preg_match($regexEmail, $email)) {
                        //check password & repassword
                        if($password === $repassword){
                            $user_row = $db->get_list("INSERT INTO `user`(`name`, `password`, `email`, `avatar`) VALUES ('$username','$password','$email','1')");
                            if($user_row === true) {
                                echo json_encode([
                                    'error'=> true,
                                    'message'=> 'Bạn đã đăng ký thành công',
                                ]);
                            }else{
                                http_response_code(400);
                                echo json_encode([
                                    'error'=> false,
                                    'message'=> 'Tài khoản không tồn tại hoặc mật khẩu không đúng'
                                ]);
                            }
                        }else {
                            echo json_encode([
                                'error'=> false,
                                'message'=> 'Mật khẩu và nhập lại mật khẩu chưa khớp'
                            ]);
                        }
                    }else {
                        echo json_encode([
                            'error'=> false,
                            'message'=> 'Email không đúng định dạng'
                        ]);
                    }
                }else {
                    echo json_encode([
                        'error'=> false,
                        'message'=> 'Tên người dùng phải viết liền không dấu và khoảng trắng'
                    ]);
                }
            }else {
                echo json_encode([
                    'error'=> false,
                    'message'=> 'Tài khoản đã tồn tại hoặc email đã được đăng ký'
                ]);
            }
        }else {
            echo json_encode([
                'error'=> false,
                'message'=> 'Tên đăng nhập cần lớn hơn 5 ký tự và mật khẩu lớn hơn 7 ký tự'
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