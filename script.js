function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    let confirm = document.getElementById("regConfirm").value;
    let msg = document.getElementById("msg");

    if (user === "" || pass === "" || confirm === "") {
        msg.textContent = "All fields are required";
        return;
    }

    if (pass !== confirm) {
        msg.textContent = "Passwords do not match";
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Registration Successful!");
    window.location.href = "index.html";
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;
    let msg = document.getElementById("msg");

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        alert("Login Successful!");
    } else {
        msg.textContent = "Invalid Username or Password";
    }
}