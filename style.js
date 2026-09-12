/* =========================================
   SERENE TOUCH WELLNESS
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

});


/* Close menu after clicking a link */

const navLinks = mainNav.querySelectorAll("a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================
   MINIMUM BOOKING DATE
   Prevents selecting dates in the past.
========================================= */

const dateInput =
    document.querySelector('input[name="date"]');


if (dateInput) {

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.min = today;

}


/* =========================================
   WELLNESS SAFETY CHECK
========================================= */

const wellnessForm =
    document.querySelector('form[name="wellness-check"]');


if (wellnessForm) {

    wellnessForm.addEventListener("submit", function(event) {

        const healthConcern =
            document.querySelector(
                '[name="health-concern"]'
            ).value;


        const medicalAdvice =
            document.querySelector(
                '[name="medical-advice"]'
            ).value;


        /*
         * We do NOT diagnose the client here.
         *
         * If a client indicates a possible health concern,
         * the therapist should review the submission before
         * confirming the appointment.
         */


        if (
            healthConcern === "Yes" ||
            healthConcern === "Not sure" ||
            medicalAdvice === "Yes" ||
            medicalAdvice === "Not sure"
        ) {

            const proceed =
                confirm(
                    "Thank you for completing the Wellness Check. " +
                    "Because you indicated a health consideration, " +
                    "your information may need to be reviewed before " +
                    "your massage can be confirmed. Continue?"
                );


            if (!proceed) {

                event.preventDefault();

            }

        }

    });

}


/* =========================================
   SMOOTH SERVICE SELECTION
========================================= */

const serviceLinks =
    document.querySelectorAll(
        '.service-card a[href="#booking"]'
    );


serviceLinks.forEach(link => {

    link.addEventListener("click", function() {

        const card =
            this.closest(".service-card");

        const serviceName =
            card.querySelector("h3").textContent;

        const serviceSelect =
            document.querySelector(
                'select[name="service"]'
            );


        if (serviceSelect) {

            const options =
                Array.from(serviceSelect.options);


            const matchingOption =
                options.find(
                    option =>
                        option.text.trim()
                        .toLowerCase()
                        === serviceName.trim().toLowerCase()
                );


            if (matchingOption) {

                serviceSelect.value =
                    matchingOption.value;

            }

        }

    });

});


/* =========================================
   BASIC IMAGE ERROR HANDLING
========================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener("error", () => {

        console.warn(
            "Image could not be loaded:",
            image.src
        );

    });

});
