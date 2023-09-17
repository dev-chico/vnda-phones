class Newsletter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="newsletter" id="newsletter">
        <div class="newsletter-infos">
          <h2>
            <i class="fa-solid fa-envelope-circle-check"></i>
            Receba as novidades
          </h2>
          <p>Inscreva-se e receba as novidades no seu e-mail.</p>
        </div>

        <form>
          <div class="newsletter-form-group">
            <input type="email" placeholder="Insira seu e-mail" class="newsletter-input">
            <button class="newsletter-button" type="button">Assinar agora</button>
          </div>

          <div class="newsletter-form-group">
            <input type="checkbox" class="newsletter-checkbox" id="newsletter-check">
            <label class="newsletter-checkbox-label" for="newsletter-check">Concordo em receber comunicações</label>
          </div>
        </form>
      </section>
    `;
  }
}

customElements.define("newsletter-component", Newsletter);
