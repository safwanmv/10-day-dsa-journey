# Day 3: Best Time to Buy and Sell Stock

**Problem:** [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Approach
Used a single-pass **greedy** approach. While iterating through the `prices` array, we track the minimum price so far. At each step, we calculate the potential profit by subtracting the current minimum price from the current price, and update the maximum profit if the potential profit is higher.

## Complexity
- Time: **O(n)**, where `n` is the number of days (length of the array).
- Space: **O(1)**, only constant space is used.
