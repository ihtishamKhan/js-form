let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let ageInput = document.getElementById('age');
let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    validateInputs();
});

let errors = {
    isEmailValid: false,
    isPasswordValid: false,
    isAgeValid: false
}

console.log(errors);

function validateInputs() {
    let email = emailInput.value;
    let password = passwordInput.value;
    let age = ageInput.value;

    if (email === '') {
        errors.isEmailValid = false;
        emailError.innerHTML = 'Email is required';
    } else {
        errors.isEmailValid = true;
    }

    if (password === '') {
        errors.isPasswordValid = false;
        passwordError.innerHTML = 'Password is required';
    } else {
        errors.isPasswordValid = true;
    }

    if (age === '') {
        errors.isAgeValid = false;
        ageError.innerHTML = 'Age is required';
    } else {
        errors.isAgeValid = true;
    }
}