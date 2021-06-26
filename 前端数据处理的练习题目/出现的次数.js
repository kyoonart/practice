//**出现的次数 /
function count(words) {
  let diffrent_word_number = Array.from(new Set(words)).length;
  let dictionary = {};
  words.map((word) => {
    dictionary[word] ? dictionary[word]++ : (dictionary[word] = 1);
  });
  return { dictionary, diffrent_word_number };
}
console.log(
  count([
    "aa",
    "bb",
    "cc",
    "dd",
    ,
    "233",
    "aa",
    "bb",
    "cc",
    "dd",
    "ef",
    "fd",
    "bb",
    "ac",
    "ac",
    "bf",
    "cc",
  ])
);
