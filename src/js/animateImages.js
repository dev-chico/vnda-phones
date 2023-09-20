const firstInformationImg = document.getElementById("information-img-1");
const secondfirstInformationImg = document.getElementById("information-img-2");
const thirdfirstInformationImg = document.getElementById("information-img-3");
const fourthfirstInformationImg = document.getElementById("information-img-4");
const fifthfirstInformationImg = document.getElementById("information-img-5");

const options = {
  duration: 1000,
  easing: "ease",
  origin: "left",
  distance: "200px",
  reset: true,
};

ScrollReveal().reveal(firstInformationImg, {
  ...options,
  origin: "top",
  distance: "150px",
});

ScrollReveal().reveal(secondfirstInformationImg, {
  ...options,
  distance: "150px",
});

ScrollReveal().reveal(thirdfirstInformationImg, options);

ScrollReveal().reveal(fourthfirstInformationImg, options);

ScrollReveal().reveal(fifthfirstInformationImg, options);
