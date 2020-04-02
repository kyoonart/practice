/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 、对于问题链表环入口，使用追赶的方法，设定两个指针slow、fast，从头节点开始，
//每次分别前进1步、2步。如存在环，则两者相遇；如不存在环，fast遇到NULL退出。
function EntryNodeOfLoop(pHead) {
    // write code here
    let slow = pHead;
    let fast = pHead
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            //相遇
            let p = pHead;
            while (p !== slow) {
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }
    return null;

}