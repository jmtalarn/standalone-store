import Vue from 'vue';
// import { reduxStorePlugin, connect } from 'redux-vue';
import { connect } from 'vue-redux-connect';
import VueCounter from './vue-counter.vue';
import store from './store';
import actions from './actions';

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
  const mapStateToProps = state => ({ count: state });
  const mapDispatchToProps = () => (
    {
      incrementAction: actions.incrementAction,
      decrementAction: actions.decrementAction,
    }
  );
  const ConnectedVueCounter = connect(mapStateToProps, mapDispatchToProps)(VueCounter);

  const vueThing = new Vue({
    el: `#${elId}`,
    data() { return { store }; },
    components: { ConnectedVueCounter },
    // render: h => h(VueCounter),
    template: '<ConnectedVueCounter :store="store"/>',
  });
  console.log(vueThing);
}
