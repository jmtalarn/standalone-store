import message from './message';
import './index.css';
import connectVanilla from './connect-vanilla';
import VanillaComponent from './vanilla-counter';

import connectReact from './connect-react';

const paragraph = document.createElement('h1');
paragraph.innerHTML = message;

document.body.prepend(paragraph);


const vanillaComponentContainer = document.createElement('div');
vanillaComponentContainer.id = 'vanilla';
vanillaComponentContainer.innerHTML = 'Nothing rendered yet.';
document.body.append(vanillaComponentContainer);

const vanillaConnected = connectVanilla('vanilla', VanillaComponent, ['incrementAction', 'decrementAction'], ['render']);

console.log(vanillaConnected);

const reactConnected = connectReact('react', VanillaComponent, ['incrementAction', 'decrementAction'], ['render']);

console.log(reactConnected);
