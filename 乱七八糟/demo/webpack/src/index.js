require("./index.css");
window.onload = function () {
  const span = document.createElement("span");
  span.innerHTML = "webpack study";
  document.body.appendChild(span);
};
console.log("pengtao");
let fn = () => console.log("这是箭头函数");
fn();
