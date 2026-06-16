document.addEventListener("DOMContentLoaded", function() {

    const currentUser =
    JSON.parse(
        localStorage.getItem("currentUser")
    );

    if(currentUser){

        document.getElementById("userName").textContent =
        currentUser.name;

        document.getElementById("profileName").textContent =
        currentUser.name;

        document.getElementById("profileEmail").textContent =
        currentUser.email;
    }

    const userBtn =
    document.getElementById("userBtn");

    const dropdown =
    document.getElementById("userDropdown");

    userBtn.addEventListener("click", function(){

        dropdown.classList.toggle("show");

    });

    document.getElementById("logoutBtn")
    .addEventListener("click", function(){

        localStorage.removeItem("currentUser");

        window.location.href =
        "login.html";

    });

    const themeBtn =
    document.getElementById("themeToggle");

    themeBtn.addEventListener("click", function(){

        document.body.classList.toggle(
            "dark-mode"
        );

        if(
            document.body.classList.contains(
                "dark-mode"
            )
        ){
            themeBtn.textContent = "☀️";
        }
        else{
            themeBtn.textContent = "🌙";
        }

    });

});
function showDetails(eventId){

    const details =
    document.getElementById(
        eventId + "-details"
    );

    if(details.style.display === "block"){

        details.style.display = "none";

    }
    else{

        details.style.display = "block";

    }

}

function showRegister(eventId){

    const register =
    document.getElementById(
        eventId + "-register"
    );

    if(register.style.display === "block"){

        register.style.display = "none";

    }
    else{

        register.style.display = "block";

    }

}
function registerEvent(
    eventName,
    eventDate,
    category = "General",
    venue = "Campus"
){

    const currentUser =
    JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

    if(!currentUser){

        alert(
            "Please Login First!"
        );

        window.location.href =
        "login.html";

        return;
    }

    let registeredEvents =
    JSON.parse(
        localStorage.getItem(
            "registeredEvents"
        )
    ) || [];

    const alreadyRegistered =
    registeredEvents.some(
        event =>

        event.userEmail ===
        currentUser.email &&

        event.eventName ===
        eventName
    );

    if(alreadyRegistered){

        alert(
            "You have already registered for this event."
        );

        return;
    }

    registeredEvents.push({

        userName:
        currentUser.name,

        userEmail:
        currentUser.email,

        eventName:
        eventName,

        category:
        category,

        date:
        eventDate,

        venue:
        venue,

        status:
        "Registered"

    });

    localStorage.setItem(

        "registeredEvents",

        JSON.stringify(
            registeredEvents
        )

    );

    alert(
        eventName +
        " Registered Successfully!"
    );

}
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