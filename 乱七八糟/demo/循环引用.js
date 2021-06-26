const isCycleObject = (obj, parent) => {
  const parentArr = parent || [obj];
  console.log("parentArr", parentArr);
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      let flag = false;
      parentArr.forEach((pObj) => {
        if (pObj === obj[i]) {
          flag = true;
        }
      });
      if (flag) return true;
      flag = isCycleObject(obj[i], [...parentArr, obj[i]]);
      if (flag) return true;
    }
  }
  return false;
};

// const a = 1;
// const b = { a };
// const c = { b };
// const o = { d: { a: 3 }, c };
// o.c.b.aa = a;

var a = {
  b: {
    c: {},
  },
};

a.b.c.d = a;
console.log(isCycleObject(a));
