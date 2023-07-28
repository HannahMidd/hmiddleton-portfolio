document.addEventListener('DOMContentLoaded', function () {
    const arrowButton = document.getElementById('arrow-btn');
    const aboutSection = document.getElementById('about');
    const carousel = document.querySelector('#carouselExampleControls');
    const carouselInner = document.querySelector('.carousel-inner');
    const cardWidth = document.querySelector('.carousel-item').clientWidth;
    const totalCards = document.querySelectorAll('.carousel-item').length;
    let scrollPosition = 0;

    arrowButton.addEventListener('click', function () {
        // Calculate the offsetTop of the about section relative to the document
        const offsetTop = aboutSection.offsetTop;

        // Scroll the page to the about section with smooth behavior
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    });

    updateArrowVisibility();

    document
        .getElementById('carouselExampleControls')
        .addEventListener('slide.bs.carousel', function () {
            setTimeout(updateArrowVisibility, 500); // Delay the update to ensure the carousel has finished sliding
        });

    function updateArrowVisibility() {
        const carouselWidth = carouselInner.scrollWidth;
        const remainingScrollWidth =
            carouselWidth - scrollPosition - carouselInner.clientWidth;

        const tolerance = 5; // Set a small tolerance value (adjust as needed)

        // Hide/show next button based on remaining scroll width
        if (remainingScrollWidth <= tolerance) {
            document.querySelector('.carousel-control-next').style.display =
                'none';
        } else {
            document.querySelector('.carousel-control-next').style.display =
                'block';
        }

        // Hide/show previous button based on scroll position
        if (scrollPosition <= tolerance) {
            document.querySelector('.carousel-control-prev').style.display =
                'none';
        } else {
            document.querySelector('.carousel-control-prev').style.display =
                'block';
        }

        // Adjust scroll position if it goes out of bounds
        if (scrollPosition > carouselWidth - carouselInner.clientWidth) {
            scrollPosition = carouselWidth - carouselInner.clientWidth;
            $('#carouselExampleControls .carousel-inner').animate(
                { scrollLeft: scrollPosition },
                200
            );
        }
    }

    $('#carouselExampleControls .carousel-control-next').on(
        'click',
        function () {
            if (
                scrollPosition <
                carouselInner.scrollWidth - carouselInner.clientWidth
            ) {
                scrollPosition += cardWidth;
                $('#carouselExampleControls .carousel-inner').animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
            updateArrowVisibility();
        }
    );

    $('#carouselExampleControls .carousel-control-prev').on(
        'click',
        function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $('#carouselExampleControls .carousel-inner').animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
            updateArrowVisibility();
        }
    );
});

// Arrow button to scroll to about section
document.addEventListener('DOMContentLoaded', function () {
    const arrowButton = document.getElementById('arrow-btn');
    const aboutSection = document.getElementById('about');

    arrowButton.addEventListener('click', function () {
        // Calculate the offsetTop of the about section relative to the document
        const offsetTop = aboutSection.offsetTop;

        // Scroll the page to the about section with smooth behavior
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    });
});
