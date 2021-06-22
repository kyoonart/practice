import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import axios from "axios";
import { getListAction } from "./actionCreators";
//业务逻辑的地方
// generator ES6的写法
function* mySage() {
  //等待监听
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  const res = yield axios.get(
    "https://mobile-ms.uat.homecreditcfc.cn/mock/60d19ebc4a9639001d427ea0/example/info#!method=get"
  );
  // console.log("sagadata", res);
  const action = getListAction(res.data);
  yield put(action);
}

export default mySage;
