
    <div class="row">
    <div class="message"></div>
        <div class="col-5 d-flex flex-column flex-lg-row-auto align-items-center login_left_area">
            <div class="d-flex flex-row-auto justify-content-center mb-3">
                <img src="../Views/assets/Logo.png" width="30%">
            </div>
            <div class="d-flex flex-row-auto login_text_heading mb-3">
                <span class="fw-bolder fs-2x text-white lh-lg text-center">Hãy đăng ký để trải nghiệm </br>những
                    tính năng hữu ích</span>
            </div>
            <div class="d-flex flex-row-auto justify-content-center">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">

                    <div class="carousel-inner">
                        <div class="d-flex flex-row-auto justify-content-center carousel-item active">
                            <img src="../Views/assets/image_views/3.svg" width="50%">

                        </div>
                        <div class="d-flex flex-row-auto justify-content-center carousel-item">
                            <img src="../Views/assets/image_views/2.svg" width="50%">

                        </div>
                        <div class="d-flex flex-row-auto justify-content-center carousel-item">
                            <img src="../Views/assets/image_views/1.svg" width="50%">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-7 d-flex flex-column flex-lg-row-auto align-items-center login_right_area container_space">
            <div class="form">
                <!--Title area-->
                <div class="title_area">
                    <div class="d-flex flex-row-auto justify-content-start">
                        <span class="text_box_large">Chào mừng đến với Tasksclub.</span>
                    </div>
                    <div class="d-flex flex-row-auto justify-content-start mt-2">
                        <span class="text_box_mini">Bạn đã có tài khoản? <a class="text_box_mini_link" href="/login">Hãy
                                đăng nhập</a></span>
                    </div>
                </div>
                <!---Input area -->
                <div class="input_area">
                    <!---Input username-->
                    <div class="input_email mt-5">
                        <label class="form-label fs-6 fw-bolder text-dark">Tên đăng nhập</label>
                        <input class="form-control form-control-lg form-control-style username" type="text" id="username">
                        <small class="alertUsername red_color"></small>

                    </div>
                    <!---Input email -->
                    <div class="input_email mt-4">
                        <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                        <input class="form-control form-control-lg form-control-style email" type="email" id="email">
                        <small class="alertEmail red_color"></small>

                    </div>
                    <!---Input password -->
                    <div class="input_password mt-4">
                        <div class="d-flex justify-content-between mt-n5">
                            <label class="form-label fs-6 fw-bolder text-dark">Mật khẩu</label>
                        </div>
                        <input class="form-control form-control-lg form-control-style password" type="password" id="password">
                        <span id="togglePassword" class="bi bi-eye field-icon"></span>
                        <small class="alertPassword red_color"></small>
                    </div>
                    <div class="input_password mt-4">
                        <div class="d-flex justify-content-between mt-n5">
                            <label class="form-label fs-6 fw-bolder text-dark">Nhập lại mật khẩu</label>
                            
                        </div>
                        <input class="form-control form-control-lg form-control-style repassword" type="password" id="repassword">
                        <span id="togglePassword1" class="bi bi-eye field-icon1"></span>
                        <small class="alertRepassword red_color"></small>

                    </div>
                </div>
                <!---Input button -->
                <button class="btn w-100 mt-5 btn_login mb-5" id="saveData">Đăng ký</button>
            </div>
        </div>
    </div>
<script src="Views/javascript/showpassword1.js"></script>
<script src="../Views/javascript/signupView/signup.js"></script>
