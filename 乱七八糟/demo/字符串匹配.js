const search = (text, match) => {
  let tLength = text.length;
  let mLength = match.length;
  for (let i = 0; i < tLength - mLength; i++) {
    let j = 0;
    for (j = 0; j < mLength; j++) {
      if (text[i + j] !== match[j]) {
        break;
      }
    }
    if (j === mLength) {
      return true;
    }
  }
  return false;
};
let res = search("abcefg", "ab");
console.log(res);
