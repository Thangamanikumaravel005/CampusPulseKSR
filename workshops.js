const events = [

{
    name:"AI Workshop",
    category:"Workshop",
    date:"2026-06-25",
    venue:"Seminar Hall",
    description:"Learn Artificial Intelligence and Machine Learning."
},

{
    name:"Hackathon 2026",
    category:"Hackathon",
    date:"2026-06-30",
    venue:"Computer Lab",
    description:"24-hour coding competition."
},

{
    name:"Sports Meet",
    category:"Sports",
    date:"2026-07-05",
    venue:"College Ground",
    description:"Inter-college sports championship."
},

{
    name:"Cultural Fest",
    category:"Cultural",
    date:"2026-07-12",
    venue:"Auditorium",
    description:"Music, dance and talent events."
}

];

const eventsList = document.getElementById("eventsList");

let selectedEvent = null;

function displayEvents(data){

    eventsList.innerHTML = "";

    if(data.length === 0){

        eventsList.innerHTML =
        "<h3>No events found.</h3>";

        return;
    }

    data.forEach(event => {

        eventsList.innerHTML += `

        <div class="event-card">

            <h3>${event.name}</h3>

            <p><strong>Category:</strong> ${event.category}</p>

            <p><strong>Date:</strong> ${event.date}</p>

            <p><strong>Venue:</strong> ${event.venue}</p>

            <div class="button-group">

                <button
                onclick="showDetails(
                    '${event.name}',
                    '${event.date}',
                    '${event.venue}',
                    '${event.description}'
                )">

                    View Details

                </button>

                <button
                onclick="openRegisterForm(
                    '${event.name}'
                )">

                    Register

                </button>

            </div>

        </div>

        `;

    });

}

displayEvents(events);
document
.getElementById("searchInput")
.addEventListener("input", applyFilters);
document
.getElementById("dateFilter")
.addEventListener("change", applyFilters);

document
.getElementById("categoryFilter")
.addEventListener("change", applyFilters);

function applyFilters(){

    const search =
    document.getElementById(
        "searchInput"
    ).value.toLowerCase();

    const date =
    document.getElementById(
        "dateFilter"
    ).value;

    const category =
    document.getElementById(
        "categoryFilter"
    ).value;

    const filtered =
    events.filter(event => {

        const matchesName =
        event.name
        .toLowerCase()
        .includes(search);

        const matchesDate =
        !date ||
        event.date === date;

        const matchesCategory =
        category === "all" ||
        event.category === category;

        return matchesName &&
               matchesDate &&
               matchesCategory;

    });

    displayEvents(filtered);

}

function showDetails(
    title,
    date,
    venue,
    description
){

    document.getElementById(
        "popupTitle"
    ).textContent = title;

    document.getElementById(
        "popupDate"
    ).textContent =
    "Date: " + date;

    document.getElementById(
        "popupVenue"
    ).textContent =
    "Venue: " + venue;

    document.getElementById(
        "popupDescription"
    ).textContent =
    description;

    document.getElementById(
        "popup"
    ).style.display = "block";

}
document
.getElementById("closeBtn")
.addEventListener("click", function(){

    document.getElementById(
        "popup"
    ).style.display = "none";

});
function openRegisterForm(eventName){

    selectedEvent =
    events.find(
        event =>
        event.name === eventName
    );

    document.getElementById(
        "registerPopup"
    ).style.display = "block";

}

function closeRegisterForm(){

    document.getElementById(
        "registerPopup"
    ).style.display = "none";

}

document
.getElementById("closeRegisterBtn")
.addEventListener(
    "click",
    closeRegisterForm
);
document
.getElementById("registerForm")
.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        if(!selectedEvent){

            alert(
                "Please select an event first."
            );

            return;
        }

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
            event =>

            event.userEmail ===
            currentUser.email &&

            event.eventName ===
            selectedEvent.name
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
            selectedEvent.name,

            category:
            selectedEvent.category,

            date:
            selectedEvent.date,

            venue:
            selectedEvent.venue,

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
            selectedEvent.name +
            " Registered Successfully!"
        );

        this.reset();

        closeRegisterForm();

    }
);
window.addEventListener(
    "click",
    function(event){

        const detailsPopup =
        document.getElementById(
            "popup"
        );

        const registerPopup =
        document.getElementById(
            "registerPopup"
        );

        if(event.target === detailsPopup){

            detailsPopup.style.display =
            "none";

        }

        if(event.target === registerPopup){

            registerPopup.style.display =
            "none";

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