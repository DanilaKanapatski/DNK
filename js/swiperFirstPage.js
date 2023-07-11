new Swiper('.image-slider', {
    speed: 600,
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
        delay: 2000,
        disableOnInteraction: false,
    }
});
  