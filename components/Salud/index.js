import { LitElement, html, css } from "https://unpkg.com/lit?module";
import { unsafeHTML } from "https://cdn.jsdelivr.net/npm/lit-html@2.6.1/directives/unsafe-html.js";
const defaultNews = [
  {
      "title": "Conoce los distintos tipos de alopecia",
      "summary": "La caída del pelo puede darse por distintas causas. Conoce las distintas variantes de esta patología.",
      "publicationDate": "27/02/2023",
      "navigateUrl": "https://www.clinicaalemana.cl/new-home/2023/conoce-los-distintos-tipos-de-alopecia",
      "readingTime": "1",
      "photo": "https://d51h1y0hva8v.cloudfront.net/images/default-source/art%C3%ADculos/clinica-alemana-noticia-alopecia.jpg?sfvrsn=56dc6a76_1",
      "categories": [
          {
              "title": "Dermatología",
              "url": "https://www.clinicaalemana.cl/articulos/todas-las-noticias/dermatolog&#237;a"
          }
      ]
  },
  {
      "title": "Alonso: su primer accidente en el hogar",
      "summary": "En noviembre del año pasado Alonso sufrió un accidente en su hogar que podría haber sido muy grave.  Conoce su historia y ten en cuenta qué cosas debes prevenir en tu día a día. \n\n﻿",
      "publicationDate": "24/02/2023",
      "navigateUrl": "https://www.clinicaalemana.cl/new-home/2023/alonso-su-primer-accidente-en-el-hogar",
      "readingTime": "2",
      "photo": "https://d51h1y0hva8v.cloudfront.net/images/default-source/art%C3%ADculos/babymom.jpg?sfvrsn=40077c35_1",
      "categories": [
          {
              "title": "Testimonio",
              "url": "https://www.clinicaalemana.cl/articulos/todas-las-noticias/testimonio"
          }
      ]
  },
  {
      "title": "Norovirus: ¿qué es y cómo prevenirlo?",
      "summary": "Actualmente, este virus es la causa más común de brotes de gastroenteritis. Se da, en su mayor parte en comunidades cerradas como escuelas, cruceros, asilos.",
      "publicationDate": "22/02/2023",
      "navigateUrl": "https://www.clinicaalemana.cl/new-home/2023/norovirus-que-es-y-como-prevenirlo",
      "readingTime": "1",
      "photo": "https://d51h1y0hva8v.cloudfront.net/images/default-source/art%C3%ADculos/gettyimages-1225157999-(1)-(1).jpg?sfvrsn=46eeb519_1",
      "categories": [
          {
              "title": "Síntomas y enfermedades",
              "url": "https://www.clinicaalemana.cl/articulos/todas-las-noticias/s&#237;ntomas-y-enfermedades"
          }
      ]
  },
  {
      "title": "Tenis: ¿cuáles son las lesiones más frecuentes?",
      "summary": "En el marco del próximo ranking ATP de Santiago 2023, los especialistas de Alemana Sport te explican cuáles son las lesiones más comunes y cómo prevenirlas.",
      "publicationDate": "20/02/2023",
      "navigateUrl": "https://www.clinicaalemana.cl/new-home/2023/tenis-cuales-son-las-lesiones-mas-frecuentes",
      "readingTime": "1",
      "photo": "https://d51h1y0hva8v.cloudfront.net/images/default-source/art%C3%ADculos/articulo_tenis640854ed197947bb86ac8a56d9dc2f65.jpg?sfvrsn=f7711333_0",
      "categories": [
          {
              "title": "Actividad física y deportes",
              "url": "https://www.clinicaalemana.cl/articulos/todas-las-noticias/actividad-f&#237;sica-y-deportes"
          }
      ]
  },
]
const news = window.news || defaultNews;
const styleCasNews = css`
  :host {
    display: block;
  }
  .cas-news {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #203442;
  }
  .inner-wrapped {
    max-width: 1264px;
    padding: 90px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .top {
    padding-bottom: 42px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .filters {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    gap: 12px;
    width: calc(100vw - 64px);
    max-width: 1264px;
    white-space: nowrap;
    padding: 0 32px;
  }
  .tag {
    background: #ffffff;
    border: 1px solid #dcd9f7;
    border-radius: 100px;
    padding: 8px 12px;
    color: #5143d5;
    cursor: pointer;
    scroll-snap-align: left;
  }
  .tag.active {
    background: #857be2;
    color: #ffffff;
  }
  .head {
    display: none;
  }
  .list {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    max-width: 1264px;
    padding: 0 32px 32px;
  }
  .bottom {
    display: flex;
    justify-content: end;
    gap: 12px;
    align-items: center;
    padding: 0 32px;
  }
  .bottom button {
    background: #4DBFB8;
    border-radius: 50%;
    border: none;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    --eloisa-ds-icon-color: currentColor;
    color: #ffffff;
  }
  button:disabled {
    background: #E9EBEC;
    color: #909AA1;
  }
  .bottom.hidden {
    display: none;
  }
  @media (max-width: 1024px) {
    .cas-news {
      border-bottom: 1px solid #f2f2f2;
    }
    .inner-wrapped {
      padding: 32px 0;
    }
    .top {
      text-align: initial;
      gap: 4px;
      padding: 0 16px;
    }
    .filters {
      padding: 0 16px;
      flex-wrap: wrap;
      gap: 8px 12px;
      margin-top: 20px;
      margin-bottom: 4px;
    }
    .head {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      gap: 32px;
    }
    .head a{
      color: currentColor;
    }
    .list {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      gap: 24px;
      width: calc(100vw - 32px);
      padding: 0 16px 16px;
    }
    .bottom button {
      height: 24px;
      width: 24px;
    }
  }
  @media (max-width: 768px) {
    .filters {
      margin-top: 16px;
      margin-bottom: 28px;
    }
  }
`;

class CasSalud extends LitElement {
  static styles = styleCasNews;
  static get properties() {
    return {
      name: { type: String },
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Titulo";
    this.text = "Texto";
    this.filters = [];
    this.data = [];
    this.selected = {};
    this.list = [];
  }

  connectedCallback() {
    super.connectedCallback();
    const modifiedKeys = news.map((item) => {
      const { title, summary, publicationDate, navigateUrl, readingTime, photo, categories } = item;
      return {
        image: photo,
        tags: categories,
        title,
        datePublished: publicationDate,
        readingTime: readingTime,
        description: summary,
        url: navigateUrl,
      };
    });
    console.log({modifiedKeys})
    this.data = modifiedKeys;

    const allFilters = [];
    modifiedKeys.forEach((item) => {
      item.tags.forEach((tag) => {
        const hasInArray = allFilters.find((filter) => filter.title === tag.title);
        if (!hasInArray) {
          allFilters.push(tag);
        }
      });
    });
    allFilters.unshift({ title: "Últimas agregadas" });
    this.filters = allFilters;
    this.handleFilterClick(allFilters[0]);
  }

  handleFilterClick(filter) {
    this.selected = filter;
    if (filter.title === "Últimas agregadas") {
      this.list = this.data.slice(0, 6);
      this.requestUpdate();
      return;
    }
    const filterList = this.data.filter((item) => {
      const hasInArray = item.tags.find((tag) => tag.title === filter.title);
      return hasInArray;
    });
    this.list = filterList;
    this.requestUpdate();
  }

  render() {
    const { name, text, filters, list, selected } = this;
    const isMobile = window.innerWidth < 768;
    const handleNavigation = (direction = "next") => {
      const list = this.shadowRoot.querySelector(".list");
      const actions = this.shadowRoot.querySelectorAll(".bottom button");
      console.log(actions);
      const move = isMobile ? 260 : 400;
      const scroll = list.scrollLeft;
      const maxScroll = list.scrollWidth - list.clientWidth;

      function disableButton() {
        const next = actions[1];
        const prev = actions[0];
        const isNext = direction === "prev" ? true : scroll + move < maxScroll;
        const isPrev = direction === "prev" ? scroll - move > 0 : true;
        console.log({ isNext, isPrev })
        if (isNext) {
          next.removeAttribute("disabled");
        }
        if (isPrev) {
          prev.removeAttribute("disabled");
        }
        if (!isNext) {
          next.setAttribute("disabled", true);
        }
        if (!isPrev) {
          prev.setAttribute("disabled", true);
        }
      }
      
      if (direction === "next") {
        list.scrollLeft = scroll + move < maxScroll ? scroll + move : maxScroll;
        disableButton();
      }
      if (direction === "prev") {
        list.scrollLeft = scroll - move > 0 ? scroll - move : 0;
        disableButton();
      }
    };
    const renderFilters = filters.map(
      (filter) => html`<button
        class="tag ${filter.title === this.selected.title ? "active" : ""}"
        title="${filter.title}"
        @click="${() => this.handleFilterClick(filter)}"
      >
        <cas-text variant="caption1">${filter.title}</cas-text>
      </button> `
    );
    const renderList = list
      .slice(0, 9)
      .map(
        (item) =>
          html`<cas-salud-card
            title="${item.title}"
            description="${item.description}"
            image="${item.image}"
            tags="${JSON.stringify(item.tags)}"
            datePublished="${item.datePublished}"
            readingTime="${item.readingTime}"
          ></cas-salud-card>`
      );

      const isScrollable = isMobile ? list.length > 1 : list.length > 3;
    return html`
      <section class="cas-news">
        <div class="inner-wrapped">
          <div class="top">
            <cas-text variant="display1" mobileVariant="m-headline1">${name}</cas-text>
            <cas-text variant="headline4" mobileVariant="m-body1">${text}</cas-text>
          </div>
          <div class="filters">${renderFilters}</div>
          <div class="head">
            <cas-text variant="footnote1">${selected?.title}</cas-text>
            <a href="${selected?.url}">
              <cas-text variant="footnote2-link">Ver todas</cas-text>
            </a>
          </div>
          <div class="list">${renderList}</div>
          <div class="bottom ${isScrollable ?'' : 'hidden'}">
            <button disabled @click="${() => handleNavigation("prev")}">
              <cas-icon name="flat-arrowLeft"></cas-icon>
            </button>
            <button @click="${() => handleNavigation("next")}">
              <cas-icon name="flat-arrowRight"></cas-icon>
            </button>
          </div>
        </div>
      </section>
    `;
  }
}

const styleNewsCard = css`
  :host {
    display: flex;
  }
  .news-card {
    flex: 1;
    background: #ffffff;
    box-shadow: 0px 30px 44px rgba(200, 200, 200, 0.25);
    border-radius: 20px;
    padding: 24px 24px 48px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-decoration: none;
    scroll-snap-align: center;
    min-width: 340px;
    max-width: 358px;
  }
  .image {
    width: 100%;
    aspect-ratio: 1.5 / 1;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .tags {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  .tag {
    background: #E6F6F5;
    padding: 8px 12px;
    color: #4DBFB8;
    cursor: pointer;
    border: none;
  }
  .tag.active {
    background: #857be2;
    color: #ffffff;
  }
  a {
    color: currentColor;
  }

  @media (max-width: 1024px) {
    .news-card {
      padding: 0;
      box-shadow: initial;
      min-width: 270px;
      border-radius: 0;
      gap: 8px;
      scroll-snap-align: center;
    }
    .image {
      aspect-ratio: 16 / 9;
    }
    .tags {
      display: none;
    }
    .content {
      gap: 8px;
    }
    .description {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .news-card {
      min-width: 260px;
    }
  }
`;

class CasSaludCard extends LitElement {
  static styles = styleNewsCard;
  static get properties() {
    return {
      image: { type: String },
      tags: { type: Array },
      title: { type: String },
      datePublished: { type: String },
      readingTime: { type: String },
      description: { type: String },
      url: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Titulo";
    this.description = 'Descripcion <a href="https://www.google.com">link</a>';
    this.image =
      "https://res.cloudinary.com/spacexdw/image/upload/e_blur:100,w_400,h_400,c_fill/cld-sample.jpg";
    this.tags = [];
    this.datePublished = "2020-01-01";
    this.readingTime = "5";
  }

  render() {
    const { title, description, image, tags, datePublished, readingTime, url } =
      this;
    const tagsHtml = tags.slice(0,9).map(
      (tag) => html`<button class="tag">
        <cas-text variant="caption1">${tag.title}</cas-text>
      </button> `
    );
    const descriptionHtml = unsafeHTML(description);
    return html`
      <a class="news-card" href="${url}" target="_blank">
        <div class="image">
          <img src="${image}" alt="${title}" />
        </div>
        <div class="content">
          <div class="tags">${tagsHtml}</div>
          <cas-text variant="headline2" mobileVariant="m-caption1">${title}</cas-text>
          <cas-text variant="footnote2" mobileVariant="m-caption2">${datePublished} | ${readingTime} min lectura</cas-text>
        </div>
        <cas-text class="description" variant="footnote2">${descriptionHtml}</cas-text>
      </a>
    `;
  }
}
customElements.get("cas-salud") || customElements.define("cas-salud", CasSalud);
customElements.get("cas-salud-card") ||
  customElements.define("cas-salud-card", CasSaludCard);
