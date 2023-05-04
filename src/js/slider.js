const swiper = new Swiper('.slider-container', {
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
    formatFractionCurrent: function (number) {
      return '0' + number;
    },
    formatFractionTotal: function (number) {
      return '0' + number;
    },
    renderFraction: function (currentClass, totalClass) {
      return `<div class=${currentClass}></div><div class=${totalClass}></div>`;
    },
  },
});
