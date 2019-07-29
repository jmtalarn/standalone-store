
export default class VanillaCounter {
  constructor(elId, state, actions) {
    this.element = document.getElementById(elId);
    Object.assign(this.element.style, {
      display: 'flex',
      margin: '0 auto',
      maxWidth: '50%',
      alignItems: 'center',
      justifyContent: 'space-around',
    });
    this.element.innerHTML = '';
    const incButton = document.createElement('button');
    incButton.innerHTML = '+';
    incButton.onclick = actions.incrementAction;

    const decButton = document.createElement('button');
    decButton.innerHTML = '-';
    decButton.onclick = actions.decrementAction;
    const p = document.createElement('p');

    this.element.appendChild(p);
    this.element.prepend(decButton);
    this.element.append(incButton);
    this.render(state);
  }

  // eslint-disable-next-line class-methods-use-this
  render(state) {
    this.element.querySelector('p').innerHTML = state;
  }
}
