
## 🚀 Merge Two Sorted Linked Lists

This project provides an efficient JavaScript solution to the **"Merge Two Sorted Lists"** problem, commonly asked in technical interviews and platforms like LeetCode.

---

### 🧠 Problem Description

You are given the heads of two **sorted singly linked lists**, `list1` and `list2`.

Merge the two lists into one **sorted linked list** and return the head of the new list. The new list should be made by splicing together the nodes of the first two lists.

---

### ✅ Example

**Input:**

```

list1 = 1 -> 3 -> 5
list2 = 2 -> 4 -> 6

```

**Output:**

```

Merged list = 1 -> 2 -> 3 -> 4 -> 5 -> 6

````

---

### 🔧 Solution Highlights

* ✅ Uses **dummy head node** (`prehead`) for clean handling
* ✅ Merges using **two-pointer technique**
* ✅ No additional space required (`O(1)` space complexity)
* ✅ Linear time complexity `O(n)` where n is total nodes
* ✅ Works with manually created linked lists (not arrays)

---

### 📁 Files Included

* `mergeTwoSortedLists.js` – JavaScript implementation using a custom `ListNode` constructor

---

### 🚀 How to Run

1. Make sure you have **Node.js** installed.
2. Clone the repository:

   ```bash
   git clone https://github.com/safwanmv/merge-two-sorted-lists.git
   cd merge-two-sorted-lists
````

3. Run the script:

   ```bash
   node mergeTwoSortedLists.js
   ```

---

### 📚 Key Concepts Learned

* Manual **Linked List** creation in JavaScript
* Efficient **merge logic** for sorted linked lists
* Use of **dummy head technique**
* In-place pointer manipulation (no extra memory)

---

### 📌 License

This project is open-source and available under the [MIT License](LICENSE).

