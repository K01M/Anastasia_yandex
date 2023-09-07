const swiper = new Swiper('.advantages__slider', {
    slidesPerView: 4,
    initialSlide: 2,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
const reportsSlider = new Swiper('.reports__slider', {
    navigation: {
        nextEl: ".reports__slider-next",
        prevEl: ".reports__slider-prev",
    },
});