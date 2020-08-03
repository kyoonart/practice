import React from "react";
import { Button } from "antd";
interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
// 这是常规方式 建议使用的一种方式
// const Hello = (props: Greeting) => <Button>Hello{props.name}</Button>;
// 这是官方的 可能会弃用
const Hello: React.FC<Greeting> = ({ name, firstName, lastName, children }) => (
  <Button>
    hello{name}
    {lastName}
  </Button>
);
Hello.defaultProps = {
  firstName: "listItemHeight",
  lastName: "zhangsan",
};
export default Hello;
// 函数组件实现的方式
