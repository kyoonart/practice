let stack1 = []; //入队操作
let stack2 = []; //出队操作

//队列的入队操作
function push(node) {
  //只需要非常简单的往栈1里面push元素就好
  stack1.push(node);
}
//队列的出队操作
function pop() {
  //1、把栈1里面的元素挪到栈2里面（负负得正）
  while (stack1.length) {
    stack2.push(stack1.pop());
  }
  //2、把栈2顶端的数据出栈即可
  let popVal = stack2.pop();
  //3、将栈2里面的数据挪到栈1里面（还原数据（恢复）：方便我们做后续的入队操作和出队操作）
  while (stack2.length) {
    stack1.push(stack2.pop());
  }
  return popVal;
}

function pop() {
  while (stack1.length) {
    stack2.push(stack1.pop());
  }
  let popVal = stack2.pop();
  while (stack2.length) {
    stack1.push(stack2.pop());
  }
  return popVal;
}

function pop() {
  while (stack1.length) {
    stack2.push(stack1.pop());
  }
  const popVal = stack2.pop();
  while (stack2.length) {
    stack1.push(stack2.pop());
  }
  return popVal;
}
