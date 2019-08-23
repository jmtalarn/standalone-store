import template from './angularjs-counter.html';

function createHtml(elId) {
  const element = document.getElementById(elId);
  element.setAttribute('ng-app', 'angularjsCounter');
  element.setAttribute('ng-strict-di', 'true');
  element.innerHTML = `
        <angularjs-counter
            style="display: flex; margin: 0 auto; max-width: 50%; align-items: center; justify-content: space-around"
        ></angularjs-counter>
    `;
}

export default function counter(elId, controller) {
  createHtml(elId);

  return {
    restrict: 'E',
    controllerAs: 'counter',
    controller,
    template,
    scope: {},
  };
}
