// 1 哈希法
// 具体地，我们可以使用哈希表(Map)来存储所有已经访问过的节点。每次我们到达一个节点
// ，如果该节点已经存在于哈希表中，则说明该链表是环形链表，否则就将该节点加入哈希表中。
// 重复这一过程，直到我们遍历完整个链表即可。
// const hasCycle = (head) => {
//   if (!head || !head.next) {
//     return false;
//   }
//   let map = new Map();
//   while (head) {
//     if (map.has(head)) {
//       return true;
//     }
//     map.set(head, true);
//     head = head.next;
//   }
//   return false;
// };

// 快慢指针
const hasCycle = (head) => {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
