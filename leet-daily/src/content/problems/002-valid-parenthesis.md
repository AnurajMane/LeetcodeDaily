---
id: 2
title: Valid Parentheses
slug: valid-parentheses
difficulty: Easy
date: 2026-08-10
topics:
  - String
  - Stack
language: Java
leetcodeUrl: https://leetcode.com/problems/valid-parentheses/
---

# Problem

Given a string containing brackets, determine whether the brackets
are correctly matched and properly nested.

## Example

```text
Input:
s = "()[]{}"

Output:
true
```

## Approach

Use a stack.

When an opening bracket appears, push it onto the stack.

When a closing bracket appears, check whether it matches the most
recent opening bracket.
---

## Solution
```text
class Solution {
    public boolean isValid(String s) {

        Stack<Character> stack = new Stack<>();

        for (char ch : s.toCharArray()) {

            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            } else {

                if (stack.isEmpty()) {
                    return false;
                }

                char top = stack.pop();

                if (ch == ')' && top != '(') {
                    return false;
                }

                if (ch == ']' && top != '[') {
                    return false;
                }

                if (ch == '}' && top != '{') {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
}
```
---
## Complexity
```text
Time: O(n)

Space: O(n)
```
---

## Key Takeaway

A stack naturally matches the last opened bracket with the next
closing bracket.

---