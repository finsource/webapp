let signedBtn = document.getElementById("signed-btn");
let container = document.getElementsByClassName("container")[0];
let isInvalid = 1;

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
    container.style.display = "flex";
}

function loggedOut() {
    signedBtn.style.background = '';
    signedBtn.innerHTML = "LOGIN";
}