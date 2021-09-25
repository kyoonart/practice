//  实现 react jsx render 函数
function render(vnode, comtainer) {
  if (typeof vnode === "string") {
    let dom = document.createTextNode(vnode);
    return comtainer.appendChild(dom);
  }
  let dom = document.createElement(vode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      if (key === "className") {
        key = "class";
      }
      dom.setAttribute(key, vnode.attrs[key]);
    });
  }
  vnode.children.forEach((child) => render(child, comtainer));
  return comtainer.appendChild(dom);
}
