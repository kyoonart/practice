// 双指针方法 
// 2020-4-3 22:58:09
function FindKthToTail(head, k) {
    if (head == null || k <= 0) {
        return null;
    }
    let p1 = head;
    let p2 = head;
    while (--k) {
        if (p2.next !== null) {
            p2 = p2.next;
        } else {
            return null;
        }
        while (p2.next !== null) {
            p2 = p2.next;
            p1 = p1.next;
        }
        return p1;

    }
}