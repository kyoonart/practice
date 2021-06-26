//输入两个链表，找出它们的第一个公共结点
function FindFirstCommonNode(headA, headB) {
  if (headA == null || headB == null) {
    return null;
  }
  let headALength = getNodeLength(headA);
  let headBLength = getNodeLength(headB);
  let short;
  let lang;
  let chLen = 0;
  if (headALength < headBLength) {
    short = headA;
    lang = headB;
    chLen = headBLength - headALength;
  } else {
    short = headB;
    lang = headA;
    chLen = headALength - headBLength;
  }
  while (chLen) {
    lang = lang.next;
    chLen--;
  }
  while (lang) {
    if (lang === short) {
      return lang;
    }
    lang = lang.next;
    short = short.next;
  }
  return null;
}
function getNodeLength(head) {
  let len = 0;
  let cur = head;
  if (cur) {
    while (cur) {
      len++;
      cur = cur.next;
    }
  }
  return len;
}
