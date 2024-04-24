document.addEventListener('DOMContentLoaded', function(){

    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirmPassword');
    console.log('Hi');

    let error = document.querySelector('#error');

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    function validatePassword(){
        let password = passwordInput.value;
        let confirmPassword = confirmPasswordInput.value;

        if(password === confirmPassword){
            error.innerHTML = "";
        }

        else{
            error.innerHTML = "*passwords do not match!";
        }
    }
})