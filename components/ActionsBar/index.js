import { css, html, LitElement } from 'https://unpkg.com/lit?module';

class CustomBarLit extends LitElement {
  constructor() {
    super();
    this.options = ['Option 1', 'Option 2', 'Option 3'];
    this._selectedOptionIndex = 0;
    this.initialPosition = 0;
  }

  static get properties() {
    return {
      options: { type: Array },
      initialPosition: { type: Number },
    };
  }

  static get styles() {
    return css`
      .horizontal-bar {
        position: relative;
        display: grid;
        grid-template-columns: repeat(var(--column-count), 1fr);
        align-items: center;
        justify-items: center;
        width: 100%;
        background: #F2F5F9;
        border: 1px solid #E9EBEC;
        box-shadow: 0 34px 44px rgba(0, 0, 0, 0.06);
        border-radius: 100px;
        height: 40px;
      }

      .option,
      .floating-element {
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }

      .floating-element {
        background-color: #4DBFB8;
        color: #FFFFFF;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        cursor: move;
        z-index: 1;
        height: 100%;
        width: calc(100% / var(--column-count));
        transition: 200ms ease;
        box-shadow: 0 2px 5px rgba(201, 207, 227, 0.75);
      }
    `;
  }

  _emitEvent(selectedOption) {
    const event = new CustomEvent('change', {
      detail: {
        index: selectedOption,
        option: this.options[selectedOption],
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  _selectOption(index) {
    const button = this.shadowRoot.querySelectorAll('.option')[index];
    const floatingElement = this.shadowRoot.querySelector('.floating-element');

    const rect = button.getBoundingClientRect();
    const barRect = this.shadowRoot.querySelector('.horizontal-bar').getBoundingClientRect();

    floatingElement.style.left = `${rect.left - barRect.left}px`;
    floatingElement.textContent = button.textContent;
    this._selectedOptionIndex = index;
    this._emitEvent(index);
  }

  _initializeDraggable(element) {
    let initialPosition = { x: 0 };
    let currentPosition = { x: 0 };

    const onMouseDown = (e) => {
      e.preventDefault();
      initialPosition = {
        x: e.clientX - currentPosition.x,
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      e.preventDefault();
      currentPosition = {
        x: e.clientX - initialPosition.x,
      };

      // Limit horizontal dragging and keep it within the container
      const container = this.shadowRoot.querySelector('.horizontal-bar');
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      if (currentPosition.x >= 0 && currentPosition.x + elementRect.width <= containerRect.width) {
        element.style.transition = 'none';
        element.style.left = `${currentPosition.x}px`;
      }
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      this._adjustFloatingElementPosition();
    };

    element.addEventListener('mousedown', onMouseDown);
  }
  _adjustFloatingElementPosition() {
    const floatingElement = this.shadowRoot.querySelector('.floating-element');
    const buttons = this.shadowRoot.querySelectorAll('.option');
    const elementRect = floatingElement.getBoundingClientRect();
    let closestButton = buttons[0];
    let minimumDistance = Infinity;

    buttons.forEach((button) => {
      const buttonRect = button.getBoundingClientRect();
      const distance = Math.abs(buttonRect.left - elementRect.left);

      if (distance < minimumDistance) {
        minimumDistance = distance;
        closestButton = button;
      }
    });

    const index = Array.from(buttons).indexOf(closestButton);
    this._selectOption(index);
  }
  firstUpdated() {
    const floatingElement = this.shadowRoot.querySelector('.floating-element');
    this._initializeDraggable(floatingElement);

    const button = this.shadowRoot.querySelectorAll('.option')[this.initialPosition];
    const rect = button.getBoundingClientRect();
    const barRect = this.shadowRoot.querySelector('.horizontal-bar').getBoundingClientRect();
    floatingElement.style.left = `${rect.left - barRect.left}px`;
    floatingElement.textContent = button.textContent;
  }
  render() {
    return html`
      <style> 
        .horizontal-bar { 
          --column-count: ${this.options.length}; 
        } 
      </style>
      <div class="horizontal-bar" data-current="${this._selectedOptionIndex}"> 
        <div class="floating-element">
          <cas-text variant="body2">${this.options[0]}</cas-text> 
        </div>
        ${this.options.map((option, index) => html`
          <button class="option" @click="${() => this._selectOption(index)}"><cas-text variant="body1">${option}</cas-text></button>
        `)}
      </div>
    `;
  }
}
customElements.define('cas-actions-bar', CustomBarLit);