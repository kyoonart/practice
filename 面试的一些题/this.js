let obj = {
  name: "bytedance",
  getName() {
    console.log(this.kk);
  },
};
let fb = obj.getName;
fb();

function test(a, b) {
  let a;
  console.log(a);
}
test(1, 2);
