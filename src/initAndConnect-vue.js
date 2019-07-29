import Vue from 'vue';
// import { reduxStorePlugin, connect } from 'redux-vue';
import VueCounter from './vue-counter.vue';
// import store from './store';
// import actions from './actions';

// Vue.use(reduxStorePlugin);

// function mapStateToProps(state) {
//   return {
//     count: state,
//   };
// }

// function mapActionToProps() {
//   return {
//     incrementAction: actions.incrementAction, decrementAction: actions.decrementAction,
//   };
// }
// const ConnectedVueCounter = connect(mapStateToProps, mapActionToProps)(VueCounter);
export default function (elId) {
  const vueThing = new Vue({
    el: `#${elId}`,
    // data: { count: store.getState() },
    components: { VueCounter },
    // render: h => h(VueCounter),
    template: '<VueCounter />',
  });
  console.log(vueThing);
}
