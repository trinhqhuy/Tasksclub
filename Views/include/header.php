<?php
// Kiểm tra link
$active1 = $_GET['page'] == '' ? $active1 = 'active_item' : '';
$active2 = $_GET['page'] == 'tasks' ? $active2 = 'active_item' : '';
$active3 = $_GET['page'] == 'statistic' ? $active3 = 'active_item' : '';
$active4 = $_GET['page'] == 'account' ? $active4 = 'active_item' : '';
//kiểm tra active
$color1 = $active1 == 'active_item' ? $color1 = '#0D6EFF' :  $color1 = '#d4dbee';
$color2 = $active2 == 'active_item' ? $color2 = '#0D6EFF' :  $color2 = '#d4dbee';
$color3 = $active3 == 'active_item' ? $color3 = '#0D6EFF' :  $color3 = '#d4dbee';
$color4 = $active4 == 'active_item' ? $color4 = '#0D6EFF' :  $color4 = '#d4dbee';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet">

    <title>Document</title>
</head>

<body>
    <div class="container-fluid">
        <!--- Logo index-->
        <nav class="navbar fixed-bottom header-color">
            <div class="col">
                <a class="text-decoration-none d-none d-sm-block d-sm-none d-md-block" href="/">
                    <img class="ms-5 mt-2" src="../../Views/assets/Logo.png" width="35%">
                </a>
            </div>
            <!---Icon tab-->
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li class="nav-item <?php echo $active1?>">
                    <a class="d-flex flex-column align-items-center nav-link" aria-current="page" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="<?php echo $color1?>">
                                    <path
                                        d="M64.5,78.83333h-28.66667c-7.91917,0 -14.33333,-6.41417 -14.33333,-14.33333v-28.66667c0,-7.91917 6.41417,-14.33333 14.33333,-14.33333h28.66667c7.91917,0 14.33333,6.41417 14.33333,14.33333v28.66667c0,7.91917 -6.41417,14.33333 -14.33333,14.33333z">
                                    </path>
                                    <path
                                        d="M136.16667,78.83333h-28.66667c-7.91917,0 -14.33333,-6.41417 -14.33333,-14.33333v-28.66667c0,-7.91917 6.41417,-14.33333 14.33333,-14.33333h28.66667c7.91917,0 14.33333,6.41417 14.33333,14.33333v28.66667c0,7.91917 -6.41417,14.33333 -14.33333,14.33333z"
                                        opacity="0.35"></path>
                                    <path
                                        d="M64.5,150.5h-28.66667c-7.91917,0 -14.33333,-6.41417 -14.33333,-14.33333v-28.66667c0,-7.91917 6.41417,-14.33333 14.33333,-14.33333h28.66667c7.91917,0 14.33333,6.41417 14.33333,14.33333v28.66667c0,7.91917 -6.41417,14.33333 -14.33333,14.33333z"
                                        opacity="0.35"></path>
                                    <path
                                        d="M136.16667,150.5h-28.66667c-7.91917,0 -14.33333,-6.41417 -14.33333,-14.33333v-28.66667c0,-7.91917 6.41417,-14.33333 14.33333,-14.33333h28.66667c7.91917,0 14.33333,6.41417 14.33333,14.33333v28.66667c0,7.91917 -6.41417,14.33333 -14.33333,14.33333z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span>Trang chủ</span>
                    </a>
                </li>
                <li class="nav-item <?php echo $active2?>">
                    <a class="d-flex flex-column align-items-center nav-link" href="tasks">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0 0 24 24" style=" fill:<?php echo $color2?>">
                            <path
                                d="M20.5,11c-0.384,0-0.768-0.146-1.061-0.439L17.5,8.621l-1.939,1.939c-0.586,0.586-1.535,0.586-2.121,0	c-0.586-0.585-0.586-1.536,0-2.121L15.379,6.5l-1.939-1.939c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0	L17.5,4.379l1.939-1.939c0.586-0.586,1.535-0.586,2.121,0c0.586,0.585,0.586,1.536,0,2.121L19.621,6.5l1.939,1.939	c0.586,0.585,0.586,1.536,0,2.121C21.268,10.854,20.884,11,20.5,11z">
                            </path>
                            <path
                                d="M17,22c-0.33,0-0.661-0.108-0.937-0.329l-2.5-2c-0.647-0.518-0.752-1.461-0.234-2.108c0.518-0.646,1.462-0.751,2.108-0.234	l1.395,1.116l3.553-3.948c0.553-0.615,1.503-0.667,2.118-0.111c0.616,0.554,0.666,1.502,0.111,2.118l-4.5,5	C17.82,21.832,17.411,22,17,22z">
                            </path>
                            <path
                                d="M9.5,8h-7C1.671,8,1,7.329,1,6.5S1.671,5,2.5,5h7C10.329,5,11,5.671,11,6.5S10.329,8,9.5,8z"
                                opacity=".35"></path>
                            <path
                                d="M9.5,19h-7C1.671,19,1,18.329,1,17.5S1.671,16,2.5,16h7c0.829,0,1.5,0.671,1.5,1.5S10.329,19,9.5,19z"
                                opacity=".35"></path>
                        </svg>

                        <span>Công việc</span>
                    </a>
                </li>
                <li class="nav-item <?php echo $active3?>">
                    <a class="d-flex flex-column align-items-center nav-link" href="statistic">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="<?php echo $color3?>">
                                    <circle cx="12" cy="12" transform="scale(7.16667,7.16667)" r="10" opacity="0.35">
                                    </circle>
                                    <path
                                        d="M106.10967,70.01833l52.75383,-15.0715c4.39317,-1.25417 6.579,-6.29233 4.39317,-10.30567c-6.27083,-11.53117 -15.609,-21.1345 -26.93233,-27.72783c-3.59767,-2.09267 -8.24167,-0.731 -10.105,2.99567l-23.1985,46.38267c-1.032,2.05683 0.8815,4.35733 3.08883,3.72667z">
                                    </path>
                                    <path
                                        d="M86,78.83333v-64.5c-40.25517,0 -72.76317,33.196 -71.638,73.702c1.03917,37.39567 32.21417,68.57067 69.60983,69.60267c40.506,1.118 73.69483,-31.38283 73.69483,-71.638h-64.5c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span>Thống kê</span>
                    </a>
                </li>
                <li class="nav-item <?php echo $active4?>">
                    <a class="d-flex flex-column align-items-center nav-link" href="account">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                            viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="<?php echo $color4?>">
                                    <circle cx="12" cy="7" transform="scale(7.16667,7.16667)" r="5" opacity="0.35">
                                    </circle>
                                    <path
                                        d="M129,107.5h-86c-11.87517,0 -21.5,9.62483 -21.5,21.5c0,11.87517 9.62483,21.5 21.5,21.5h86c11.87517,0 21.5,-9.62483 21.5,-21.5c0,-11.87517 -9.62483,-21.5 -21.5,-21.5z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span>Tài khoản</span>
                    </a>
                </li>
            </ul>
            <!--- Icon trang admin và nút đăng nhập-->
            <div class="col d-flex justify-content-center justify-content-lg-end">
                <div class="button-nav me-5" id="navbarBtn">
                    <button class="btn button" onclick="window.location.href='/login'">Đăng nhập</button>
                    <button class="btn button1 ms-3" onclick="window.location.href='/signup'">Đăng ký</button>
                </div>
            </div>

        </nav>

        <!---Content--->