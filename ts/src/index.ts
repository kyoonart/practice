const msg: string = "ts";
function sayHello(msg: string) {
  return "hello" + msg;
}
document.body.textContent = sayHello(msg);
