// 给定一棵树，请你输出所有从根节点到叶子节点的路径组成的数字之和
import { *asnodeOps } from 'web/runtime/node-ops';
let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

// 例如以上的树，总共有从根节点到叶子节点的路径3条，分别为：1->2->4,1->2->5,1->3
// 则计算方法为：124+125+13=262
