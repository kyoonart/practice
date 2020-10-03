/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// hhh 简单吧
// 2020-4-2 22:22:02
function printListFromTailToHead(head) {
    let array = []
    while (head) {
        array.unshift(head.val);
        head = head.next;
    }
    return array
}
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    console.log(list.value);
}

printReverseList(list);