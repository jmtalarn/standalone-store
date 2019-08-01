import message from './message';
import './index.css';
import ElmLogo from './elm_logo.svg';
import WcLogo from './webcomponent.svg';
import SvelteLogo from './svelte.svg';
import StencilLogo from './stencil.svg';
import ReactLogo from './React.svg';
import JsLogo from './js.svg';
import VueLogo from './Vuejs.svg';
import VanillaComponent from './vanilla-counter';
import ReactComponent from './react-counter';
import VueComponent from './vue-counter.vue';
import ElmComponent from './elm-counter.elm';
import WcComponent from './wc-counter';
import SvelteComponent from './svelte-counter.svelte';
import connectVanilla from './initAndConnect-vanilla';
import connectReact from './initAndConnect-react';
import connectVue from './initAndConnect-vue';
import connectElm from './initAndConnect-elm';
import connectWc from './initAndConnect-wc';
import connectSvelte from './initAndConnect-svelte';

const header = document.createElement('header');
header.innerHTML = `<h1>${message}</h1>`;

const main = document.createElement('main');

document.body.prepend(main);
document.body.prepend(header);

const actions = ['incrementAction', 'decrementAction'];

const vanillaComponentContainer = document.createElement('div');
vanillaComponentContainer.id = 'vanilla';
vanillaComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <span class="icon">${JsLogo}</span>Vanilla Component</div>
        <div id="vanilla-component">
            <p>Nothing rendered yet.</p>
        </div>
    </div>
`;
main.append(vanillaComponentContainer);

connectVanilla('vanilla-component', VanillaComponent, actions, ['render']);


const reactComponentContainer = document.createElement('div');
reactComponentContainer.id = 'react';
reactComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <span class="icon">${ReactLogo}</span>React Component</div>
        <div id="react-component">
            <p>Nothing rendered yet.</p>
        </div>
    </div>
`;
main.append(reactComponentContainer);
// No onUpdate parameter in connectReact as rendering on props update is implicit in React
connectReact('react-component', ReactComponent, actions);


const vueComponentContainer = document.createElement('div');
vueComponentContainer.id = 'vue';
vueComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <span class="icon">${VueLogo}</span>Vue Component</div>
        <div id="vue-component">
            <p>Nothing rendered yet.</p>
        </div>
    </div>
`;
main.append(vueComponentContainer);
connectVue('vue-component', VueComponent, actions);


const elmComponentContainer = document.createElement('div');
elmComponentContainer.id = 'elm';
elmComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <span class="icon">${ElmLogo}</span> Elm Component</div>
        <div id="elm-component">
            <p>Nothing rendered yet.</p>
        </div>
    </div>
`;
main.append(elmComponentContainer);
connectElm('elm-component', ElmComponent, actions);

const wcComponentContainer = document.createElement('div');
wcComponentContainer.id = 'wc';
wcComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <span class="icon">${WcLogo}</span>Web Component</div>
        <div id="wc-component">
<p>Nothing rendered yet.</p>

        </div>
    </div>
`;
main.append(wcComponentContainer);
connectWc('wc-component', WcComponent, actions);

const svelteComponentContainer = document.createElement('div');
svelteComponentContainer.id = 'svelte';
svelteComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <span class="icon">${SvelteLogo}</span> Svelte Component</div>
        <div id="svelte-component">
            <p>Nothing rendered yet.</p>
        </div>
    </div>
`;
main.append(svelteComponentContainer);
connectSvelte('svelte-component', SvelteComponent, actions);

const stencilComponentContainer = document.createElement('div');
stencilComponentContainer.id = 'stencil';
stencilComponentContainer.innerHTML = `
    <div class="component-box">
        <div class="header">
            <span class="icon">${StencilLogo}</span> Stencil Component</div>
        <div id="stencil-component">
            <p>Nothing rendered yet.</p>
        </div>
    </div>
`;
main.append(stencilComponentContainer);
// connectSvelte('svelte-component', SvelteComponent, actions);
