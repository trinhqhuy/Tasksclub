<?php
require_once('Models/init.php');

$page = $_GET['page'];

switch ($page) {
    case 'tasks':
            require_once('Views/include/header.php');
            include('Views/tasksView1.php');
            require_once('Views/include/footer.php');
        break;
    case 'statistic':
            require_once('Views/include/header.php');
            include('Views/tasksView.php');

            require_once('Views/include/footer.php');
        break;
    case 'account':
            require_once('Views/include/header.php');
            include('Views/taskView2.php');
            require_once('Views/include/footer.php');
        break;
    case 'login':
            require_once('Views/include/header.php');
            include('Views/loginView.php');
            require_once('Views/include/footer.php');
        break;
    case 'signup':
            require_once('Views/include/header.php');
            include('Views/signupView.php');
            require_once('Views/include/footer.php');
        break;
    case 'landing':
        require_once('Views/include/header.php');
        include('Views/landingView.php');
        echo '<script src="../../Views/javascript/animation.js"></script>';
        require_once('Views/include/footer.php');
        break;
    //API
    case 'taskunfinish':
        require_once('API/tasks/taskunfinish.php');
        break;
    case 'taskfinished':
        require_once('API/tasks/taskfinished.php');
        break;
    case 'alllists':
        require_once('API/lists/all.php');
        break;
    case 'infotask':
        require_once('API/tasks/infotask.php');
        break;
    case 'infolist':
        require_once('API/lists/infolist.php');
        break;
    case 'taskupdate':
        require_once('API/tasks/taskupdate.php');
        break;
    case 'loginapi':
        require_once('API/login/login.php');
        break;
    case 'signupapi':
        require_once('API/signup/signup.php');
        break;
    case 'addtask':
        require_once('API/tasks/addtask.php');
        break;
    case 'addlist':
        require_once('API/lists/addlist.php');
        break;
    default:
            require_once('Views/include/header.php');
            include('Views/home.php');
            require_once('Views/include/footer.php');
        break;
}