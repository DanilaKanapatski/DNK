new Swiper('.image-slider', {
    speed: 700,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,
    keyboard: {
        enabled: true
    }, 
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});
  