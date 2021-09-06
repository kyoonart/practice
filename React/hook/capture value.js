import React, { useState, useCallback } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const handleAlertClick = useCallback(() => {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>增加 count</button>
      <button onClick={handleAlertClick}>显示 count</button>
    </div>
  );
}
export default Example;
//  函数每次执行都是一次新的开始
