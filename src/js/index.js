// Sticky Nav
const navbar = document.querySelector('#header-section nav');
const navbarLogo = document.querySelector('.navbar-brand img');
window.onscroll = function () {
    stickyNav();
};
function stickyNav() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('sticky-nav');
        navbarLogo.src = 'img/black-logo.png';
    } else {
        navbar.classList.remove('sticky-nav');
        navbarLogo.src = 'img/logo.png';
    }
}

// Mobile Menu Icon Animation
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('toggle');
});

// Magnific PopUp
$('.banner-pop-up-video').magnificPopup({
    type: 'iframe',
});

// Testimonial Slider
const swiper = new Swiper('.swiper-container.testimonial-slider', {
    effect: 'coverflow',
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 400,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            coverflowEffect: {
                stretch: 200,
            },
        },
        992: {
            coverflowEffect: {
                stretch: 780,
            },
        },
        1200: {
            coverflowEffect: {
                stretch: 770,
            },
        },
        1400: {
            coverflowEffect: {
                stretch: 900,
            },
        },
    },
    navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
    },
});

// Portfolios Filtering Layout
const $grid = $('.portfolios').isotope({
    itemSelector: '.portfolio-item',
    percentPosition: true,
    masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
    },
});
// Filter Portfolio items on button click
$('.portfolio-category-buttons').on('click', 'button', function () {
    const filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
//   Show Active Class Button Onclick
$('.portfolio-category-buttons button').click(function () {
    $('.portfolio-category-buttons button').removeClass('is-clicked');
    $(this).addClass('is-clicked');
});
