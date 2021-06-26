const compareVersion = (v1, v2) => {
  let ver1 = v1.split(".");
  let ver2 = v2.split(".");
  let len = Math.max(ver1.length, ver2.length);
  for (let i = 0; i < len; i++) {
    let ver11 = 0,
      ver22 = 0;
    if (ver1.length > i) {
      ver11 = +ver1[i];
    }
    if (ver2.length > i) {
      ver22 = +ver2[i];
    }
    if (ver11 < ver22) {
      return -1;
    } else if (ver11 > ver22) {
      return 1;
    }
  }
  return 0;
};

// let res1 = compareVersion("3.2.1", "2.2.3");
// console.log(res1);
// let res2 = compareVersion("1.2.1", "1.2.3");
// console.log(res2);
// let res3 = compareVersion("2.1.3.1", "2.1.3");
// console.log(res3);

const compareVersionT = (v1, v2) => {
  let ver1 = v1.split(".");
  let ver2 = v2.split(".");
  let index = 0;
  while (ver1.length > index || ver2.length > index) {
    if (!ver1[index]) ver1[index] = 0;
    if (!ver2[index]) ver2[index] = 0;
    if (+ver1[index] > +ver2[index]) {
      return 1;
    } else if (+ver1[index] < +ver2[index]) {
      return -1;
    }
    index++;
  }
  return 0;
};
let res1 = compareVersionT("3.2.1", "2.2.3");
console.log(res1);
let res2 = compareVersionT("1.2.1", "1.2.3");
console.log(res2);
let res3 = compareVersionT("2.1.3.1", "2.1.3");
console.log(res3);
