function sendData() {
    var alertUsername = document.querySelector('.alertUsername')
    var alertPassword = document.querySelector('.alertPassword')
    var alertEmail =  document.querySelector('.alertEmail')
    var alertRepassword = document.querySelector('.alertRepassword')
    var user = document.querySelector(`#username`).value
    var pass = document.querySelector(`#password`).value
    var mail = document.querySelector('#email').value
    var repass = document.querySelector('#repassword').value

        if(user == '' && pass == '' && mail == '' && repass == '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = 'Mật khẩu đang trống'
            alertEmail.innerHTML = 'Email đang trống'
            alertRepassword.innerHTML = 'Nhập lại mật khẩu đang trống'
        }else if(user == '' && pass != '' && mail != '' && repass != '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = ''
            alertEmail.innerHTML = ''
            alertRepassword.innerHTML = ''
        }else if(user != '' && pass == '' && mail == '' && repass == '') {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = 'Mật khẩu đang trống'
            alertEmail.innerHTML = 'Email đang trống'
            alertRepassword.innerHTML = 'Nhập lại mật khẩu đang trống'
        }else if(user != '' && pass == '' && mail != '' && repass != '') {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = 'Mật khẩu đang trống'
            alertEmail.innerHTML = ''
            alertRepassword.innerHTML = ''
        }else if(user == '' && pass != '' && mail == '' && repass == '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = ''
            alertEmail.innerHTML = 'Email đang trống'
            alertRepassword.innerHTML = 'Nhập lại mật khẩu đang trống'
        }else if(user == '' && pass == '' && mail != '' && repass == '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = 'Mật khẩu đang trống'
            alertEmail.innerHTML = ''
            alertRepassword.innerHTML = 'Nhập lại mật khẩu đang trống'
        }else if(user != '' && pass != '' && mail == '' && repass != '') {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = ''
            alertEmail.innerHTML = 'Email đang trống'
            alertRepassword.innerHTML = ''
        }else if(user != '' && pass != '' && mail != '' && repass == '') {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = ''
            alertEmail.innerHTML = ''
            alertRepassword.innerHTML = 'Nhập lại mật khẩu đang trống'
        }else if(user == '' && pass == '' && mail == '' && repass != '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = 'Mật khẩu đang trống'
            alertEmail.innerHTML = 'Email đang trống'
            alertRepassword.innerHTML = ''
        }else if(user == '' && pass == '' && mail != '' && repass != '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = 'Mật khẩu đang trống'
            alertEmail.innerHTML = ''
            alertRepassword.innerHTML = ''
        }else if(user == '' && pass != '' && mail == '' && repass != '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = ''
            alertEmail.innerHTML = 'Email đang trống'
            alertRepassword.innerHTML = ''
        }else if(user != '' && pass == '' && mail != '' && repass == '') {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = 'Mật khẩu đang trống'
            alertEmail.innerHTML = ''
            alertRepassword.innerHTML = 'Nhập lại mật khẩu đang trống'
        }else if(user != '' && pass != '' && mail == '' && repass == '') {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = ''
            alertEmail.innerHTML = 'Email đang trống'
            alertRepassword.innerHTML = 'Nhập lại mật khẩu đang trống'
        }else {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = ''
            alertEmail.innerHTML = ''
            alertRepassword.innerHTML = ''
                var url = 'http://localhost:4000/signupapi';
               
                var data = {
                    username: document.querySelector(`#username`).value,
                    password: document.querySelector(`#password`).value,
                    email: document.querySelector(`#email`).value,
                    repassword: document.querySelector(`#repassword`).value
                }
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then((respose) => respose.json())
                .then((data) => {
                    if(data.error === true) {
                        var message = document.querySelector(".message")
                        message.innerHTML = `
                        <div  aria-live="polite" aria-atomic="true" class="toast-container position-absolute  top-0 start-50 translate-middle-x p-3">
                        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                <img src="../Views/assets/iconLogo.png" class="rounded me-2" width="35px">
                                <strong class="me-auto">Thông báo</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body alert-light">
                                ${data.message}.
                                </div>
                            </div>
                        </div>`
                        var toastLiveExample = document.getElementById('liveToast')
                        var toast = new bootstrap.Toast(toastLiveExample)
                            toast.show()
                            //clear giá trị trong input
                        document.querySelector(`#username`).value = ''
                        document.querySelector(`#password`).value = ''
                        document.querySelector(`#email`).value = ''
                        document.querySelector(`#repassword`).value = ''
                    }else{
                        var message = document.querySelector(".message")
                        message.innerHTML = `
                        <div  aria-live="polite" aria-atomic="true" class="toast-container position-absolute  top-0 start-50 translate-middle-x p-3">
                        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-header">
                                <img src="../Views/assets/iconLogo.png" class="rounded me-2" width="35px">
                                <strong class="me-auto">Thông báo</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div class="toast-body alert-light">
                                ${data.message}.
                                </div>
                            </div>
                        </div>`
                        
                        var toastLiveExample = document.getElementById('liveToast')
                        var toast = new bootstrap.Toast(toastLiveExample)
                            toast.show()
                    }
                })
                .catch((data) => {
                    console.error("Error:", 
                    data.message)
                })
        }
   }
   var saveButton = document.getElementById('saveData')
   saveButton.addEventListener("click", function () {
    sendData();
  })
//    function getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
//    function checkToken(tokencheck) {
//        if(tokencheck != '') {
//         document.getElementById('form').style.display = "none"

//        }else{
//         document.getElementById('form_logged').style.display = "none"
        
//        }
//    }
    
//     let tokencheck = getCookie("token");
//     console.log(tokencheck)
//     checkToken(`${tokencheck}`)
