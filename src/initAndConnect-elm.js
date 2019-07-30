
import Counter from './elm-counter.elm';


export default function (elId) {
  console.log(Counter);
  Counter.Elm.Main.init({ node: document.getElementById(elId) });
}
