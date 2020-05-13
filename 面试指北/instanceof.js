 function instanceOf(left, right) {
     let prototype = right.prototype;
     left = left.__proto__;
     while (1) {
         if (left == null || left == undefined) {
             return false;
         } else if (prototype == left) {
             return true;
         }
         left = left.__proto__;
     }
 }