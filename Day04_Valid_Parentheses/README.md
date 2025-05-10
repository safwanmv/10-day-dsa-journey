

```markdown
# 🧩 Valid Parentheses

## ✅ Problem Statement

Given a string containing only the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the string is **valid**.

A string is considered valid if:
1. Every opening bracket has a corresponding closing bracket.
2. Brackets are closed in the correct order.

---

## 🧠 Approach

We use a **stack** to keep track of expected closing brackets.  
A **map** (like a rulebook) helps us match each opening bracket to its correct closing one.

- When we find an opening bracket, we push its expected closer onto the stack.
- When we find a closing bracket, we check if it matches the top of the stack.
- If everything matches and the stack is empty at the end, the string is valid.

---

## 📦 Real-Life Analogy

Think of opening and closing different types of boxes or containers:
- When you open a round container `(`, you should close it with `)`.
- You can't close a box you never opened.
- You must close the **last opened** box **first**, like how a stack works.

---

## 🧪 Examples

- Input: `{[()]}` → Output: `true` ✔️  
- Input: `{[(])}` → Output: `false` ❌

---

## ⚙️ File Structure

```

📁 valid-parentheses/
├── validParentheses.js    # JavaScript code
└── README.md              # Explanation and problem description

```

---

## 📈 Complexity

- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)` (due to the stack)

---

## ✨ Extra Tip

Use this technique whenever you need to check for **balanced symbols**, like:
- HTML/XML tags
- Nested formulas or parentheses
- Code syntax validation

