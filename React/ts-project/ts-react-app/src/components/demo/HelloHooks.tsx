import React, { useEffect, useState } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
interface State {
  count: number;
}
const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    if (count > 5) {
      setText("休息一下啦");
    }
  }, [count]);
  return (
    <>
      <p>
        你点击了{count}次{text}
      </p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {props.name}
      </Button>
    </>
  );
};
export default HelloHooks;
