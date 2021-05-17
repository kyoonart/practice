// dfs
function dfs(root) {
  let stack = [];
  if (!root) {
    stack.push(root);
  }
  while (stack.length !== 0) {
    let node = stack.pop();
    console.log(node.value);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
}
// bfs
function bfs(root) {
  let queue = [];
  if (!root) {
    queue.push(root);
  }
  while (queue.length !== 0) {
    let node = queue.shift();
    console.log(node.value);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
}
