function getRandomColor() {
  // const r = Math.random();
  // if (r < 0.5)
  return "#" + Math.random().toString(16).slice(-6);
}
console.log(getRandomColor());
