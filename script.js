function reset() {
    document.getElementById('registration-form').reset()
    document.getElementById('firstname').value = ''
    document.getElementById('lastname').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    document.getElementById('confirm-password').value = ''
    document.getElementById('check').checked = ''
}

function firstvali() {
    let firstname = document.getElementById('firstname').value
    if (firstname.length < 3) {
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'block';

    } else {
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'none';
    }

}

function emailvali() {
    let email = document.getElementById('email').value
    if (email.includes("@") && email.includes(".") &&
        email.indexOf("@") > 0 && !email.startsWith(" ") && email.lastIndexOf(".") < email.length - 2
    ) {
        document.getElementsByClassName('invalid-feedback')[2].style.display = 'none'
    } else {
        document.getElementsByClassName('invalid-feedback')[2].style.display = 'block'

    }

}

function lastvali() {


    let lastname = document.getElementById('lastname').value
    if (lastname.length < 3) {
        document.getElementsByClassName('invalid-feedback')[1].style.display = 'block';

    } else {
        document.getElementsByClassName('invalid-feedback')[1].style.display = 'none';
    }

}

function checkvali() {
    let check = document.getElementById('check').checked
    if (check === false) {

        document.getElementsByClassName('invalid-feedback')[5].style.display = 'block'
    } else {
        document.getElementsByClassName('invalid-feedback')[5].style.display = 'none'
    }

}

function passvali() {
    let password = document.getElementById('password');
    let passw = /^(?=.*[0-4])(?=.*[!@#$*])[a-zA-Z0-4!@#$*]{8,17}$/;
    if (password.value.match(passw)) {
        document.getElementsByClassName('invalid-feedback')[3].style.display = 'none'

    } else {
        document.getElementsByClassName('invalid-feedback')[3].style.display = 'block'

    }

}

function cv() {
    let confirm_password = document.getElementById('confirm-password').value
    let password = document.getElementById('password');
    if (password.value !== confirm_password || confirm_password === '') {

        document.getElementsByClassName('invalid-feedback')[4].style.display = 'block'
    } else {
        document.getElementsByClassName('invalid-feedback')[4].style.display = 'none'
    }


}

function validate() {
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password');
    let confirm_password = document.getElementById('confirm-password').value
    let check = document.getElementById('check').checked
    let error = false;

    let passw = /^(?=.*[0-4])(?=.*[!@#$*])[a-zA-Z0-4!@#$*]{8,17}$/;


    if (firstname.length < 3) {
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'block';
        error = true;
    } else {
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'none';
    }
    if (lastname.length < 3) {
        document.getElementsByClassName('invalid-feedback')[1].style.display = 'block';
        error = true;
    } else {
        document.getElementsByClassName('invalid-feedback')[1].style.display = 'none';
    }

    if (email.includes("@") && email.includes(".") &&
        email.indexOf("@") > 0 && !email.startsWith(" ") && email.lastIndexOf(".") < email.length - 1
    ) {
        document.getElementsByClassName('invalid-feedback')[2].style.display = 'none'
    } else {
        document.getElementsByClassName('invalid-feedback')[2].style.display = 'block'
        error = true;
    }


    if (password.value.match(passw)) {
        document.getElementsByClassName('invalid-feedback')[3].style.display = 'none'

    } else {
        document.getElementsByClassName('invalid-feedback')[3].style.display = 'block'
        error = true;
    }

    if (password.value !== confirm_password || confirm_password === '') {
        error = true;
        document.getElementsByClassName('invalid-feedback')[4].style.display = 'block'
    } else {
        document.getElementsByClassName('invalid-feedback')[4].style.display = 'none'
    }


    if (check === false) {
        error = true;
        document.getElementsByClassName('invalid-feedback')[5].style.display = 'block'
    } else {
        document.getElementsByClassName('invalid-feedback')[5].style.display = 'none'
    }

    if (!error) {
        document.getElementsByClassName('invalid-feedback')[0].style.display = 'none'
        document.getElementsByClassName('invalid-feedback')[1].style.display = 'none'
        document.getElementsByClassName('invalid-feedback')[2].style.display = 'none'
        document.getElementsByClassName('invalid-feedback')[3].style.display = 'none'
        document.getElementsByClassName('invalid-feedback')[4].style.display = 'none'
        document.getElementsByClassName('invalid-feedback')[5].style.display = 'none'
        alert("your details have been saved successfully");
        reset();
    }

}