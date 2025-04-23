# Day 2: Two Sum

**Problem:** [Two Sum](https://leetcode.com/problems/two-sum/)

## Approach
Used a **hash map** (JavaScript `Map`) to store the numbers and their indices as we iterate through the array. For each number, we check if its complement (i.e., `target - current number`) is already in the map. If it is, we return the indices of the current number and its complement.

## Complexity
- Time: **O(n)**, where `n` is the number of elements in the array.
- Space: **O(n)**, because we store up to `n` elements in the hash map.
