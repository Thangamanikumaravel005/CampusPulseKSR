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
                document.getElementById(
                    "name"
                ).value;

                const email =
                document.getElementById(
                    "email"
                ).value;

                const rating =
                document.getElementById(
                    "rating"
                ).value;

                const feature =
                document.getElementById(
                    "feature"
                ).value;

                if(
                    name.trim() === "" ||
                    email.trim() === "" ||
                    rating === "" ||
                    feature === ""
                ){

                    alert(
                        "Please fill all required fields."
                    );

                    return;
                }

                alert(
                    "Thank you for your feedback, "
                    + name +
                    "!"
                );

                feedbackForm.reset();

            }
        );

    }
);