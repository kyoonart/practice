// import React, { Component } from 'react';
import React from "react";
import { Input, Button, List } from "antd";

//没有业务逻辑的  可以写成无状态组件 > 这样性能可以好，为什么呢？ 没有state状态，没有生命周期函数
// 因为继承一个component 没有一个函数 或者方法好
const TodoListUI = (props) => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          placeholder={props.inputValue}
          style={{ width: "250px", marginRight: "10px" }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        {/* <Input placeholder='Write Something' style={{ width: '250px', marginRight:'10px' }} /> */}
        <Button type="primary" onClick={props.clickBtn}>
          增加
        </Button>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            // dataSource={data}
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item>
                {item}
                <span
                  style={{ float: "right", cursor: "pointer" }}
                  onClick={() => {
                    props.deleteItem(index);
                  }}
                >
                  x
                </span>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    </div>
  );
};

// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: '250px', marginRight: '10px' }}
//                         onChange={this.props.changeInputValue}
//                         value={this.props.inputValue}
//                     />
//                     {/* <Input placeholder='Write Something' style={{ width: '250px', marginRight:'10px' }} /> */}
//                     <Button
//                         type='primary'
//                         onClick={this.props.clickBtn}
//                     > 增加 </Button>
//                     <div style={{ margin: '10px', width: '300px' }}>
//                         <List
//                             bordered
//                             // dataSource={data}
//                             dataSource={this.props.list}
//                             renderItem={(item, index) => (<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
//                         ></List>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default TodoListUI;
