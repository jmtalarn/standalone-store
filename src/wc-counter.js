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
            min-width: 2rem;
            text-align: center;
        }
        button {
          position: relative;
          overflow: hidden;
          transform: translate3d(0, 0, 0);
          font-size: 1.5rem;
          min-width: 3rem;
          min-height: 3rem;
          background-color: rgb(241, 241, 241); /* rgb(0, 183, 255); */
          border: none;
          color: grey; /*#fff;*/
          text-shadow: 1px 1px 1px white;
          border-radius: 50%;
          text-align: center;
          box-shadow: 3px 2px 5px #999;
        }
        button:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform 0.5s, opacity 1s;
        }
        button:active:after {
          transform: scale(0, 0);
          opacity: 0.2;
          transition: 0s;
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
