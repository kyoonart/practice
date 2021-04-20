/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0);
  let cur = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next; // 断开之前的连接
  }
  cur.next = l1 ? l1 : l2;
  return head.next;
};

// 借助额外的链表
var mergeTwoList = (l1, l2) => {
  let head = new ListNode(0);
  let cur = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next == l1 ? l1 : l2;
  return head.next;
};
// 递归实现
// 实现思路
// 前提 终止条件
// 链表头部节点比较，取较小节点。
// 小节点的next等于小节点的next和大节点的较小值。
// 如此递归。
// 返回小节点。

var mergeTwoList = (l1, l2) => {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let head = null;
  if (l1.val > l2.val) {
    head = l2;
    head.next = mergeTwoList(l1, l2.next);
  } else {
    head = l1;
    head.next = mergeTwoList(l1.next, l2);
  }
  return head;
};
