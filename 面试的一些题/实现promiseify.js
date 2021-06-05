
const promisify = (fn)=> {
}
eg:
ws.readFile = (url, callback) => {}
ws.readFile('./abc.jpg', (err,data)=>{
console.log(data);
})
const readFilePromisise = promisify(ws.readFile);
(async ()=>{
const data = await readFilePromisise('/etc/xxx.jpg')
console.log(data);
})()
//
const promisify = (fn)=> {
    return  (...args) => {
          return new Promise((resolve,reject)=>{
              args.push((err,data)=>{
                  if(err) reject(err);
                  else resolve(data);
              })
            fn.apply(null,args); // 真正执行函数的地方
          })
      }
 }