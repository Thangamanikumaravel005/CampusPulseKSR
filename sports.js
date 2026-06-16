const sportsEvents = [
{
    name: "Inter College Cricket Tournament",
    category: "Cricket",
    date: "2026-07-05"
},

{
    name: "Football League Championship",
    category: "Football",
    date: "2026-07-10"
},

{
    name: "Volleyball Tournament",
    category: "Volleyball",
    date: "2026-07-15"
},

{
    name: "Track & Field Meet",
    category: "Athletics",
    date: "2026-07-20"
},

{
    name: "Basketball Championship",
    category: "Basketball",
    date: "2026-07-25"
},

{
    name: "Badminton Open",
    category: "Indoor Sports",
    date: "2026-07-30"
}
];
const searchInput =
document.getElementById("searchInput");

const dateFilter =
document.getElementById("dateFilter");

const categoryFilter =
document.getElementById("categoryFilter");

const cards =
document.querySelectorAll(".event-card");

function filterSports(){

const searchText =
searchInput.value.toLowerCase();

const selectedDate =
dateFilter.value;

const selectedCategory =
categoryFilter.value;

cards.forEach(card => {

    const title =
    card.querySelector("h3")
    .textContent
    .toLowerCase();

    const categoryText =
    card.querySelector("p")
    .textContent;

    const cardText =
    card.textContent;

    let matchesSearch =
    title.includes(searchText);

    let matchesDate = true;

    let matchesCategory = true;

    if(selectedDate){

        matchesDate =
        cardText.includes(selectedDate);

    }

    if(selectedCategory !== "all"){

        matchesCategory =
        categoryText.includes(
            selectedCategory
        );

    }

    if(
        matchesSearch &&
        matchesDate &&
        matchesCategory
    ){

        card.style.display =
        "block";

    }
    else{

        card.style.display =
        "none";

    }

});
}

searchInput.addEventListener(
"input",
filterSports
);

dateFilter.addEventListener(
"change",
filterSports
);

categoryFilter.addEventListener(
"change",
filterSports
);
let selectedSportEvent = null;

function openRegisterForm(
eventName,
category,
date,
venue
){
selectedSportEvent = {

    name: eventName,
    category: category,
    date: date,
    venue: venue

};

document.getElementById(
    "registerPopup"
).style.display = "block";
}

function closeRegisterForm(){
document.getElementById(
    "registerPopup"
).style.display = "none";
}

document.getElementById(
"closeRegisterBtn"
).addEventListener(
"click",
closeRegisterForm
);

document.getElementById(
"registerForm"
).addEventListener(
"submit",
function(event){
    event.preventDefault();

    const currentUser =
    JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

    if(!currentUser){

        alert(
            "Please login first!"
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
        item =>

        item.userEmail ===
        currentUser.email &&

        item.eventName ===
        selectedSportEvent.name
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
        selectedSportEvent.name,

        category:
        selectedSportEvent.category,

        date:
        selectedSportEvent.date,

        venue:
        selectedSportEvent.venue,

        status:
        "Registered"

    });

    localStorage.setItem(

        "registeredEvents",

        JSON.stringify(
            registeredEvents
        )

    );

    showNotification(
    selectedSportEvent.name +
    " Registered Successfully!"
);

    this.reset();

    closeRegisterForm();

}
);
window.addEventListener(
"click",
function(event){
    const popup =
    document.getElementById(
        "registerPopup"
    );

    if(event.target === popup){

        closeRegisterForm();

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