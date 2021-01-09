function setRem() {
  let doc = document.createElement();
  let w = doc.getBoundingClientRect().width;
  w = w / 75;
  doc.style.fontSize = w + "px";
}
addEventListener("resize", setRem);
