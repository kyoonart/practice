import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
// 仓库管理员
const defaultState = {
  inputValue: "Write Something",
  list: ["今天干什么", "明天干啥呢", "后天做咩呀"],
};

// eslint-disable-next-line
export default (state = defaultState, action) => {
  console.log("reducer", state, action); // state是原来的值， action是现在变化的值
  // Reducer 里只能接受state, 不能改变state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    console.log(newState);
    newState.list.splice(action.index, 1);
    return newState;
  }
  // ajax 获取数据后，然后这里改变list
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list;
    return newState;
  }
