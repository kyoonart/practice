/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
var reverseList = function (head) {
  let pre = null;
  let cur = null;
  while (head !== null) {
    //  保存下一节点
    cur = head.next;
    //  断开连接
    head.next = pre;
    // 反向连接
    pre = head;
    // 往下走
    head = cur;
  }
};

function reverseList(head) {
  let prev = null;
  let cur = null;
  while (head) {
    cur = head.next;
    head.next = prev;
    prev = head;
    head = cur;
  }
  return prev;
}

function ReverseList(head) {
  if (head === null || head.next === null) return head;
  let reverList = ReverseList(head.next);
  let h2 = head.next;
  h2.next = head;
  head.next = null;
  return reverList;
}

function reverseList(head) {
  if (!head || !head.next) return head;
  let prev = null;
  let cur = null;
  while (head) {
    cur = head.next;
    head.next = prev;
    prev = head;
    head = cur;
  }
  return prev;
}
// 不改变原链表
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let next,
    current = head,
    pre = null;
  while (current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
};
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let next = head;
  let current = head;
  let pre = null;
  while (current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
};
//  递归实现
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};
