const newProducts = [
  {
    id: 1,
    name: "iPhone 13 - 128GB",
    price: 5120,
    image: "./images/newProducts/iphone-13-min.png",
    link: "https://www.vnda.com.br/",
  },
  {
    id: 2,
    name: "MacBook Pro de 13”",
    price: 12950,
    image: "",
    image: "./images/newProducts/macbook-min.png",
    link: "https://www.vnda.com.br/",
  },
  {
    id: 3,
    name: "iPhone 12 - 128GB",
    price: 4120,
    image: "./images/newProducts/iphone-12-min.png",
    link: "https://www.vnda.com.br/",
  },
  {
    id: 4,
    name: "Apple Watch SE",
    price: 2340,
    image: "./images/newProducts/apple-watch-min.png",
    link: "https://www.vnda.com.br/",
  },
  {
    id: 5,
    name: "iPhone 13 - 128GB",
    price: 5120,
    image: "./images/newProducts/iphone-13-min.png",
    link: "https://www.vnda.com.br/",
  },
  {
    id: 6,
    name: "MacBook Pro de 13”",
    price: 12950,
    image: "",
    image: "./images/newProducts/macbook-min.png",
    link: "https://www.vnda.com.br/",
  },
  {
    id: 7,
    name: "iPhone 12 - 128GB",
    price: 4120,
    image: "./images/newProducts/iphone-12-min.png",
    link: "https://www.vnda.com.br/",
  },
  {
    id: 8,
    name: "Apple Watch SE",
    price: 2340,
    image: "./images/newProducts/apple-watch-min.png",
    link: "https://www.vnda.com.br/",
  },
];

const swipper = document.getElementById("swipper-new-products");

newProducts.forEach((element) => {
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
  productPrice.innerText = `A partir de: ${formatCurrency(element.price)}`;

  const productLink = document.createElement("a");
  productLink.classList.add("product-link");
  productLink.innerText = "Ver na loja";
  productLink.href = element.link;
  productLink.target = "_blank";

  swiperSlide.appendChild(productImage);
  swiperSlide.appendChild(productName);
  swiperSlide.appendChild(productPrice);
  swiperSlide.appendChild(productLink);
  swipper.appendChild(swiperSlide);
});
