
/*


Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150


Understand the Problem
---------------------------
- Input: array of integers
  - each element denotes the price of a given stock on ith day
- Output: integer
  - max profit possible - choose one day to buy & sell on another day
  - if no profit - return zero

Examples
---------------------------
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Input: prices =  [2, 3, 4, 8, 1, 3]
Output: 6


Algorithms
---------------------------

Attempt 1:
- We can brute force it by doing nested loops. O(n^2)

Attempt 2:
- One idea is we can maintain two variables that tracks the buy & sell values
- Replacement logic
  - If currVal is < buy or None: replace buy and sell
  - If currVal is > sell or None: replace buy and sell
- Okay then track profit
  - Keep replacing it but only replace profit if we find something that's better
  - At each iteration: check price[buy] - price[sell] > profit then replace it
- Return price[buy] - price[sell] if > 0 else return 0



*/


/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
  let profit = 0
  let buy = null;
  let sell = null;

  for (let idx = 0; idx < prices.length; idx++) {
    let currVal = prices[idx];
    if (currVal < buy || buy === null) {
      buy = currVal;
      sell = null;
    } else if (currVal > sell || sell == null) {
      sell = currVal;
    }

    if (buy !== null && sell !== null) {
      let currProfit = sell - buy;
      if (currProfit > profit) profit = currProfit;
    }
  }
  return profit;
};


module.exports = maxProfit;
