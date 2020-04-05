/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
var reverseList = function(head) {
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

}