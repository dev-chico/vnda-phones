function generateProduct(element) {
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperSlide.classList.add("product");

  const productImage = document.createElement("img");
  productImage.classList.add("product-img");
  productImage.src = element.image;

  const productName = document.createElement("h3");
  productName.classList.add("product-name");
  productName.innerText = element.name;

  const productPrice = document.createElement("span");
  productPrice.classList.add("product-price");
  productPrice.innerText = `A partir de: ${formatCurrency(element.price)}`; // utils/formatCurrency.js

  const productLink = document.createElement("a");
  productLink.classList.add("product-link");
  productLink.innerText = "Ver na loja";
  productLink.href = element.link;
  productLink.target = "_blank";

  swiperSlide.appendChild(productImage);
  swiperSlide.appendChild(productName);
  swiperSlide.appendChild(productPrice);
  swiperSlide.appendChild(productLink);

  return swiperSlide;
}
