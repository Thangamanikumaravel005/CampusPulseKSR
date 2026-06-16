function togglePassword(){

    const password =
    document.getElementById("password");

    if(password.type === "password"){

        password.type = "text";

    }
    else{

        password.type = "password";

    }

}

document.addEventListener(
    "DOMContentLoaded",
    function(){

        document.getElementById("loginForm")
        .addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                showNotification(
    "Registration Successful!"
);

                window.location.href =
                "home.html";

            }
        );

    }
);
document.addEventListener(
    
function(){

        const userName =
        localStorage.getItem(
            "userName"
        );

        if(userName){

            document.getElementById(
                "userName"
            ).textContent =
            userName;

        }

    }
);
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