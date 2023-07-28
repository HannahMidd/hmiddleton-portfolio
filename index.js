document.addEventListener('DOMContentLoaded', function () {
    const arrowButton = document.getElementById('arrow-btn');
    const aboutSection = document.getElementById('about');
    const carousel = document.querySelector('#carouselExampleControls');
    const carouselInner = document.querySelector('.carousel-inner');
    const cardWidth = document.querySelector('.carousel-item').clientWidth;
    const totalCards = document.querySelectorAll('.carousel-item').length;

    arrowButton.addEventListener('click', function () {
        // Calculate the offsetTop of the about section relative to the document
        const offsetTop = aboutSection.offsetTop;

        // Scroll the page to the about section with smooth behavior
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    });

    if (window.matchMedia('(min-width: 768px)').matches) {
        let scrollPosition = 0;

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

            if (remainingScrollWidth <= cardWidth) {
                document.querySelector('.carousel-control-next').style.display =
                    'none';
            } else {
                document.querySelector('.carousel-control-next').style.display =
                    'block';
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
    } else {
        $(carousel).addClass('slide');
    }
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
