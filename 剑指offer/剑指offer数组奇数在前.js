function reOrderArray(array)
{
   let l=0,r=0;
   let newarr=[];
   for(let i=0;i<array.length;i++){
       if(array[i]%2!==0){
           r++
       }
   }
   for(let i=0;i<array.length;i++){
       if(array[i]%2===0){
        newarr[r++]=array[i]
       }
       else{
           newarr[l++]=array[i]
       }
   }
   return newarr;
}
// console.log(reOrderArray([2,5,1,2,6,2,3,6,5,1,2,9]));
console.log(52&51);
