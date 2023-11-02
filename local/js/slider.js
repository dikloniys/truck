
let swiper = new Swiper(".specificationsSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    navigation:{
        prevEl:'.js-dutton-prev-slide',
        nextEl:'.js-button-next-slide' 
    }
});

let slider = new Swiper(".choiceSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    navigation:{
        prevEl:'.js-choice-prev-slide',
        nextEl:'.js-choice-next-slide' 
    }
});
let newsSlider = new Swiper(".newsSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    navigation:{
        prevEl:'.js-dutton-prev',
        nextEl:'.js-button-next' 
    }
});