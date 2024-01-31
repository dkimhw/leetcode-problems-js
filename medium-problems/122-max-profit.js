
/*

Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

Understand the Problem
---------------------------
- Input: array of integers `prices`
- Output: integer
  - Maximum profit that is possible given input
  - If no positive profit possible - then return
- Rules
  - You can decide to buy or sell stock
  - You can hold one share at any time
  - You can buy and sell on same day


Example
---------------------------
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

Input: prices = [1,2,3,4,100]
Output: 99
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 100), profit = 100-1 = 99.
Total profit is 99.

2 - 1 = 1
3 - 2 = 1
4 - 3 = 1
100 - 4 = 96


Algorithms
---------------------------

Brute Force:
- Calculate every possible combination of transactions and pick the combination with most profit
- O(n^n) - extremely inefficient

Greedy:
- Add to profit any time you find a price that is higher than a previous price
  - assumes you buy & sell any time you have a lower price & higher price
- Loop through `prices`
  - if prices[i] > prices[i - 1] then add to profit

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0;

  for (let idx = 1; idx < prices.length; idx += 1) {
    if (prices[idx] > prices[idx - 1]) profit += prices[idx] - prices[idx - 1];
  }

  return profit;
}

module.exports = maxProfit;
