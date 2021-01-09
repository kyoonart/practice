function toThousands(num) {
  var result = [],
    counter = 0;
  num = (num || 0).toString().split("");
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 4) && i != 0) {
      result.unshift(",");
    }
  }
  console.log(result.join(""));
  return result.join("");
}
toThousands(124214214188824);

function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
