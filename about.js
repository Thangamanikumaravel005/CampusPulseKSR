function openFeedback(){

    document.getElementById(
        "feedbackModal"
    ).style.display = "block";

}

function closeFeedback(){

    document.getElementById(
        "feedbackModal"
    ).style.display = "none";

}

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const feedbackForm =
        document.getElementById(
            "feedbackForm"
        );

        feedbackForm.addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                const name =
                this.querySelector(
                    'input[type="text"]'
                ).value;

                const email =
                this.querySelector(
                    'input[type="email"]'
                ).value;

                const feedback =
                this.querySelector(
                    "textarea"
                ).value;

                if(
                    name.trim() === "" ||
                    email.trim() === "" ||
                    feedback.trim() === ""
                ){

                    alert(
                        "Please fill all fields."
                    );

                    return;

                }

                alert(
                    "Thank you for your feedback, "
                    + name +
                    "!"
                );

                this.reset();

                closeFeedback();

            }
        );

    }
);
window.onclick = function(event){

    const modal =
    document.getElementById(
        "feedbackModal"
    );

    if(event.target === modal){

        closeFeedback();

    }

};
function goHomeWithFeedback(){

    window.open(
        "https://forms.gle/GW8UhS5eDuYBNTUA7",
        "_blank"
    );

    window.location.href =
    "home.html";

}