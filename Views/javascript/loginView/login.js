   function sendData() {
    var alertUsername = document.querySelector('.alertUsername')
    var alertPassword = document.querySelector('.alertPassword')
    var user = document.querySelector(`#username`).value
    var pass = document.querySelector(`#password`).value
        if(user == '' && pass == '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = 'Mật khẩu đang trống'
        }else if(user == '' && pass != '') {
            alertUsername.innerHTML = 'Tên đăng nhập đang trống'
            alertPassword.innerHTML = ''
        }else if(user != '' && pass == '') {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = 'Mật khẩu đang trống'
        }else {
            alertUsername.innerHTML = ''
            alertPassword.innerHTML = ''
                var url = 'http://localhost:4000/loginapi';
                var data = {
                    username: document.querySelector(`#username`).value,
                    password: document.querySelector(`#password`).value,
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
                    if(data.error == true) {
                        // function createCookie(name, value, expDay){
                        //     let now = new Date()
                        //     now.setTime(now.getTime() + expDay * 24 * 60 * 1000)
                        //     document.cookie = name + "=" + value + ';expires=' + now.toUTCString() + ";path=/"
                        // }
                        // createCookie("token", data.token, '60')
                        function setCookie(cname, cvalue, exdays) {
                            const d = new Date();
                            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                            let expires = "expires="+d.toUTCString();
                            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                          }
                         
                          
                        setCookie("token", data.token, 100);
                        
                        window.location="http://localhost:4000/"
                    }else{
                        var message = document.querySelector(".message")
                            message.innerHTML = `
                            <div  aria-live="polite" aria-atomic="true" class="toast-container position-absolute  top-0 start-50 translate-middle-x p-3">
                            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div class="toast-header">
                                    <img src="../Views/assets/iconLogo.png" class="rounded me-2" width="35px">
                                    <strong class="me-auto">Cảnh báo</strong>
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
    
   function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
   function checkToken(tokencheck) {
       if(tokencheck != '') {
        document.getElementById('form').style.display = "none"

       }else{
        document.getElementById('form_logged').style.display = "none"
        var saveButton = document.getElementById('saveData')
        saveButton.onclick = sendData
       }
   }
    
    let tokencheck = getCookie("token");
    console.log(tokencheck)
    checkToken(`${tokencheck}`)
    