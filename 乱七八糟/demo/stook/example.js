import React from "react";
import { useStore } from "stook";
function useCounter() {
  const [count, setCount] = useStore("Counter", 0);
  const decrease = () => setCount(count - 1);
  const increase = () => setCount(count + 1);
  return { count, increase, decrease };
}
function Display() {
  const { count } = useCounter();
  return <div>{count}</div>;
}
function Increase() {
  const { increase } = useCounter();
  return <buttun onClick={increase}>+</buttun>;
}
function Decrease() {
  const { decrease } = useCounter();
  return <buttun onClick={decrease}>-</buttun>;
}
export default function App() {
  return (
    <div>
      <Decrease />
      <Display />
      <Increase />
    </div>
  );
}
