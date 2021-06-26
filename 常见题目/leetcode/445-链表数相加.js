/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [],
    stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0,
    head = null;
  while (stack1.length || stack2.length || carry) {
    let val1 = stack1.length && stack1.pop();
    let val2 = stack2.length && stack2.pop();
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    let node = new ListNode(sum % 10);
    // 从后往前连接链表
    node.next = head;
    head = node;
  }

  return head;
};
// @lc code=end
// 题解： 维护一个栈结构，和一个变量表示进位的 尾数对齐然后相加进位
