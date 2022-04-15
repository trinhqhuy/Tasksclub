<div class="form" id="form_logged">
                <div class="d-flex flex-col-auto justify-content-center">
                    <img src="../Views/assets/image_views/Home.svg" width="30%">

                </div>
                <h4 class="d-flex flex-col-auto justify-content-center mt-5">Bạn đã đăng nhập</h4>
                </div>
    <div class="row" id="form">
    <div class="message"></div>
        <div class="col-5 d-flex flex-column flex-lg-row-auto align-items-center login_left_area">
            <div class="d-flex flex-row-auto justify-content-center mt-3 mb-3">
                <img src="../Views/assets/Logo.png" width="30%">
            </div>
            <div class="d-flex flex-row-auto login_text_heading mb-3">
                <span class="fw-bolder fs-2x text-white lh-lg text-center">Hãy đăng nhập để trải nghiệm </br>những
                    tính năng hữu ích</span>
            </div>
            <div class="d-flex flex-row-auto justify-content-center">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

                    <div class="carousel-inner">
                        <div class="d-flex flex-row-auto justify-content-center carousel-item active">
                            <img src="../Views/assets/image_views/1.svg" width="50%">

                        </div>
                        <div class="d-flex flex-row-auto justify-content-center carousel-item">
                            <img src="../Views/assets/image_views/2.svg" width="50%">

                        </div>
                        <div class="d-flex flex-row-auto justify-content-center carousel-item">
                            <img src="../Views/assets/image_views/3.svg" width="50%">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="col-7 d-flex flex-column flex-lg-row-auto align-items-center login_right_area container_space">
        
            <div class="form">
                <!--Title area-->
                
                <div class="title_area">
                    <div class="d-flex flex-row-auto justify-content-start mt-5">
                        <span class="text_box_large">Chào mừng đến với Tasksclub.</span>
                    </div>
                    <div class="d-flex flex-row-auto justify-content-start mt-2">
                        <span class="text_box_mini">Bạn mới tới đây? <a class="text_box_mini_link" href="/signup">Hãy
                                tạo tài khoản</a></span>
                    </div>
                </div>
                <!---Input area -->
                
                <div class="input_area">
                    <!---Input email -->
                    <div class="input_email mt-5">
                        <label class="form-label fs-6 fw-bolder text-dark">Tên đăng nhập</label>
                        <input class="form-control form-control-lg form-control-style username" type="text" id="username">
                        <small class="alertUsername red_color"></small>
                    </div>
                    <!---Input password -->
                    <div class="input_password mt-5">
                        <div class="d-flex justify-content-between mt-n5">
                            <label class="form-label fs-6 fw-bolder text-dark">Mật khẩu</label>
                            <a class="text_box_mini_link">Quên mật khẩu?</a>
                        </div>
                        <input class="form-control form-control-lg form-control-style password" type="password" id="password">
                        <span id="togglePassword" class="bi bi-eye field-icon"></span>
                        <small class="alertPassword red_color"></small>

                    </div>
                </div>
                <!---Input button -->
                <button type="button" class="btn w-100 mt-5 btn_login" id="saveData">Đăng nhập</button>
            </div>
        </div>
    </div>
<script src="Views/javascript/showpassword.js"></script>
<script src="../Views/javascript/loginView/login.js"></script>