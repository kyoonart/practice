var bar = {
  myName: "bar",
  printName: function () {
    console.log(myName);
    console.log(this);
  },
};
function foo() {
  let myName = "foo";
  return bar.printName;
}
let myName = "global";
let _printName = foo();
_printName();
bar.printName();
