---
id: 1
title: Two Sum
slug: two-sum
difficulty: Easy
date: 2026-08-09
topics:
  - Array
  - HashMap
language: Java
leetcodeUrl: https://leetcode.com/problems/two-sum/
---

# Problem

Given an array of integers and a target value, find two different
elements whose sum equals the target and return their indices.

## Example

```text
Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[0, 1]

```
## Approach

We can use a HashMap to remember the values that we have already seen.

For every element, calculate the value that we need:

```text
required = target - current
```
If that value already exists in the HashMap, we have found the answer.

Otherwise, store the current value and its index.

## Solution

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            int required = target - nums[i];

            if (map.containsKey(required)) {
                return new int[] {
                    map.get(required),
                    i
                };
            }

            map.put(nums[i], i);
        }

        return new int[] {};
    }
}
```

## Complexity

```text
Time: O(n)

Space: O(n)

```

## Key Takeaway

The main idea is to use extra memory to achieve faster lookup.

Instead of checking every possible pair, we can find the required
complement using a HashMap.