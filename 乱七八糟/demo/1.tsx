import React, { useState } from "react";

export default function StateDemo() {
  const [num, setNum] = useState(1);

  const onBtnClick = (e) => {
    setNum(2);
    foo();
  };

  const foo = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      print();
    });
  };

  const print = () => {
    // ？
    console.log(num);
  };

  return <button onClick={onBtnClick}>click me</button>;
}

import { useState } from "react";

export default function App() {
  const [state, setState] = useState(0);

  const print = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setState(1);
        resolve();
      }, 0);
    });
  };

  const handleButtonClick = async () => {
    await print();
    console.log(state);
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>print</button>
    </div>
  );
}
