function myNew(fn,...args) {
   let newObj=Object.create(fn.prototype);
   let result=fn.apply(newObj,args);
   return (result && typeof result ==='object')?result:newObj;
}
