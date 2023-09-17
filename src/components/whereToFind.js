class WhereToFind extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="where-to-find">
        <header>
          <h2 class="where-to-find-title">Onde nos encontrar</h2>
        </header>

        <main>
          <div class="where-to-find-maps-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.557285965832!2d-51.1900695!3d-30.020865999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979ce285f8dd3%3A0x6570eb4d29b757e1!2sGERMANO%20508%20-%20OFFICECONCEPT!5e0!3m2!1spt-BR!2sbr!4v1694956837217!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              id="map-porto-alegre"
              class="where-to-find-map active"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.2265898917967!2d-49.29205970980965!3d-25.43068703629817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3f1a957b2b9%3A0x9779f226a731d7bd!2sAv.%20C%C3%A2ndido%20Hartmann%2C%20590%20-%20Merc%C3%AAs%2C%20Curitiba%20-%20PR%2C%2080710-570!5e0!3m2!1spt-BR!2sbr!4v1694957266544!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              id="map-curitiba"
              class="where-to-find-map"
            ></iframe>
          </div>
          <div class="where-to-find-locations-name">
            <ul>
              <li>
                <button
                  type="button"
                  id="btn-porto-alegre"
                  class="where-to-find-btn active"
                >
                  Porto Alegre
                </button>
              </li>
              <li>
                <button type="button" id="btn-curitiba" class="where-to-find-btn">
                  Curitiba
                </button>
              </li>
            </ul>
          </div>
        </main>
      </section>
    `;

    const btnPortoAlegre = this.querySelector("#btn-porto-alegre");
    const btnCuritiba = this.querySelector("#btn-curitiba");
    const mapPortoAlegre = this.querySelector("#map-porto-alegre");
    const mapCuritiba = this.querySelector("#map-curitiba");

    btnPortoAlegre.addEventListener("click", () => {
      mapPortoAlegre.classList.add("active");
      mapCuritiba.classList.remove("active");

      btnPortoAlegre.classList.add("active");
      btnCuritiba.classList.remove("active");
    });

    btnCuritiba.addEventListener("click", () => {
      mapCuritiba.classList.add("active");
      mapPortoAlegre.classList.remove("active");

      btnCuritiba.classList.add("active");
      btnPortoAlegre.classList.remove("active");
    });
  }
}

customElements.define("where-to-find-component", WhereToFind);
