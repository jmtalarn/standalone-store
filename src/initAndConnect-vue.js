import Vue from 'vue';
import VueCounter from './vue-counter.vue';

// eslint-disable-next-line no-unused-vars


export default function (elId) {
  const vueThing = new Vue({
    el: `#${elId}`,
    components: { VueCounter },
    render: h => h(VueCounter),
  });
  console.log(vueThing);
}
