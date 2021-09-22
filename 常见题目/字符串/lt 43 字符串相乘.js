const multiply = (str1, str2) => {
  const ans = [0];
  for (let i = str1.length - 1; i >= 0; i--) {
    for (let j = str2.length - 1; j >= 0; j--) {
      let index = str1.length - 1 - i + (str2.length - 1 - j);
      let cur = parseInt(str1[i], 10) * parseInt(str2[j], 10);
      while (cur) {
        while (index >= ans.length) ans.push(0);
        cur += ans[index];
        ans[index] = cur % 10;
        cur = Math.floor(cur / 10);
        index++;
      }
    }
  }
  return ans.reverse().join("");
};
console.log(multiply("123", "456"));
