
var swiper = new Swiper(".specificationsSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    navigation:{
        prevEl:'.js-dutton-prev-slide',
        nextEl:'.js-button-next-slide' 
    }
});

var slider = new Swiper(".choiceSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    navigation:{
        prevEl:'.js-choice-prev-slide',
        nextEl:'.js-choice-next-slide' 
    }
});
var newsSlider = new Swiper(".newsSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    navigation:{
        prevEl:'.js-dutton-prev',
        nextEl:'.js-button-next' 
    }
});