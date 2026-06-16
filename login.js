function togglePassword(id) {

    const passwordField = document.getElementById(id);

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }

}

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("loginPassword").value;

    const message = document.getElementById("message");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(user =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (validUser) {

        // Store current logged-in user
        localStorage.setItem(
            "currentUser",
            JSON.stringify(validUser)
        );

        showNotification(
    "Login Successful!"
);

        setTimeout(function() {
            window.location.href = "home.html";
        }, 1000);

    } else {

        message.textContent = "Invalid Email or Password!";
        message.style.color = "red";

    }

});
function showNotification(message){

    const notification =
    document.getElementById(
        "notification"
    );

    notification.textContent =
    message;

    notification.style.display =
    "block";

    setTimeout(function(){

        notification.style.display =
        "none";

    },3000);

}