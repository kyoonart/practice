/* eslint-disable */
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store/index.js"; // 等价于import store from './store
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./store/actionTypes";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getListAction,
  getTodoList,
  getMyListAction,
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState());
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    //订阅模式 > 处理input中的value
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
    // 增加
    this.clickBtn = this.clickBtn.bind(this);
    // 删除
    this.deleteItem = this.deleteItem.bind(this);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />

      // <div style={{ margin: '10px' }}>
      //     <div>
      //         <Input
      //             placeholder={this.state.inputValue}
      //             style={{ width: '250px', marginRight: '10px' }}
      //             onChange={this.changeInputValue}
      //             value={this.state.inputValue}
      //         />
      //         {/* <Input placeholder='Write Something' style={{ width: '250px', marginRight:'10px' }} /> */}
      //         <Button
      //             type='primary'
      //             onClick={this.clickBtn}
      //         > 增加 </Button>
      //         <div style={{ margin: '10px', width: '300px' }}>
      //             <List
      //                 bordered
      //                 // dataSource={data}
      //                 dataSource={this.state.list}
      //                 renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
      //             ></List>
      //         </div>
      //     </div>
      // </div>
    );
  }

  //生命周期函数
  componentDidMount() {
    // then 接收的是一个方法,如果有值，就返回一个res
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //     // console.log(res)
    //     const data = res.data
    //     const action = getListAction(data)
    //     store.dispatch(action)
    // })

    // 采用 redux-thunk
    // const action = getTodoList();
    // store.dispatch(action);

    // 采用 redux-saga
    const action = getMyListAction();
    store.dispatch(action);
    console.log("actionsaga", action);
  }

  changeInputValue(e) {
    // console.log(e.target.value)
    // const action = {
    //     type: 'changeInput',  //这个action是什么东西
    //     value: e.target.value //改变成什么值
    // }
    const action = changeInputAction(e.target.value);
    store.dispatch(action); // store 就相当于一个仓库
  }

  storeChange() {
    this.setState(store.getState());
  }

  clickBtn() {
    // console.log('jspang')
    // const action = {
    //     type: 'addItem',
    // }
    const action = addItemAction();
    //dispatch相当于注入到 store
    store.dispatch(action);
  }

  deleteItem(index) {
    // console.log('deleteItem')
    // const action = {
    //     type: 'deleteItem',
    //     index
    // }
    const action = deleteItemAction(index);
    //dispatch相当于注入到 store
    store.dispatch(action);
  }
}

export default TodoList;
