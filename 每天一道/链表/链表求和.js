const addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];
  let carry = 0;
  let head = null;
  while (l1) {
    stack1.push(l1.value);
    l1 = l1.next;
  }
  while (l1) {
    stack2.push(l1.value);
    l2 = l2.next;
  }
  while (stack1.length > 0 || stack2.length > 0 || carry) {
    let val1 = stack1.length && stack1.pop();
    let val2 = stack2.length && stack2.pop();
    let sum = val1 + val2 + carry;
    carry = sum > 10 ? 1 : 0;
    let node = new Node(sum > 10 ? sum % 10 : sum);
    node.next = head;
    head = node;
  }
  return head;
};
// 思路:使用栈来保存每个节点的值。然后倒序相加
// 联想  链表反转
