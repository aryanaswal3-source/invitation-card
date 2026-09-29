document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       EXTRA BALLOONS
    ================================= */

    const container =
        document.querySelector(".balloons");


    function createBalloon() {

        const balloon =
            document.createElement("div");

        balloon.className = "balloon";


        const colors = [

            "linear-gradient(145deg,#ed9dae,#8f304c)",

            "linear-gradient(145deg,#e7cf8b,#9c7130)",

            "linear-gradient(145deg,#e99bad,#8c2946)",

            "linear-gradient(145deg,#f0d897,#9b702c)"

        ];


        balloon.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        balloon.style.left =
            Math.random() * 100 + "%";


        const size =
            Math.random() * 18 + 30;


        balloon.style.width =
            size + "px";

        balloon.style.height =
            size * 1.25 + "px";


        balloon.style.animationDuration =
            Math.random() * 5 + 8 + "s";


        balloon.style.animationDelay =
            Math.random() * 2 + "s";


        container.appendChild(balloon);


        setTimeout(() => {
            balloon.remove();
        }, 15000);

    }


    /* Initial balloons */

    for (let i = 0; i < 4; i++) {

        setTimeout(
            createBalloon,
            i * 1500
        );

    }


    /* Continuous balloons */

    setInterval(
        createBalloon,
        2500
    );


    /* =================================
       CLICK SPARKLES
    ================================= */

    document.addEventListener(
        "click",
        (event) => {

            for (
                let i = 0;
                i < 5;
                i++
            ) {

                const sparkle =
                    document.createElement("span");


                sparkle.innerHTML = "✦";


                sparkle.style.position =
                    "fixed";

                sparkle.style.left =
                    event.clientX + "px";

                sparkle.style.top =
                    event.clientY + "px";

                sparkle.style.color =
                    "#d8b66a";

                sparkle.style.fontSize =
                    "12px";

                sparkle.style.pointerEvents =
                    "none";

                sparkle.style.zIndex =
                    "9999";

                sparkle.style.transition =
                    "all .7s ease";


                document.body.appendChild(
                    sparkle
                );


                const angle =
                    (Math.PI * 2 / 5) * i;


                const distance = 35;


                requestAnimationFrame(() => {

                    sparkle.style.transform =
                        `
                        translate(
                            ${Math.cos(angle) * distance}px,
                            ${Math.sin(angle) * distance}px
                        )
                        scale(0)
                        `;

                    sparkle.style.opacity = "0";

                });


                setTimeout(() => {

                    sparkle.remove();

                }, 750);

            }

        }
    );


    /* =================================
       IMAGE ERROR FALLBACK
    ================================= */

    const image =
        document.querySelector(
            ".photo img"
        );


    if (image) {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

            }
        );

    }

});