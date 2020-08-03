import React, { Component } from "react";
import { Button } from "antd";

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}
interface State {
  count: number;
}
export default class HelloClass extends Component<Greeting, State> {
  state: State = { count: 2 };
  static defaultProps = {
    firstName: "zhansgan",
    lastName: "lisi",
  };
  render() {
    return <Button>{this.props.name}</Button>;
  }
}
