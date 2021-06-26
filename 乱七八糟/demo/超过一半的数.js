function solution(arr) {
  let map = {};
  for (const item of arr) {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
    if (map[item] > arr.length >> 1) {
      return item;
    }
  }
  return 0;
}
let a = [1, 2, 3, 2, 2, 2, 5, 4, 2];
let e = solution(a);
console.log(e);
const reserve = (start, end) => {
  let [pre, current] = [null, start];
  while (current !== end)
    [current.next, pre, current] = [pre, current, current.next];
  return pre;
};

const reverseKGroup = (head, k) => {
  // 终止条件，看后面的是否小于k
  //   let [end, start] = [head, head];
  let end = head;
  let start = head;
  // 判断长度是否大于k,end负责记录下次需要继续的位置
  for (let i = 0; i < k; i++) {
    end = end.next;
    if (!end) return head;
  }
  // 因为反转链表所以start变成了新链表的尾结点，end为老链表需要继续遍历的节点
  let newHead = reserve(start, end);
  start.next = reverseKGroup(end, k);
  return newHead;
  // 反转链表
};
