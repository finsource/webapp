let username = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn = document.getElementById("login-submit");
let signedBtn = document.getElementById("signed-btn");
let container = document.getElementsByClassName("container")[0];
let loginCard = document.getElementsByClassName("login-card")[0];
let dashboardUser = document.getElementsByClassName("username")[0];
let allowedUsers = ["Keshav", "keshav", "Aditya", "aditya", "user", "root"];
let allowedPasswords = ["Keshav", "keshav", "Aditya", "aditya", "user", "root"];
let isInvalid = 1;


submitBtn.addEventListener("click", () => {
    if (username != "" && password != "") {
        for (let i = 0; i < allowedUsers.length; i++) {
            if (username.value == allowedUsers[i] && password.value == allowedPasswords[i]) {
                isInvalid = 0;
                console.log("Logged in Successfully");
                localStorage.setItem("user", allowedUsers[i]);
                loggedIn();
            }
        }
        if (isInvalid) {
            alert("Invalid Username or Password !");
        }
    } else {
        console.log("Empty username or Password !");
    }
});

signedBtn.addEventListener('click', () => {
    if (localStorage.getItem("user") != null) {
        localStorage.removeItem("user");
        console.log("Logged out Successfully");
        loggedOut();
    }
});

window.addEventListener('load', () => {
    if (localStorage.getItem("user") != null) {
        loggedIn();
    }
});

function loggedIn() {
    signedBtn.style.background = "coral";
    signedBtn.innerHTML = "LOGOUT";
    dashboardUser.innerHTML = `Hi, ${localStorage.getItem("user")} !`;
    container.style.display = "flex";
    localStorage.setItem("cardDisplay", "none");
    loginCard.style.display = `${localStorage.getItem("cardDisplay")}`;
}

function loggedOut() {
    signedBtn.style.background = '';
    signedBtn.innerHTML = "LOGIN";
    dashboardUser.innerHTML = `Hi, Alex !`;
}