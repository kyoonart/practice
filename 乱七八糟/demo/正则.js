let str =
  "?redirectAfterLogin=/account/non-direct-invitation/C8x2J35USD?accountId={{accountId}";
let res = str
  .match(/non-direct-invitation.*?\?/g)
  .join("")
  .match(/\/.*?\?/g);
console.log(res);
