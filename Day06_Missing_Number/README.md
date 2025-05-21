
# 🧩 Missing Number (LeetCode #268)

## 📝 Problem Statement

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the **only number** in the range that is **missing** from the array.

### 🧠 Constraints:
- `n == nums.length`
- `1 <= n <= 10⁴`
- `0 <= nums[i] <= n`
- All numbers of `nums` are **unique**

---

## 🧪 Examples

### Example 1:
```

Input: nums = \[3, 0, 1]
Output: 2

```

### Example 2:
```

Input: nums = \[0, 1]
Output: 2

```

### Example 3:
```

Input: nums = \[9,6,4,2,3,5,7,0,1]
Output: 8

```

---

## ✅ Approach

### 🔹 Formula Method (Optimal: O(n) time, O(1) space)

Use the formula for the sum of the first `n` natural numbers:
```

Sum = n \* (n + 1) / 2

````
Subtract the sum of the elements in the array from this expected sum.

### 🔸 JavaScript Code:
```js
var missingNumber = function(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
};
````

---

## 💡 Time & Space Complexity

* **Time Complexity:** `O(n)` — One pass to sum array
* **Space Complexity:** `O(1)` — Constant extra space

---


