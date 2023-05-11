import {css, html, LitElement} from 'https://unpkg.com/lit?module';

const data = [
  {
    id: 1,
    color: "#E57373",
    title: 'Educación continua',
    text: 'Brindamos apoyo a nuestros profesionales para que se capaciten y actualicen constantemente en conocimientos y técnicas médicas.',
    url: 'https://www.clinicaalemana.cl/desarrollo-academico-e-investigacion/educacion-continua'
  },
  {
    id: 2,
    color: "#7BCFE2",
    title: 'Campo clínico',
    text: 'Velamos por el buen desarrollo de las actividades docente-asistenciales de pre y postgrado que se llevan a cabo en nuestras instalaciones.',
    url: 'https://www.clinicaalemana.cl/desarrollo-academico-e-investigacion/campo-clinico'
  },
  {
    id: 3,
    color: "#857BE2",
    title: 'Investigación',
    text: 'Fomentamos la investigación clínica a través del fortalecimiento de las competencias científicas, el respeto por las buenas prácticas, la ética y los derechos de los sujetos involucrados en la investigación.',
    url: 'https://www.clinicaalemana.cl/desarrollo-academico-e-investigacion/investigacion'
  },
  {
    id: 4,
    color: "#4DBFB8",
    title: 'Convenio internacional',
    text: 'Gestionamos y coordinamos los convenios académicos internacionales que Clínica Alemana tiene con prestigiosos centros de salud a nivel mundial.',
    url: 'https://www.clinicaalemana.cl/desarrollo-academico-e-investigacion/convenios-internacionales'
  }
];
const stylesDAI = css`
  :host {
    display: flex;
    justify-content: center;
  }

  section {
    margin: 100px 0;
  }

  [data-theme="dark"] {
    background-color: #364855;
    color: #fff;
  }

  .inner-container {
    max-width: 1200px;
    padding: 0 32px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 530px 1fr;
    align-items: center;
    gap: 48px;
  }

  .circles {
    display: flex;
    gap: 12px;
  }

  .circles span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f1f1f1;
  }

  .circles span:nth-child(1) {
    background: #E57373;
  }

  .circles span:nth-child(2) {
    background: #7BCFE2;
  }

  .circles span:nth-child(3) {
    background: #857BE2;
  }

  .circles span:nth-child(4) {
    background: #4DBFB8;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 0 64px;
  }

  .actions {
    display: flex;
    gap: 8px;
  }
  
  [data-theme="dark"] .actions {
    color: #364855;
  }

  .btn {
    background: #FFFFFF;
    border: 1px solid #000000;
    color: currentColor;
    border-radius: 30px;
    padding: 0 30px;
    height: 44px;
    gap: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  }

  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    background: #f1f1f1;
    padding: 56px 24px 24px;
    border-radius: 30px;
    gap: 12px;
    text-decoration: none;
    --eloisa-ds-icon-color: currentColor;
    box-shadow: 0 30px 40px rgba(200, 200, 200, 0.25);
  }

  .item cas-icon {
    position: absolute;
    right: 24px;
    bottom: 24px;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 116px);
    gap: 16px;
    //aspect-ratio: 1/1.15;
  }

  .item:nth-child(1) {
    grid-column: 2 / 5;
    grid-row: 2 / 5;
  }

  .item:nth-child(2) {
    grid-column: 5 / 8;
    grid-row: 1 / 4;
  }

  .item:nth-child(3) {
    grid-column: 5 / 8;
    grid-row: 4 / 7;
  }

  .item:nth-child(4) {
    grid-column: 1 / 5;
    grid-row: 5 / 7;
  }

  @media (max-width: 1024px) {
    .inner-container {
      padding: 0;
      grid-template-columns: 1fr;
      gap: 4px;
    }
    .start {
      padding: 16px;
    }
    .actions {
      display:grid;
      grid-template-columns: 1fr 1fr;
    }
    .text-content {
      padding: 24px 0 20px;
    }
    .cards {
      display: flex;
      gap: 12px;
      overflow-x: scroll;
      padding: 16px;
    }
    .item {
      grid-column: initial;
      grid-row: initial;
      padding: 62px 16px !important;
      min-width: 180px;
    }
    .item cas-icon {
      bottom: 16px;
      right: 16px;
    }
  }
`

class MyComponent extends LitElement {
  static styles = stylesDAI;

  constructor() {
    super();
    this.name = 'Props "name"';
    this.text = 'Props "text"';
  }

  static get properties() {
    return {
      theme: {type: String},
      name: {type: String},
      text: {type: String},
      urlAction1: {type: String},
      urlAction2: {type: String},
    };
  }


  render() {
    const renderItems = data.map((item) => {
      return html`
        <a class="item" href="${item.url}" target="_blank" style="background: ${item.color}">
          <cas-text variant="headline2">${item.title}</cas-text>
          <cas-text variant="footnote2" mobileVariant="m-caption2">${item.text}</cas-text>
          <cas-icon name="flat-chevronRight" size="32"></cas-icon>
        </a>
      `;
    });
    return html`
      <section data-theme="${this.theme}">
        <div class="inner-container">
          <div class="start">
            <div class="circles"><span></span><span></span><span></span><span></span></div>
            <div class="text-content">
              <cas-text variant="display2">${this.name}</cas-text>
              <cas-text variant="headline4" mobileVariant="m-body1">${this.text}</cas-text>
            </div>
            <div class="actions">
              <a class="btn" href="${this.urlAction1}" target="_blank">
                <cas-icon name="flat-youtube" size="20"></cas-icon>
                <cas-text variant="body2">Ver video</cas-text>
              </a>
              <a class="btn" href="${this.urlAction2}" target="_blank">
                <cas-text variant="body2">Más información</cas-text>
              </a>
            </div>
          </div>
          <div class="cards">
            ${renderItems}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.get('cas-dai') ||
customElements.define('cas-dai', MyComponent);
