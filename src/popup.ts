const $body = document.querySelector("body");
const p = document.createElement("p");
p.innerHTML = "Hello World";

if ($body) {
  $body.appendChild(p);
}
