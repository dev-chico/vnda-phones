class CustomerFeedback extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="customer-feedback">
        <div class="customer-feedback-img">
          <img
            src="https://scontent.fcac3-1.fna.fbcdn.net/v/t39.30808-6/278976744_1811720649032055_3475664988870548839_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeGezISwsI3ptY-LE0LQ7Wbe19g3nXQ8Qj3X2DeddDxCPREXjzdDUJu3sodpzBdECi81wh-VjC4ukM7bOOqqT9wh&_nc_ohc=kivNzHJmmG0AX9gOIV3&_nc_ht=scontent.fcac3-1.fna&oh=00_AfA50rQ8At1BYAMjUaF00TLdqeEVU2z3pBrGfw8_NHDVBA&oe=650C9BC0"
            alt="Foto do cliente Luis Antonio de Souza Silva"
          />
          <i class="fa-solid fa-message"></i>
        </div>

        <main class="customer-feedback-content">
          <p class="customer-feedback-text">
            ‘’Sua solicitude e seu profissionalismo me fizeram confiar em você
            logo de cara e ainda bem que confiei. Muito obrigado por me fazer
            economizar dinheiro importando esses produtos com você, meu setup
            agora ficou mais organizado e mais profissional, isso sim é qualidade
            de vida e aumento na minha produtividade.’’
          </p>

          <h3 class="customer-feedback-name">Luis Antonio de Souza Silva</h3>

          <footer>
            <div class="customer-feedback-info">
              <span>Produtos adquiridos:</span>
              <h4 class="purple">iPad Pro & Keychron k2</h4>
            </div>

            <div class="customer-feedback-info">
              <span>Economia de:</span>
              <h4 class="green">R$ 2.422,00</h4>
            </div>
          </footer>
        </main>
      </section>
    `;
  }
}

customElements.define("customer-feedback-component", CustomerFeedback);
