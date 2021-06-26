let range = (start, end, step) =>
  new Array(Math.floor((end - start + 1) / step))
    .fill(start)
    .map((el, i) => start + i * step);
console.log(range(1, 16, 3));
