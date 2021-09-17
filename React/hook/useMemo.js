// 缓存值
let hookState = [];
// 控制第几次渲染
let hookIndex = 0;
function useMemo(callBack, dependencies) {
  if (hookState[hookIndex]) {
    const [oldData, odlDependencies] = hookState[hookIndex];
    // 空数组every为true
    let same = odlDependencies.every(
      (item, index) => item === dependencies[index]
    );
    if (same) {
      hookIndex++;
      return oldData;
    }
    const newData = callBack();
    hookState[hookIndex++] = [newData, dependencies];
    return newData;
    //  非首次渲染
  }
  // 首次渲染
  const newData = callBack();
  hookState[hookIndex++] = [newData, dependencies];
  return newData;
}
