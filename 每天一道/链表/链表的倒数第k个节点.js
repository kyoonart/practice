// 双指针方法
// 2020-4-3 22:58:09
var getKthFromEnd = function (head, k) {
  if (head == null || k <= 0) {
    return null;
  }
  let p1 = head;
  let p2 = head;
  let index = 0;
  while (p2) {
    index++;
    p2 = p2.next;
    if (index > k) {
      p1 = p1.next;
    }
  }
  return index >= k && p1;
};
