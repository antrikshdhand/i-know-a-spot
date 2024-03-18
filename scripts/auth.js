import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { ref, set, update } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import { auth, database } from './firebase.js';

document.getElementById("register-button").addEventListener('click', register);
function register() {
    console.log("Attemping register");
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate input fields
    if (!validate_field(firstName) || !validate_field(lastName) || !validate_field(password) || !validate_field(email)) {
        alert("Missing input fields.");
        return;
    }

    if (!validate_email(email)) {
        alert("Invalid email input.");
        return;
    }

    if (!validate_password(password)) {
        alert("Your password must be at least 6 characters long.");
        return;
    }

    document.getElementById('register-form').reset();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email,
                firstName,
                lastName,
                lastLogin: Date.now()
            }
            set(ref(database, 'users/' + user.uid), userData);

            console.log("Successfully registered.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

document.getElementById("login-button").addEventListener('click', login);
function login() {
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    if (!validate_field(email) || !validate_field(password)) {
        alert("Missing input fields.");
    }

    if (!validate_email(email)) {
        alert("Invalid email input.");
        return;
    }

    document.getElementById('register-form').reset();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                lastLogin: Date.now()
            };
            update(ref(database, 'users/' + user.uid), userData);

            console.log("LOGGED IN SUCCESSFULLY");
            console.log(auth.currentUser);
            window.location.href = './map.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert("Incorrect email and password combination.");
        });
}

function validate_email(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(email);
}

function validate_password(password) {
    if (password.length < 6) {
        return false;
    }

    return true;
}

function validate_field(field) {
    if (field === null) {
        return false;
    }

    if (field.length <= 0) {
        return false;
    }

    return true;
}