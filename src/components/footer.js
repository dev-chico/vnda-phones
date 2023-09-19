class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <main class="footer-content">
          <a href="#" class="footer-logo">
            <i class="fa-solid fa-mobile-screen"></i>
            vPhones
          </a>
          <nav class="footer-nav">
            <ul>
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
              <li><a href="#">Item 4</a></li>
            </ul>
          </nav>

          <div class="footer-socials">
            <ul>
              <li class="footer-socials-item">
                <i class="fa-brands fa-instagram"></i>
                <a href="https://www.instagram.com/vndaecommerce/" target="_blank">Instagram</a>
              </li>
              <li class="footer-socials-item">
                <i class="fa-brands fa-facebook"></i>
                <a href="https://www.facebook.com/vndaecommerce" target="_blank">Facebook</a>
              </li>
            </ul>
          </div>
        </main>

        <p class="footer-info">@Vnda Phones / CNPJ: 00.000.000/0001-00</p>
      </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
