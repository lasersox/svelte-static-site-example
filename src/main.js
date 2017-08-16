/* global document */

import Hello from "./components/Hello.html"

var target = document.querySelector('#hello')
if (target) {
  var hello = new Hello({
    target: target,
    hydrate: true
  });
  console.log("Added Hello comoponent to DOM at ", target)
}
