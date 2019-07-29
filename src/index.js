import message from './message';
import './index.css';
import connectVanilla from './initAndConnect-vanilla';
import VanillaComponent from './vanilla-counter';
import ReactComponent from './react-counter';
import VueComponent from './vue-counter.vue';

import connectReact from './initAndConnect-react';
import connectVue from './initAndConnect-vue';

const header = document.createElement('h1');
header.innerHTML = message;

document.body.prepend(header);


const vanillaComponentContainer = document.createElement('div');
vanillaComponentContainer.id = 'vanilla';
vanillaComponentContainer.innerHTML = 'Nothing rendered yet.';
document.body.append(vanillaComponentContainer);

connectVanilla('vanilla', VanillaComponent, ['incrementAction', 'decrementAction'], ['render']);


const reactComponentContainer = document.createElement('div');
reactComponentContainer.id = 'react';
reactComponentContainer.innerHTML = 'Nothing rendered yet.';
document.body.append(reactComponentContainer);
// No onUpdate parameter in connectReact as rendering on props update is implicit in React
connectReact('react', ReactComponent, ['incrementAction', 'decrementAction']);


const vueComponentContainer = document.createElement('div');
vueComponentContainer.id = 'vue';
vueComponentContainer.innerHTML = 'Nothing rendered yet.';
document.body.append(vueComponentContainer);
connectVue('vue', VueComponent, ['incrementAction', 'decrementAction']);
