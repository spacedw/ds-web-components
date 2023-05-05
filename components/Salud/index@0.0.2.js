import { LitElement, html, css } from "https://unpkg.com/lit?module";
import { unsafeHTML } from "https://cdn.jsdelivr.net/npm/lit-html@2.6.1/directives/unsafe-html.js";
import { classMap } from "https://cdn.jsdelivr.net/npm/lit-html@2.6.1/directives/class-map.js";
const news = window.news || [];
const styleCasNews = css`
  :host {
    display: block;
  }
  .cas-news {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    color: #203442;
  }
  .inner-wrapped {
    max-width: 1200px;
    padding: 90px 32px;
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
  .wrapped-filters {
    position: relative;
  }
  .filters {
    position: relative;
    display: flex;
    gap: 12px;
    overflow-x: auto;
    max-width: calc(100vw - 64px);
  }
  .filters::-webkit-scrollbar {
    height: 0px;
  }
  .hasPrev {
    display: none;
    width: 100px;
    height: 40px;
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    left: 0;
    z-index: 1;
  }
  .hasNext {
    display: none;
    width: 100px;
    height: 40px;
    background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    right: 0;
    top: 0;
  }
  .prev .hasPrev {
    display: block;
  }
  .next .hasNext {
    display: block;
  }
  .tag {
    background: #ffffff;
    border: 1px solid #dcd9f7;
    border-radius: 100px;
    padding: 8px 12px;
    color: #5143d5;
    cursor: pointer;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }
  .tag.active {
    background: #857be2;
    color: #ffffff;
  }
  .head {
    display: none;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .actions {
    display: none
  }
  
  @media (max-width: 1024px) {
    .cas-news {
      border-bottom: 1px solid #f2f2f2;
    }
    .inner-wrapped {
      padding: 32px 0;
      max-width: 100%;
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
  }
  @media (max-width: 768px) {
    .filters {
      margin-top: 16px;
      margin-bottom: 28px;
    }
    .actions {
      display: block;
      padding: 0 16px;
    }
    .hasPrev, .hasNext {
      display: none !important;
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
    this.disabledLeft = true;
    this.disabledRight = false;
    this.hasPrevFilter = false;
    this.hasNextFilter = true;
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

  firstUpdated() {
    const actions = this.shadowRoot.querySelector("cas-actions-nav");
    actions.addEventListener("clickLeft", () => {
      this.handleNavigation({ direction: "prev" });
    })
    actions.addEventListener("clickRight", () => {
      this.handleNavigation({ direction: "next" });
    })
    const filter = this.shadowRoot.querySelector(".filters");
    filter.addEventListener("scroll", () => {
      const {scrollLeft, scrollWidth, clientWidth } = filter;
      const maxScroll = scrollWidth - clientWidth;
      if(scrollLeft > 0) this.hasPrevFilter = true
      if(scrollLeft === 0) this.hasPrevFilter = false
      if(scrollLeft < maxScroll) this.hasNextFilter = true
      if(scrollLeft === maxScroll) this.hasNextFilter = false
      if(scrollLeft === 0 && scrollLeft === maxScroll) {
        this.hasPrevFilter = false;
        this.hasNextFilter = false;
      }
      this.requestUpdate();
    })
  }

  handleNavigation({direction}) {
    const isMobile = window.innerWidth < 768;
    const list = this.shadowRoot.querySelector(".list");
    const move = isMobile ? 260 : 400;
    const scroll = list.scrollLeft;
    const maxScroll = list.scrollWidth - list.clientWidth;
    
    if (direction === "next") {
      list.scrollLeft = scroll + move < maxScroll ? scroll + move : maxScroll;
      this.disableButton({direction, scroll, maxScroll, move});
    }
    if (direction === "prev") {
      list.scrollLeft = scroll - move > 0 ? scroll - move : 0;
      this.disableButton({direction, scroll, maxScroll, move});
    }
  };

  disableButton({direction, scroll, maxScroll, move}) {
    const isNext = direction === "prev" ? true : scroll + move < maxScroll;
    const isPrev = direction === "prev" ? scroll - move > 0 : true;
    if (isNext) this.disabledRight = false;
    if (isPrev) this.disabledLeft = false;
    if (!isNext) this.disabledRight = true;
    if (!isPrev) this.disabledLeft = true;
    this.requestUpdate();
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
    const classWrappedFilters = classMap({
      'wrapped-filters': true,
      'prev': this.hasPrevFilter,
      'next': this.hasNextFilter,
    });
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
      .slice(0, 3)
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
          <div class="${classWrappedFilters}">
            <div class="hasPrev"></div>
            <div class="filters">${renderFilters}</div>
            <div class="hasNext"></div>
          </div>
          <div class="head">
            <cas-text variant="footnote1">${selected?.title}</cas-text>
            <a href="${selected?.url}">
              <cas-text variant="footnote2-link">Ver todas</cas-text>
            </a>
          </div>
          <div class="list">${renderList}</div>
          <div class="actions">
            <cas-actions-nav urlAction="${selected?.url}" disabledLeft="${this.disabledLeft}" disabledRight="${this.disabledRight}"></cas-actions-nav>
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
    box-shadow: 0 30px 44px rgba(200, 200, 200, 0.25);
    border-radius: 20px;
    padding: 24px 24px 48px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-decoration: none;
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



