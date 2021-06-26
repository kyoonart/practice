// 统计文件夹下的所有文件
const fs = require("fs");
const path = require("path");
const readDir = (entry, result = []) => {
  const dirInfo = fs.readdirSync(entry);
  console.log(dirInfo);
  dirInfo.forEach((file) => {
    const location = path.join(entry, file);
    const info = fs.statSync(location);
    if (info.isDirectory()) {
      readDir(location, result);
    } else {
      result.push(file);
    }
  });
  return result;
};
// let res = readDir(__dirname);
console.log(path.resolve("../目录1", "./目录2", "/目录3"));
// console.log(res);
// path.resolve();

// path.join();
