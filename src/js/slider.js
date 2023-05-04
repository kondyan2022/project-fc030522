new Swiper('.slider-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  keyboard: { enabled: true },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
});
