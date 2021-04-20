function FindPath(root, expectNumber) {
  let result = [];
  let stack = [];
  let sum = 0;
  if (root) {
    FindPathCore(node, expectNumber, result, stack, sum);
  }
  return result;
}

function FindPathCore(node, expectNumber, result, stack, sum) {
  stack.push(node.val);
  sum += node.val;
  if (!node.left && !node.right && sum === expectNumber) {
    result.push(stack.slice(0));
  }
  if (node.left) {
    FindPathCore(node, expectNumber, result, stack, sum);
  }
  if (node.right) {
    FindPathCore(node, expectNumber, result, stack, sum);
  }
  stack.pop();
}
