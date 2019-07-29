import message from './message';
import './index.css';
import './icons';
import connectVanilla from './initAndConnect-vanilla';
import VanillaComponent from './vanilla-counter';
import ReactComponent from './react-counter';
import VueComponent from './vue-counter.vue';

import connectReact from './initAndConnect-react';
import connectVue from './initAndConnect-vue';

const header = document.createElement('header');
header.innerHTML = `<h1>${message}</h1>`;

const main = document.createElement('main');

document.body.prepend(main);
document.body.prepend(header);


const vanillaComponentContainer = document.createElement('div');
vanillaComponentContainer.id = 'vanilla';
vanillaComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <i class="icon fab fa-js"></i>Javascript Component</div>
        <div id="vanilla-component">
            Nothing rendered yet.
        </div>
    </div>
`;
main.append(vanillaComponentContainer);

connectVanilla('vanilla-component', VanillaComponent, ['incrementAction', 'decrementAction'], ['render']);


const reactComponentContainer = document.createElement('div');
reactComponentContainer.id = 'react';
reactComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <i class="icon fab fa-react"></i>React Component</div>
        <div id="react-component">
            Nothing rendered yet.
        </div>
    </div>
`;
main.append(reactComponentContainer);
// No onUpdate parameter in connectReact as rendering on props update is implicit in React
connectReact('react-component', ReactComponent, ['incrementAction', 'decrementAction']);


const vueComponentContainer = document.createElement('div');
vueComponentContainer.id = 'vue';
vueComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <i class="icon fab fa-vuejs"></i>Vue Component</div>
        <div id="vue-component">
            Nothing rendered yet.
        </div>
    </div>
`;
main.append(vueComponentContainer);
connectVue('vue-component', VueComponent, ['incrementAction', 'decrementAction']);
