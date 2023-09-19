class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <a href="#" class="header-logo">vPhones</a>
        <nav class="header-nav">
          <ul>
            <li><a href="#new-products">Produtos</a></li>
            <li><a href="#whereToFind">Onde nos encontrar</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
