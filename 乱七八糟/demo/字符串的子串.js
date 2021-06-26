const findAllStr = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let s = str.slice(i, j);
      if (!result.includes(s)) {
        result.push(s);
      }
    }
  }
  console.log(result);
  return result;
};
findAllStr("abc");
'abc'=>[ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]