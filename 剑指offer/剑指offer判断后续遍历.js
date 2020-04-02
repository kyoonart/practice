function VerifySquenceOfBST(sequence) {
    if (!sequence.length) return false;
    return judge(sequence, 0, sequence.length - 1);
}

function judge(a, l, r) {
    if (l >= r) return true;
    let i = r;
    while (a[i - 1] > a[r] && i > l) i--;
    for (let j = i - 1; j >= l; j--) {
        if (a[j] > a[r]) return false;
    }
    return judge(a, l, i - 1) && judge(a, i, r - 1);
}
////
function VerifySquenceOfBST(sequence) {
    if (!sequence.length) return false;
    return judge(sequence, 0, sequence.length - 1)
}

function judge(a, l, r) {
    if (l >= r) return true;
    let i = r;
    while (a[i - 1] > a[r] && i > l) i--;
    for (let j = i - 1; j >= l; j--) {
        if (a[j] > a[r]) return false
    }
    return judge(a, l, i - 1) && judge(a, i, r - 1)
}