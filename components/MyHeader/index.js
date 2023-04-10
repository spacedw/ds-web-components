import { LitElement, html, css } from 'https://unpkg.com/lit@2.7.1/index@0.0.1.js?module';

class MyHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
      }
      header {
        display: flex;
        flex-direction: column;
        background-color: #f8f8f8;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: height 0.3s ease-in-out;
        will-change: height;
        height: 100px;
      }
      top {
        z-index: 1;
      }
      top, bottom {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
      }
      bottom {
        top: 50px;
        width: 100%;
        background-color: #f8f8f8;
        position: absolute;
        transition: transform 0.3s ease-in-out;
        will-change: transform;
      }
    `;
  }

  constructor() {
    super();
    this.lastScrollPosition = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    super.disconnectedCallback();
  }

  handleScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition === 0) {
      this.shadowRoot.querySelector('header').style.height = '100px';
      this.shadowRoot.querySelector('bottom').style.transform = 'translateY(0)';
    } else if (currentScrollPosition < this.lastScrollPosition) {
      this.shadowRoot.querySelector('header').style.height = '100px';
      this.shadowRoot.querySelector('bottom').style.transform = 'translateY(0)';
    } else {
      this.shadowRoot.querySelector('header').style.height = '50px';
      this.shadowRoot.querySelector('bottom').style.transform = 'translateY(-100%)';
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  render() {
    return html`
      <header>
        <top>Top content</top>
        <bottom>Bottom content</bottom>
      </header>
    `;
  }
}

customElements.define('my-header', MyHeader);
