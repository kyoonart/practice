function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else return fib(n - 1) + fib(n - 2);
}
console.time("fib");
// console.log(fib(50));
console.timeEnd("fib");

function fib1(n) {
  let memo = [];
  return helper(memo, n);
}
// 斐波那契数列 缓存

function helper(memo, n) {
  if (n == 1 || n == 2) {
    // 前两个
    return 1;
  }
  // 如果有缓存，直接返回
  if (memo[n]) return memo[n];
  // 没缓存
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  // console.log(memo[n]);

  return memo[n];
}
console.time("fib");
// console.log(fib1(50));
console.timeEnd("fib");
// 最简单的动态规划
function fib3(n) {
  let dp = [];
  console.log("ss");
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.time("fib");
console.log(fib3(50));
console.timeEnd("fib");

function fib(n) {
  let memo = [];
  return help(memo, n);
}
function help(memo, n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = help(memo, n - 1) + help(memo, n - 2);
  return memo[n];
}
