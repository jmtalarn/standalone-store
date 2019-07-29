import message from './message';
import './index.css';
import connect from './connect-vanilla';
import VanillaComponent from './vanilla';

const paragraph = document.createElement('h1');
paragraph.innerHTML = message;

document.body.prepend(paragraph);


const vanillaComponentContainer = document.createElement('div');
vanillaComponentContainer.id = 'vanilla';
vanillaComponentContainer.innerHTML = 'Nothing rendered yet.';
document.body.append(vanillaComponentContainer);
const vanillaConnected = connect(VanillaComponent, ['incrementAction', 'decrementAction'], ['render']);
console.log(vanillaConnected);
