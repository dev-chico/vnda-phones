const swiperHero = new Swiper(".swiper-hero", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const swiperNewProducts = new Swiper(".swiper-products", {
  slidesPerView: 4,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
});
