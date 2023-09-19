const swiperHero = new Swiper(".swiper-hero", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

const swiperNewProducts = new Swiper(".swiper-products", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
