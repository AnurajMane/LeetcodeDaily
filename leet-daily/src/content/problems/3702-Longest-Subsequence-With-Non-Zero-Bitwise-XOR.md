---
id: 7/3702
title: Longest Subsequence With Non-Zero Bitwise XOR
slug: Longest-Subsequence-With-Non-Zero-Bitwise-XOR
difficulty: Medium
date: 2026-08-15
topics:
  - Array
  - Bit Manipulatiuon
language:
  - C++
leetcodeUrl: https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor/description/
---

# Problem

You are given an integer array nums.

Return the length of the longest subsequence in nums whose bitwise XOR is non-zero. If no such subsequence exists, return 0.

 

## Example

```text
Input: nums = [1,2,3]

Output: 2

Explanation:

One longest subsequence is [2, 3]. The bitwise XOR is computed as 2 XOR 3 = 1, which is non-zero.


Input: nums = [2,3,4]

Output: 3

Explanation:

The longest subsequence is [2, 3, 4]. The bitwise XOR is computed as 2 XOR 3 XOR 4 = 5, which is non-zero.
```

## Approach

The goal is to find the maximum number of elements you can select from nums such that their bitwise XOR sum is strictly greater than 0 (> 0).
 - If Total XOR > 0:
   - You can include all $N$ elements (sz). Their combined XOR is already greater than zero.
 - If Total XOR == 0:
   - You cannot use all N elements because their XOR is 0.
   - If you remove any single non-zero element nums[i], the XOR sum of the remaining N - 1 elements becomes > 0.
   - Therefore, if at least one element in nums is non-zero, the answer is always sz - 1.
 - If All Elements are 0:
   - Any subsequence will have an XOR sum of 0, so the maximum valid length is 0.


## Solution

```cpp
class Solution {
public:
    int longestSubsequence(vector<int>& nums) {
        int sz = nums.size();
        int totalXor = 0;
        bool hasNonZero = false;
        for (int i = 0; i < sz; i++) {
            totalXor ^= nums[i];
            if(nums[i] > 0) hasNonZero = true;
        }
        if (totalXor > 0){
            return sz;
        }
        if(hasNonZero){
            return sz-1;
        }
        return 0;
    }
};
```

## Complexity
```text
Time Complexity: O(n) — A single pass through the array.

Space Complexity: O(1)
```

## Key Takeaway

When a problem asks for a maximum/longest subsequence under a global bitwise condition, always look at the entire array first.

If the full array fails the condition by being 0, try removing the minimal possible number of elements (1 element) to fix it, rather than trying a complex dynamic programming or greedy subset-building approach.