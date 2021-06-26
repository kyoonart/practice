class Set {
  constructor() {
    this.items = {};
  }
  has(key) {
    return this.items.hasOwnProperty(key);
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
    }
  }
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
    }
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
  keys() {
    return Object.keys(this.items);
  }
}

let set = new Set();
set.add(1);
set.add(2);
set.add(5);
set.add(9);
console.log(set); // Set { items: { '1': 1, '2': 2 } }
console.log(set.keys()); // [ '1', '2' ]
console.log(set.values()); // [ 1, 2 ]
console.log(set.size()); // 2

const arr = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 1, value: 1 },
];
function fn(arr) {
  let result = [];
  let hashMap = {};
  arr.forEach((item) => {
    hashMap[JSON.stringify(item)] = item;
  });
  result = Object.keys(hashMap).map((item) => {
    return JSON.parse(item);
  });
  console.log(result);
}
fn(arr);
