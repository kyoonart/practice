/*
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，
这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
示例 1:
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
来源：力扣（LeetCode）
*/

function NodeList(val) {
    this.val = val;
    this.next = null;
}
const n1 = new NodeList(1)
const n2 = new NodeList(2)
const n3 = new NodeList(3)
const n4 = new NodeList(4)
const n5 = new NodeList(5)
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
// 借助额外的空间方法
let oddEvenList = (head) => {
    if (!head || !head.next) return head;
    let odd = [],
        even = [];
    while (head) {
        let next = head.next;
        head.next = null;
        if (head.val % 2 === 0) {
            odd.push(head);
        } else {
            even.push(head);
        }
        head = next;
    }
    for (let i = 0; i < odd.length - 1; i++) {
        odd[i].next = odd[i + 1];
    }
    for (let j = 0; j < even.length - 1; j++) {
        even[j].next = even[j + 1];
    }
    odd[odd.length - 1].next = even[0]
    console.log(odd[0]);
    return odd[0];
};
// 原地方法
let oddEvenList2 = (head) => {
    if (!head || !head.next) return head;
    let dummyHead1 = {
        next: head
    }
    let dummyHead2 = {
        next: head.next,
    }

    let odd = dummyHead1.next; // 奇数节点 
    let even = dummyHead2.next; // 偶数节点
    while (odd && odd.next && even && even.next) {
        let nextOdd = odd.next.next; //  下一个奇数节点
        let nextEven = even.next.next; // 下一个偶数节点
        odd.next = nextOdd; //  连接
        even.next = nextEven;
        odd = nextOdd; // 下一个节点 重新开始
        even = nextEven;
    }
    odd.next = dummyHead2.next; // 奇数链表连接偶数连接
    return dummyHead1.next;
};

oddEvenList(n1);