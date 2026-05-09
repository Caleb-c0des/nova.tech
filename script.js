new Swiper('.image-box-flex', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1 // Fixed typo here
    },
    768: {
      slidesPerView: 2 // Fixed typo here
    },
    1024: {
      slidesPerView: 2 // Fixed typo here
    },
  }
});
