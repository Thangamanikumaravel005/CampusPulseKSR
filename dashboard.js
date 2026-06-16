document.addEventListener(
    "DOMContentLoaded",
    function(){

        const currentUser =
        JSON.parse(
            localStorage.getItem(
                "currentUser"
            )
        );

        if(!currentUser){

            window.location.href =
            "login.html";

            return;
        }

        document.getElementById(
            "profileName"
        ).textContent =
        currentUser.name;

        document.getElementById(
            "profileEmail"
        ).textContent =
        currentUser.email;

        const registeredEvents =
        JSON.parse(
            localStorage.getItem(
                "registeredEvents"
            )
        ) || [];

        const userEvents =
        registeredEvents.filter(
            event =>
            event.userEmail ===
            currentUser.email
        );

        const eventList =
        document.getElementById(
            "eventList"
        );

        if(userEvents.length === 0){

            eventList.innerHTML =

            `<div class="no-events">
                No events registered yet.
            </div>`;

            return;
        }

        userEvents.forEach(
            function(event){

                const eventCard =
                document.createElement(
                    "div"
                );

                eventCard.className =
                "event-card";

                eventCard.innerHTML =

                `
                <h3>${event.eventName}</h3>

                <p>
                    <strong>Category:</strong>
                    ${event.category}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${event.date}
                </p>

                <p>
                    <strong>Venue:</strong>
                    ${event.venue}
                </p>

                <p class="status">
                    Status: Registered
                </p>

                <button
                    onclick="removeEvent(
                        '${event.eventName}'
                    )">

                    Cancel Registration

                </button>
                `;

                eventList.appendChild(
                    eventCard
                );

            }
        );

    }
);

function removeEvent(eventName){

    const currentUser =
    JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

    let registeredEvents =
    JSON.parse(
        localStorage.getItem(
            "registeredEvents"
        )
    ) || [];

    registeredEvents =
    registeredEvents.filter(
        event =>

        !(
            event.userEmail ===
            currentUser.email &&

            event.eventName ===
            eventName
        )
    );

    localStorage.setItem(
        "registeredEvents",
        JSON.stringify(
            registeredEvents
        )
    );

    showNotification(
    "Registration Cancelled Successfully!"
);

    location.reload();

}

function goBack(){

    window.history.back();

}

function goNext(){

    window.history.forward();

}

