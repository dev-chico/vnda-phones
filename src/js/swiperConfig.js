const swiperPresentation = new Swiper(".swiper-presentation", {
  slidesPerView: 5,
  spaceBetween: 20,
  freeMode: true,
});

const swiperNewProducts = new Swiper(".swiper-products", {
  slidesPerView: 4,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
});
