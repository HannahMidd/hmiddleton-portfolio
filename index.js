document.addEventListener('DOMContentLoaded', function () {
    const arrowButton = document.getElementById('arrow-btn');
    const aboutSection = document.getElementById('about');
    const carousel = document.querySelector('#carouselExampleControls');
    const carouselInner = document.querySelector('.carousel-inner');
    let scrollPosition = 0;

    arrowButton.addEventListener('click', function () {
        const offsetTop = aboutSection.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });
    });

    updateArrowVisibility();

    document
        .getElementById('carouselExampleControls')
        .addEventListener('slide.bs.carousel', function () {
            setTimeout(updateArrowVisibility, 500);
        });

    function updateArrowVisibility() {
        const carouselWidth = carouselInner.scrollWidth;
        const remainingScrollWidth =
            carouselWidth - scrollPosition - carouselInner.clientWidth;
        const tolerance = 5;

        document.querySelector('.carousel-control-next').style.display =
            remainingScrollWidth <= tolerance ? 'none' : 'block';
        document.querySelector('.carousel-control-prev').style.display =
            scrollPosition <= tolerance ? 'none' : 'block';

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
                // Get the width of the next carousel item dynamically
                const cardWidth = $(
                    '#carouselExampleControls .carousel-item.active'
                )
                    .next()
                    .width();
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
                // Get the width of the previous carousel item dynamically
                const cardWidth = $(
                    '#carouselExampleControls .carousel-item.active'
                )
                    .prev()
                    .width();
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
