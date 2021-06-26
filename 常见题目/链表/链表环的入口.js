// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null
function EntryNodeOfLoop(root) {
  if (!root || !root.next) return null;
  // 1: 判断是否有环 快慢指针
  let p1 = root;
  let p2 = root.next;
  while (p1 !== p2) {
    if (p2 === null || p2.next === null) {
      return null;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  //2: 求环的长度
  let temp = p1;
  let cycleLength = 1;
  temp = temp.next;
  while (temp !== p1) {
    temp = temp.next;
    cycleLength++;
  }
  // 3: p1 p2 复位 让p1先走cycleLength  p1 p2  相遇即是环的入口
  p1 = p2 = root;
  while (cycleLength-- > 0) {
    p1 = p1.next;
  }
  while (root) {
    if (p1 === p2) {
      return p1;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  return null;
}
