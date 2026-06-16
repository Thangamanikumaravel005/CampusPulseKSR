function togglePassword(id) {

    const passwordField = document.getElementById(id);

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }

}

document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const collegeName = document.getElementById("collegeName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value;

    const newUser = {
        name: userName,
        college: collegeName,
        email: email,
        password: password,
        createdAt: new Date().toLocaleString()
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(
        user => user.email.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
        alert("Email already registered!");
        return;
    }

    users.push(newUser);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Account Created Successfully!");

    document.getElementById("signupForm").reset();

    window.location.href = "login.html";

});