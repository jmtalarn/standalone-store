/* global customElements HTMLElement */
class WcCounter extends HTMLElement {
  constructor() {
    super();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
        div {
            display: flex;
            margin: 0 auto;
            max-width: 50%;
            align-items: center;
            justify-content: space-around;
        }
        div p {
            color: red;
            padding: 1rem;
        }
    </style>
    <div>
        <button decrement>-</button>
        <p count></p>
        <button increment>+</button>
    </div>`;
    this.incrementBtn = this.shadowRoot.querySelector('[increment]');
    this.decrementBtn = this.shadowRoot.querySelector('[decrement]');
    this.displayCount = this.shadowRoot.querySelector('[count]');
  }


  static get observedAttributes() {
    return ['count'];
  }

  // attributeChangedCallback(attributeName, oldValue, newValue) {
  attributeChangedCallback() {
    // if (attributeName === 'count') {
    //   this.setCount(newValue);
    // }
    this.displayCount.innerText = this.count;
  }

  connectedCallback() {
    this.incrementBtn.addEventListener('click', this.increment);
    this.decrementBtn.addEventListener('click', this.decrement);

    if (!this.hasAttribute('count')) {
      this.setAttribute('count', 0);
    }
  }

  increment() {
    this.incrementAction();
  }

  decrement() {
    this.decrementAction();
  }

  get count() {
    return this.getAttribute('count');
  }

  set count(newValue) {
    this.setAttribute('count', newValue);
  }

  disconnectedCallback() {
    this.incrementBtn.removeEventListener('click', this.increment);
    this.decrementBtn.removeEventListener('click', this.decrement);
  }
}

customElements.define('wc-counter', WcCounter);
export default '<wc-counter count=0></wc-counter>';
