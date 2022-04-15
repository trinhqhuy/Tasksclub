const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList = this.classList == 'bi bi-eye-fill field-icon' ? 'bi bi-eye field-icon' : 'bi bi-eye-fill field-icon'
});
