const fn = (prices) => {
  let min = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    max = Math.max(prices[i] - min, max);
    min = Math.min(prices[i], min);
  }
  console.log(min, max);
};
fn([7, 1, 5, 3, 6, 4]);

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let money = 0;
  for (let price of prices) {
    buy = Math.min(buy, price);
    money = Math.max(money, price - buy);
  }
  console.log(buy, money);
  return money;
};
maxProfit([7, 1, 5, 3, 6, 4]);
// 示例 1:
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
// 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// 示例 2:
// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
