/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    let ppre = null;
    let pnext = null;
    while (pHead !== null) {
        pnext = pHead.next;
        pHead.next = ppre;
        ppre = pHead;
        pHead = pnext;
    }
    return ppre;
}