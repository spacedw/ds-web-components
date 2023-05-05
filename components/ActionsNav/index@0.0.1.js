import {css, html, LitElement} from 'https://unpkg.com/lit?module';

class ActionsNav extends LitElement {
  static get properties() {
    return {
      urlAction: {type: String},
      disabledLeft: {type: String},
      disabledRight: {type: String},
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .container {
        display: flex;
        justify-content: end;
        gap: 12px;
      }
      .btn {
        background-color: #4DBFB8;
        width: 40px;
        height: 40px;
        border-radius: 100px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
      }
      .btn.disabled {
        pointer-events: none;
        background-color: #E9EBEC;
        color: #909AA1;
      }
      .btn-action {
        height: 44px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        border: 1px solid currentColor;
        border-radius: 100px;
        color: currentColor;
        text-decoration: none;
      }
      @media (min-width: 769px) {
        .container {
          justify-content: center;
        }
        .btn {
          display: none;
        }
      }
    `;
  }

  handleLeft() {
    this.dispatchEvent(new CustomEvent('clickLeft'));
  }
  
  handleRight() {
    this.dispatchEvent(new CustomEvent('clickRight'));
  }

  render() {
    const {disabledLeft, disabledRight} = this;
    const isDisabledLeft = disabledLeft === 'true';
    const isDisabledRight = disabledRight === 'true';
    const classLeft = isDisabledLeft ? 'btn disabled' : 'btn';
    const classRight = isDisabledRight ? 'btn disabled' : 'btn';
    return html`
      <div class="container">
        <button class="${classLeft}" @click="${this.handleLeft}">
          <cas-icon name="flat-arrowLeft" size="20"></cas-icon>
        </button>
        <button class="${classRight}" @click="${this.handleRight}">
          <cas-icon name="flat-arrowRight" size="20"></cas-icon>
        </button>
        ${this.urlAction ? html`
          <a class="btn-action" href="${this.urlAction}" target="_blank">
            <cas-text variant="caption1">Ver todas</cas-text>
          </a>
        ` : ''}
      </div>
    `;
  }
}

customElements.define('cas-actions-nav', ActionsNav);
