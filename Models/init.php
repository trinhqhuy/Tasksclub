<?php
//*********Thông tin*********/
//Tên dự án: tasksclub.com
//Coder: Trịnh Quốc Huy
//Version: 1.0
//Năm 2022
//Khai báo, khởi tạo
//Vô hiệu hoá khai báo lỗi
error_reporting(0);

require_once('Models/config.php');
//set time zone
date_default_timezone_set('Asia/Ho_Chi_Minh');
//Kêt nối database
$db = new DB();
$db->connect();
//Định dạng UTF-8mb4
$db->set_char('utf8mb4');

//Nhập thư viện
require_once('Models/session.php');
require_once('Models/function.php');

//bắt đầu sesion mới 
$sesion = new Session();
$sesion->start();

