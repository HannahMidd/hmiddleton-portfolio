var multipleCardCarousel = document.querySelector('#carouselExampleControls');
if (window.matchMedia('(min-width: 768px)').matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    console.log('match media works');
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();
    var scrollPosition = 0;
    $('#carouselExampleControls .carousel-control-next').on(
        'click',
        function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                $('#carouselExampleControls .carousel-inner').animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
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
        }
    );
} else {
    $(multipleCardCarousel).addClass('slide');
}

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
