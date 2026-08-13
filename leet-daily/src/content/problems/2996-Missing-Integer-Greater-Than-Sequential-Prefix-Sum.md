---
id: 3
title: Smallest Missing Integer Greater Than Sequential Prefix Sum
slug: Smallest-Missing-Integer-Greater-Than-Sequential-Prefix-Sum
difficulty: Easy
date: 2026-08-11
topics:
  - Array
  - HashTable
  - Sorting
language: Java
leetcodeUrl: https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/description/
---

# Problem

You are given a 0-indexed array of integers nums.

A prefix nums[0..i] is sequential if, for all 1 <= j <= i, nums[j] = nums[j - 1] + 1. In particular, the prefix consisting only of nums[0] is sequential.

Return the smallest integer x missing from nums such that x is greater than or equal to the sum of the longest sequential prefix.

## Example

```text
Input:
nums = [1,2,3,2,5]
Output = 6

Input:
nums = [3,4,5,1,12,14,13]
Output: 15

Input:
nums = [29,30,31,32,33,34,35,36,37]
Output: 297

Input:
nums = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,7,10,10,6,3,1,1]
Output: 1073

```
## Approach

First of all I have to think what exactly sequestioal prefix sum means.
Sequential sum mean calculating the sum of elements at 0.....i, i.e:

```text
nums[i] = nums[i-1] + 1;
```

if any element (sequence-sum) is not present in array then that's an answer.


Declare the HashSet and store each element of input array to it.
why HashSet?
 - I can continue with the TreeSet, but it's time complexity would be O(log n).
 - HashSet's contains() method is running in O(1) time.
 - then I can also continue with the Primitive Boolean Array over HashSet. Instead of creating objects in memory with HashSet<Integer>, use a primitive fixed-size boolean array boolean[] present = new boolean[] for O(1) lookups with zero garbage collection pressure. but for this aproach I would have to calculate the sum of all elements in input array, since we don't have the exact idea of how many elements are there or they are smaller of larger upto 8 bits.

Then simply add all elements of input array to HashSet (Handles duplication case).

So then calculate the sum till our main condition is goind to satisfy i.e nums[i] = nums[i-1] + 1;

Start another while() loop starting from that calculated sum, till we find next Smallest Missing Integer Greater Than Sequential Prefix Sum and inside loop update the sum by incrementing it by 1.

The while loop will exit if the calculated sum is does not contains in HashSet.
Return the sum itself.

## Solution

```java
class Solution {
    public int missingInteger(int[] A) {
        int sum = A[0];
        Set<Integer> set = new HashSet<>();
        for (int num : A) {
            set.add(num);
        }

        for (int i = 1; i < A.length; i++) {
            if (A[i] == A[i - 1] + 1) {
                sum += A[i];
            } else {
                break;
            }
        }

        while (set.contains(sum)) {
            sum++;
        }

        return sum;
    }
}
```

## Complexity

```text
Time: O(n)

Space: O(n)  (by using boolean array it can be reduce to O(1))

```

## Key Takeaway

The main idea is to use extra memory to achieve faster lookup.

For such a questions, we just have to think about early exit in the loop and sequential prefix sum.