document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PAGE LOAD
    ========================= */

    document.body.classList.add("loaded");


    /* =========================
       SCROLL REVEAL
    ========================= */

    const sections = document.querySelectorAll(
        ".hero, .photo-section, .event-details, .menu-section, .location-section, footer"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    sections.forEach((section) => {

        section.classList.add("reveal");

        observer.observe(section);

    });


    /* =========================
       LOCATION BUTTON
    ========================= */

    const locationButton =
        document.querySelector(".location-btn");

    if (locationButton) {

        locationButton.addEventListener("click", () => {

            console.log("Opening location...");

        });

    }


    /* =========================
       SUBTLE CLICK EFFECT
    ========================= */

    document.addEventListener("click", (event) => {

        const sparkle = document.createElement("span");

        sparkle.innerHTML = "✦";

        sparkle.style.position = "fixed";
        sparkle.style.left = `${event.clientX}px`;
        sparkle.style.top = `${event.clientY}px`;

        sparkle.style.pointerEvents = "none";
        sparkle.style.color = "#c9a45c";
        sparkle.style.fontSize = "14px";
        sparkle.style.zIndex = "9999";

        sparkle.style.animation =
            "clickSparkle 0.8s ease-out forwards";

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 800);

    });

});