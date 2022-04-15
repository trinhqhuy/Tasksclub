const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList = this.classList == 'bi bi-eye-fill field-icon' ? 'bi bi-eye field-icon' : 'bi bi-eye-fill field-icon'
});
const togglePassword1 = document.querySelector('#togglePassword1');
const password1 = document.querySelector('#repassword');
togglePassword1.addEventListener('click', function (e) {
    // toggle the type attribute
    const type1 = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type1);
    // toggle the eye / eye slash icon
    this.classList = this.classList == 'bi bi-eye-fill field-icon1' ? 'bi bi-eye field-icon1' : 'bi bi-eye-fill field-icon1'
});