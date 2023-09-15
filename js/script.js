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

const accordion = document.querySelector('.accordion');
const accordionItems = accordion.querySelectorAll('.accordion__btn');

accordionItems.forEach.call(accordionItems, function(accordionItem) {
    accordionItem.addEventListener('click', function () {
        accordionItem.parentNode.classList.toggle('active')
        // currentItem.classList.toggle('accordeon__item--visible');
        // if (currentText.classList.contains('accordeon__text--visible')) {
        //     currentText.style.maxHeight = currentText.scrollHeight + 'px';
        // } else {
        //     currentText.style.maxHeight = null;
        // }
    })
});