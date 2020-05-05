let inStack = [],
    outStack = [];
// 入队
function push(node) {
    inStack.push(node);
}

function out() {
    if (inStack.length != 0) {
        outStack.push(inStack.pop())
    }
    return outStack.pop();
}