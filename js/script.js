const swiper = new Swiper('.advantages__slider', {
    slidesPerView: 4,
    initialSlide: 2,
    spaceBetween: 16,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});