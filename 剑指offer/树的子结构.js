// Step1.在树A中找到和B的根结点的值一样的结点R；
// Step2.判断树A中以R为根结点的子树是不是包含和树B一样的结点。
function HasSubtree(pRoot1, pRoot2) {
    let res = false;
    //当Tree1或者Tree2都为零的时候，才进行比较。否则直接返回false
    if (pRoot1 === null || pRoot2 === null) return false;
    //如果找到了对应Tree2的根节点的点
    if (pRoot1.val === pRoot2.val)
    //以这个根节点为为起点判断是否包含Tree2
        res = doesTree1HasTree2(pRoot1, pRoot2);
    if (!res)
    //如果找不到，那么就再去root的左儿子当作起点，去判断时候包含Tree2
        res = HasSubtree(pRoot1.left, pRoot2);
    if (!res)
    //如果找不到，那么就再去root的右儿子当作起点，去判断时候包含Tree2
        res = HasSubtree(pRoot1.right, pRoot2);
    //返回结果
    return res;
}

function doesTree1HasTree2(pRoot1, pRoot2) {
    //如果Tree2已经遍历完了都能对应的上，返回true
    if (pRoot2 === null) return true;
    //如果Tree2还没有遍历完，Tree1却遍历完了。返回false
    if (pRoot1 === null) return false;
    //如果其中有一个点没有对应上，返回false
    if (pRoot1.val !== pRoot2.val) return false;
    //如果根节点对应的上，那么就分别去子节点里面匹配
    return doesTree1HasTree2(pRoot1.left, pRoot2.left) && doesTree1HasTree2(pRoot1.right, pRoot2.right);
}