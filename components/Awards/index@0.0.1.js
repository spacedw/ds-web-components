import {css, html, LitElement} from "https://unpkg.com/lit@2.7.1/index@0.0.1.js?module";
import { classMap } from "https://cdn.jsdelivr.net/npm/lit-html@2.6.1/directives/class-map.js";
const data = [
  {
    name: "Ranking PXI – Praxis Xperience Index",
    text: "Lideramos el sector clínicas, donde nos destacamos entre 6 instituciones de Santiago.",
    image: "https://d51h1y0hva8v.cloudfront.net/images/default-source/home/premios/pxi.png?sfvrsn=2f8477a_2"
  },
  {
    name: "Premio Nacional de Satisfacción de Clientes",
    text: "Obtuvimos distinción máxima y el primer lugar en el sector clínicas.",
    image: "https://d51h1y0hva8v.cloudfront.net/images/default-source/home/premios/procalidad.png?sfvrsn=6a6328d8_2"
  },
  {
    name: "Premio Lealtad del Consumidor Sector Clínicas",
    text: "Máximo reconocimiento entre empresas con altos niveles de lealtad y buenas experiencias de clientes.",
    image: "https://d51h1y0hva8v.cloudfront.net/images/default-source/home/premios/lealtad.png?sfvrsn=8d40e7c2_2"
  },
  {
    name: "Acreditación Joint Commission International",
    text: "Promovemos una mejora continua de la seguridad y calidad en la prevención y cuidado de la salud.",
    image: "https://d51h1y0hva8v.cloudfront.net/images/default-source/home/premios/enterprise.png?sfvrsn=3561b685_2"
  },
  {
    name: "Acreditación de Prestadores Institucionales de salud",
    text: "Cumplimos con un conjunto de estándares de calidad fijados y normados por el Ministerio de Salud.",
    image: "https://d51h1y0hva8v.cloudfront.net/images/default-source/home/premios/salud.png?sfvrsn=a54e449f_2"
  }
]
const stylesAwards = css`
  :host {
    display: block;
  }
  section {
    
  }
  .inner-wrapped {
    max-width: 1140px;
    margin: 90px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .list {
    width: 100%;
    display: flex;
    gap: 24px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    padding: 10px;
    margin-top: 40px;
  }
  .list::-webkit-scrollbar {
    width: 0;
    height: 4px;
  }

  .list::-webkit-scrollbar-track {
    background-color: #F2F5F9;
    border-radius: 5px;
  }

  .list::-webkit-scrollbar-thumb {
    background-color: #D2D6D9;
    border-radius: 5px;
  }

  .list::-webkit-scrollbar-thumb:hover {
    background-color: #5143D5;
  }
  button {
    background: #FFFFFF;
    padding: 14px 24px;
    border: 1px solid #DCD9F7;
    border-radius: 100px;
    color: #5143D5;
    margin-top: 32px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .list {
      width: calc(100% - 32px);
    }
    button {
      height: 40px;
    }
  }
`

class CasAwards extends LitElement {
  static styles = stylesAwards
  constructor() {
    super();
    this.name = "Awards";
    this.data = [];
    this.openAll = false
  }

  static get properties() {
    return {
      name: {type: String},
      text: {type: Array},
    };
  }

  handleClick() {
    const url = 'https://www.clinicaalemana.cl/nuestra-clinica/premios-y-reconocimientos'
    window.open(url, '_blank');
  }

  render() {
    const renderList = (data) => html`
      <div class="list">
        ${data.map(item => {
      const {name, text, image} = item
      return html`<cas-awards-card name="${name}" text="${text}" image="${image}"></cas-awards-card>`
    })}
      </div>
    `
    return html`
      <section>
        <div class="inner-wrapped">
          <cas-text variant="display1" mobileVariant="m-headline1">${this.name}</cas-text>
          ${renderList(data)}
          <button @click="${this.handleClick}">
            <cas-text variant="caption1">Ver todos</cas-text>
          </button>
        </div>
        
      </section>
    `;
  }
}

const stylesAwardsCard = css`
  article {
    box-shadow: 0 0 0 1px rgba(51, 68, 99, 0.06);
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 174px;
    flex: 1;
  }
  .image {
    position: relative;
    aspect-ratio: 2 / 1;
    height: 90px;
    filter: saturate(0);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .inner-text {
    display: none;
    flex-direction: column;
    gap: 12px;
  }
  .open .inner-text {
    display: flex;
  }
  .action {
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: .2s ease;
  }
  .open .image {
    filter: saturate(1);
  }
  .open .action {
    transform: rotate(180deg);
    flex: 1;
  }
`


class CasAwardsCard extends LitElement {
  static styles = stylesAwardsCard
  static get properties() {
    return {
      name: {type: String},
      text: {type: String},
      image: {type: String},
      open: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.name = "Awards";
    this.text = "Texto";
    this.image = "";
    this.open = false
  }

  handleToggle() {
    this.open = !this.open
    this.requestUpdate()
  }

  render() {
    const {name, text, image, open} = this
    const classCard = classMap({
      open: open,
    })
    return html`
      <article class="${classCard}" @click="${this.handleToggle}">
        <div class="image">
          <img src="${image}" alt="${name}"/>
        </div>
        <div class="inner-text">
          <cas-text variant="caption1">${name}</cas-text>
          <cas-text variant="caption2">${text}</cas-text>
        </div>
        <div class="action">
          <cas-icon name="flat-chevronDown" size="12"></cas-icon>
        </div>
      </article>
    `;
  }
}

customElements.get("cas-awards-card") || customElements.define("cas-awards-card", CasAwardsCard);
customElements.get("cas-awards") || customElements.define("cas-awards", CasAwards);