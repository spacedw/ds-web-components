import {css, html, LitElement} from 'https://unpkg.com/lit?module';

const defaultData = [
  {
    section: 'Transparencia',
    icon: 'flat-sms',
    description: 'El valor de nuestras actitudes se refleja en la credibilidad, confianza y transparencia de las acciones. El impacto financiero, social y ambiental tiene consecuencias para todos, incluyendo a la sociedad como un todo.',
    image: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/transparencia6cac404a9b5847888d00c50f371c8a64.png?sfvrsn=32f407a6_2',
    symbol: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/transparencia.png?sfvrsn=fd5b3066_2',
    type: 'transparencia',
  },
  {
    section: 'Comunidad',
    icon: 'flat-heart',
    description: 'Queremos dar soluciones concretas de salud, prevención y bienestar a la comunidad y grupos vulnerables del país, para que tengan acceso a una salud oportuna y de calidad. Por eso, nos comprometemos a seguir atendiendo bajo los más altos estándares profesionales.',
    image: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/comunidadee495ec6b4bb499e820f2c9bc275efb7.png?sfvrsn=76f217ef_2',
    symbol: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/comunidad.png?sfvrsn=759f659_2',
    type: 'comunidad',
  },
  {
    section: 'Huella ambiental',
    icon: 'flat-environmental',
    description: 'Estamos comprometidos con la preservación del medioambiente y la promoción de su cuidado. Buscamos prevenir y minimizar las externalidades e impactos ambientales inherentes a nuestras operaciones.',
    image: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/huella.png?sfvrsn=6083fea6_2',
    symbol: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/huella-ambiental.png?sfvrsn=a58b21b4_2',
    type: 'huellaambiental',
  },
  {
    section: 'Diversidad e inclusión',
    icon: 'flat-sex',
    description: 'Queremos ofrecer un ambiente de trabajo saludable, inclusivo, próspero y generador de desarrollo y bienestar. Para eso, adoptamos buenas prácticas de promoción, salud, seguridad y diversidad.',
    image: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/diversidadbcf10522aa0f41ff95dafbb1641b1719.png?sfvrsn=edfe44c4_2',
    symbol: 'https://d51h1y0hva8v.cloudfront.net/images/default-source/home/desafio-alemana/diversidad.png?sfvrsn=6372c8ec_2',
    type: 'diversidadeinclusion',
  },

]

const defaultItems = [
  {
    "titulo": "Política de sostenibilidad",
    "icono": "flat-download",
    "descripcion": "Conoce en detalle los principios, estrategias y lineamientos de carácter social, ambiental y organizacional que rigen nuestro compromiso sostenible.",
    "link": "#",
    "tipo": "transparencia"
  },
  {
    "titulo": "Saber más sobre el proceso de cumplimiento",
    "icono": "flat-ticket",
    "descripcion": "En la clínica seguimos un cuidadoso análisis de nuestros diferentes ámbitos de acción.",
    "link": "#",
    "tipo": "transparencia"
  },
  {
    "titulo": "Conoce gobierno corporativo",
    "icono": "flat-check",
    "descripcion": "Clínica Alemana de Santiago S.A. fue creada como filial de la Sociedad de Beneficencia Hospital Alemán, corporación de derecho privado sin fines de lucro.",
    "link": "#",
    "tipo": "transparencia"
  },
  {
    "titulo": "Reportes de Sostenibilidad",
    "icono": "flat-environmental",
    "descripcion": "Conoce todos los reportes que tenemos disponibles.",
    "link": "#",
    "tipo": "transparencia"
  },
  {
    "titulo": "Programa Confuturo",
    "icono": "flat-profileOn",
    "descripcion": "Contamos con 6 personas del <a href=\"/\">programa de inclusión y formación ConFuturo</a>, desarrollado en conjunto con la <a href=\"/\">Fundación ConTrabajo.</a>",
    "link": "#",
    "tipo": "diversidadeinclusion"
  },
  {
    "titulo": "Co-creación de política y modelo de diversidad e inclusión",
    "icono": "flat-safety",
    "descripcion": "Este año empezamos este proceso de trabajo colaborativo.",
    "link": "#",
    "tipo": "diversidadeinclusion"
  },
  {
    "titulo": "Desarrollo profesional",
    "icono": "flat-identification",
    "descripcion": "Fomentamos una cultura de aprendizaje para el progreso de nuestros colaboradores, a través de programas de formación,",
    "link": "#",
    "tipo": "diversidadeinclusion"
  },
  {
    "titulo": "Programas de desarrollo personal, autocuidado y contención",
    "icono": "flat-addUser",
    "descripcion": "Incrementamos la participación de nuestros colaboradores en programas de bienestar físico y mental.",
    "link": "#",
    "tipo": "diversidadeinclusion"
  },
  {
    "titulo": "Colaboradores",
    "icono": "flat-star",
    "descripcion": "Actualmente, somos más de 4500 colaboradores en todas nuestras sucursales, de los cuales, 75% son mujeres.",
    "link": "#",
    "tipo": "diversidadeinclusion"
  },
  {
    "titulo": "Gestión de residuos hasta el 2021",
    "icono": "flat-environmental",
    "descripcion": "155 toneladas recicladas de papeles, metales, plumavit, plásticos PET, maderas, entre otros.",
    "link": "#",
    "tipo": "huellaambiental"
  },
  {
    "titulo": "Eficiencia energética e hídrica",
    "icono": "flat-lightbulb",
    "descripcion": "Disminuimos en un 69% nuestra huella de carbono, en comparación al 2017.",
    "link": "#",
    "tipo": "huellaambiental",
    "imgIcon": "https://d51h1y0hva8v.cloudfront.net/images/default-source/preventiva/tu-sucursal-mas-cercana9d99ee864f114dd2be03ed2cc5031733.png?sfvrsn=cb737b0d_1"
  },
  {
    "titulo": "Reforestando los bosques de Chile",
    "icono": "flat-trash",
    "descripcion": "Ya son más de 32.000 árboles nativos plantados a lo largo del país, junto a la <a href=\"/\">Fundación Reforestemos</a> por el nacimiento de niños y niñas en nuestra maternidad.",
    "link": "",
    "tipo": "huellaambiental"
  },
  {
    "titulo": "Corporación Chileno Alemana de Beneficencia:",
    "icono": "flat-heart",
    "descripcion": "ya son más de 56 mil personas del sistema público que se han atendido de forma gratuita, desde el 2002.",
    "link": "#",
    "tipo": "comunidad"
  },
  {
    "titulo": "Centro de extensión",
    "icono": "flat-youtube",
    "descripcion": "Nuestra área de educación donde encuentras charlas, podcast, videos, etc., y aprender sobre el cuidado de la salud y bienestar.",
    "link": "#",
    "tipo": "comunidad"
  },
  {
    "titulo": "1000 personas, 1000 soluciones de salud",
    "icono": "flat-homeApp",
    "descripcion": "Nuestro desafío al 2023. Para dar acceso a salud oportuna y de excelencia a 1000 personas que viven en contextos de vulnerabilidad.",
    "link": "#",
    "tipo": "comunidad"
  }
]
const globalItems = window.desafioAlemana || defaultItems
console.log("sostenibilidad", globalItems)

const styles = css`
  :host {
    display: block;
  }

  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #FFFFFF;
    color: #203442;
  }
  .container[data-theme=dark] {
    background: #364855;
    color: #FFFFFF;
  }
  .container[data-theme=dark] .innerContainer .content .nav ul li {
    color: #4D5D68;
  }
  .container[data-theme=dark] .innerContainer .content .nav ul li.active {
    background: transparent;
    color: #FFFFFF;
  }
  .container .innerContainer {
    max-width: 1264px;
    padding: 90px 32px;
    flex: 1;
  }
  .container .innerContainer ul, .container .innerContainer li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .container .innerContainer .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
    margin-bottom: 100px;
  }
  .container .innerContainer .content {
    display: flex;
  }
  .container .innerContainer .content .nav {
    padding: 12px 32px;
    border-right: 1px solid #F2F5F9;
  }
  .container .innerContainer .content .nav ul {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .container .innerContainer .content .nav ul li {
    background: #FFFFFF;
    border: 1px solid #E9EBEC;
    border-radius: 20px;
    padding: 0 16px;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    --eloisa-ds-icon-color: currentColor;
    transition: 200ms ease-in-out;
  }
  .container .innerContainer .content .nav ul li.active {
    background: #857BE2;
    color: #FFFFFF;
  }
  .container .innerContainer .content .main {
    padding: 12px 32px;
  }
  .container .innerContainer .content .main .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 470px;
  }
  .container .innerContainer .content .main .info .left {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .container .innerContainer .content .main .info .left .icon {
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background: #857BE2;
    display: flex;
    align-items: center;
    justify-content: center;
    --eloisa-ds-icon-color: #FFFFFF;
  }
  .container .innerContainer .content .main .info .left .icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: high-quality;
  }
  .container .innerContainer .content .main .info .graph {
    display: flex;
    align-items: center;
  }
  .container .innerContainer .content .main .info .graph .image {
    display: flex;
    position: relative;
    width: 100%;
    height: 360px;
    margin: 28px 28px 0 0;
  }
  .container .innerContainer .content .main .info .graph .image:after {
    z-index: 0;
    content: "";
    position: absolute;
    top: -18px;
    left: 26px;
    width: 100%;
    height: 120%;
    border: 1px solid #DCD9F7;
    border-radius: 0 300px 300px 300px;
  }
  .container .innerContainer .content .main .info .graph .image img {
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 300px 300px 300px;
  }
  .container .innerContainer .content .main .actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }
  .container .innerContainer .content .main .actions .wrappedList {
    box-shadow: 0 5.91133px 28.8515px rgba(0, 0, 0, 0.0278145), 0px 2.53302px 19.9272px rgba(0, 0, 0, 0.0221855), 0px 0.80216px 13.4997px rgba(0, 0, 0, 0.0155009);
    border-radius: 8px;
    max-width: 856px;
    display: grid;
    grid-template-columns: 1fr 74px;
  }
  .container .innerContainer .content .main .actions .wrappedList .buttons {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #F2F5F9;
  }
  .container .innerContainer .content .main .actions .list {
    position: relative;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .card {
    display: flex;
    gap: 12px;
    padding: 24px;
    border-right: 1px solid #F2F5F9;
    min-width: 391px;
    scroll-snap-align: start;
    cursor: pointer;
    background: #FFFFFF;
    transition: 200ms ease-in-out;
  }
  .card:last-child {
    border-right: none;
  }
  .card:hover {
    background: #EEECFB;
  }
  .card:active {
    background: #DCD9F7;
  }
  .card .icon {
    width: 48px;
    height: 48px;
    min-width: 48px;
    border-radius: 50%;
    background: #857BE2;
    display: flex;
    align-items: center;
    justify-content: center;
    --eloisa-ds-icon-color: #FFFFFF;
    color: #FFFFFF;
  }
  .card .textContent {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .card a {
    color: currentColor;
  }

  .button {
    width: 48px;
    height: 48px;
    background-color: #FFFFFF;
    box-shadow: 0 14px 20px rgba(227, 229, 232, 0.6);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    --eloisa-ds-icon-color: currentColor;
    cursor: pointer;
  }

  [data-theme=dark] .card {
    background: #364855;
    color: #FFFFFF;
  }
  [data-theme=dark] .card:hover {
    background: #4D5D68;
  }
  [data-theme=dark] .button {
    background-color: #4D5D68;
    box-shadow: initial;
    color: #FFFFFF;
    --eloisa-ds-icon-color: #FFFFFF;
  }

  @media (max-width: 1024px) {
    .container .innerContainer {
      padding: 32px 16px;
    }
    .container .innerContainer .top {
      text-align: initial;
      margin: 16px 0;
      align-items: start;
      max-width: calc(100vw - 32px);
    }
    .container .innerContainer .content {
      flex-direction: column;
      gap: 40px;
    }
    .container .innerContainer .content .nav {
      padding: 0;
      border-right: initial;
    }
    .container .innerContainer .content .nav ul {
      width: 100%;
      display: flex;
      flex-direction: initial;
      flex-wrap: wrap;
    }
    .container .innerContainer .content .main {
      padding: 0;
    }
    .container .innerContainer .content .main .info {
      gap: 40px;
      min-height: initial;
    }
    .container .innerContainer .content .main .info .left {
      padding: 24px;
    }
    .container .innerContainer .content .main .info .graph svg {
      max-width: 86%;
      height: 380px;
    }
    .container .innerContainer .content .main .info .graph .image {
      width: 96%;
      height: 300px;
      margin: 24px 0 0 0;
    }
    .container .innerContainer .content .main .actions {
      margin-top: 24px;
    }
    .container .innerContainer .content .main .actions .wrappedList {
      width: calc(100vw - 32px);
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-shadow: initial;
      max-width: initial;
    }
    .container .innerContainer .content .main .actions .wrappedList .list {
      box-shadow: 0 5.91133px 28.8515px rgba(0, 0, 0, 0.0278145), 0px 2.53302px 19.9272px rgba(0, 0, 0, 0.0221855), 0px 0.80216px 13.4997px rgba(0, 0, 0, 0.0155009);
    }
    .container .innerContainer .content .main .actions .wrappedList .buttons {
      justify-content: end;
      gap: 12px;
      border-left: initial;
    }
    .button {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 768px) {
    .container .innerContainer .content .main .info {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .container .innerContainer .content .main .wrappedList .list {
      margin-bottom: 16px;
    }
    .container .innerContainer .content .main .wrappedList .buttons {
      display: none !important;
    }
    .card {
      min-width: 100%;
    }
  }
`;

class Sostenibilidad extends LitElement {
  static styles = styles;

  constructor() {
    super();
    this.selected = 0;
    this.data = defaultData[0];
    this.items = [];
    this.disabledPrev = true;
    this.disabledNext = false;
  }

  static get properties() {
    return {
      theme: {type: String},
    };
  }

  handleSelect(index) {
    this.selected = index;
    this.data = defaultData[index];
    this.handleItems()
  }

  handleItems(){
    this.items = globalItems.filter(item => item.tipo === this.data.type);
    this.requestUpdate();
  }
  firstUpdated() {
    this.handleItems()
    const list = this.shadowRoot.querySelector('.list');
    const buttons = this.shadowRoot.querySelector('cas-actions-nav');
    const arrowRight = this.shadowRoot.querySelector('#buttonAR');
    list.addEventListener("scroll", () => {
      const {scrollLeft, scrollWidth, clientWidth} = list;
      this.disabledPrev = scrollLeft === 0;
      this.disabledNext = scrollLeft + clientWidth >= scrollWidth;
      this.requestUpdate();
    });
    arrowRight.addEventListener("click", () => {
      list.scrollLeft += 400;
    });
    buttons.addEventListener("clickLeft", () => {
      const {scrollLeft} = list;
      list.scrollTo({
        left: scrollLeft - 200,
        behavior: 'smooth'
      });
    });
    buttons.addEventListener("clickRight", () => {
      const {scrollLeft} = list;
      list.scrollTo({
        left: scrollLeft + 200,
        behavior: 'smooth'
      });
    });
  }

  render() {
    const {data, items, theme, disabledPrev, disabledNext} = this;
    const listNavs = defaultData.map((item, index) => html`
      <li class=${this.selected === index ? 'active' : ''} @click=${()=> this.handleSelect(index)}>
          <cas-icon name=${item.icon} size="20"></cas-icon>
        <cas-text variant="body2">${item.section}</cas-text>
      </li>`)

    const listItems = items.map((item) => html`
        <article class="card">
            <div class="icon">
                <cas-icon name="${item.icono}" size="24"></cas-icon>
            </div>
            <div class="textContent">
                <cas-text variant="body2">${item.titulo}</cas-text>
                <cas-text variant="caption2">${item.descripcion}</cas-text>
            </div>
        </article>
    `)
    return html`
        <section class="container" data-theme=${theme}>
            <div class="innerContainer">
                <div class="top">
                    <cas-text variant="display1" mobilevariant="m-headline1">Sostenibilidad</cas-text>
                    <cas-text variant="headline4" mobilevariant="m-body1">Conoce #DesafíoAlemana y las diversas iniciativas que hemos implementado para promover un mundo sostenible y saludable.</cas-text>
                </div>
                <div class="content">
                    <aside class="nav">
                        <ul>
                            ${listNavs}
                        </ul>
                    </aside>
                    <div class="main">
                        <div class="info">
                            <div class="left">
                                <div class="icon">
                                    <img src="https://res.cloudinary.com/spacexdw/image/fetch/f_auto,q_100,w_100,h_100/${data.symbol}" alt=${data.section}/>
                                </div>
                                <cas-text variant="headline2">${data.section}</cas-text>
                                <cas-text variant="headline5">${data.description}</cas-text>
                            </div>
                            <div class="graph">
                                <div class="image">
                                    <img src="https://res.cloudinary.com/spacexdw/image/fetch/f_auto,q_100,w_420,h_360,c_fill/${data.image}" alt=${data.section}/>
                                </div>
                            </div>
                        </div>
                        <div class="actions">
                            <cas-text variant="headline3">Nuestras acciones:</cas-text>
                            <div class="wrappedList">
                                <div class="list">
                                    ${listItems}
                                </div>
                                <div class="buttons">
                                    <button class="button next" id="buttonAR">
                                        <cas-icon name="flat-arrowRight" size="20"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <cas-actions-nav disabledLeft=${disabledPrev} disabledRight=${disabledNext}></cas-actions-nav>
                    </div>
                </div>
            </div>
        </section>
    `;
  }
}

customElements.define('cas-sostenibilidad', Sostenibilidad);
