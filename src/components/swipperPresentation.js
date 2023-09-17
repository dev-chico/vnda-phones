class swipperPresentation extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <script>
        const swiper = new Swiper(".swiper-presentation", {
          slidesPerView: 5,
          spaceBetween: 20,
          freeMode: true,
        });
      </script>
      <div class="swiper swiper-presentation">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/presentation/image-1-min.png" alt="Imagem 1" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-2-min.png" alt="Imagem 2" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-3-min.png" alt="Imagem 3" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-4-min.png" alt="Imagem 3" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-5-min.png" alt="Imagem 3" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-1-min.png" alt="Imagem 1" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-2-min.png" alt="Imagem 2" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-3-min.png" alt="Imagem 3" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-4-min.png" alt="Imagem 3" />
          </div>
          <div class="swiper-slide">
            <img src="./images/presentation/image-5-min.png" alt="Imagem 3" />
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("swipper-presentation-component", swipperPresentation);
