var allUserData = [];

function nextpage() {
    window.location.href='nextpage.html';
}

function process() {
    var amountVariable = document.getElementById("number");
    var amountValue = amountVariable.value;
    alert("Amount deposited is Rs. " + amountValue);
}

function signup() {
    window.location.href='signup.html';
}

function signUpDataStorage() {
    var userData = {};

    var username = document.getElementById("user-name").value;
    var age = document.getElementById("age").value;
    var dateOfBirth = document.getElementById("dob").value;
    var passWord = document.getElementById("password").value;
    var confirmPassWord = document.getElementById("confirm-password").value;

    userData['userName'] = username;
    userData['age'] = age;
    userData['dateOfBirth'] = dateOfBirth;
    userData['passWord'] = passWord;
    userData['confirmPassWord'] = confirmPassWord;

    allUserData.push(userData);

    for (let i of allUserData) {
        document.write(i.userName);  
    }
    alert('data is saved');

    window.location.href='index.html';

    
}

function login() {
    window.location.href="login.html";
}

function loginProcess() {
    var name = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;

    for (let i of allUserData) {
        if (i.userName == name && i.passWord == pass) {
            document.write(i.userName);
            document.write(i.age);
            document.write(i.dateOfBirth);
        }
    }
}
