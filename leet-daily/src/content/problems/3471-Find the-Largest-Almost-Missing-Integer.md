---
id: 9/3471
title: Find the Largest Almost Missing Integer
slug: Find-the-Largest-Almost-Missing-Integer
difficulty: Easy
date: 2026-08-18
topics:
  - Array
  - HashTable
language:
  - Java
leetcodeUrl: https://leetcode.com/problems/find-the-largest-almost-missing-integer/description/
---

# Problem

You are given an integer array nums and an integer k.

An integer x is almost missing from nums if x appears in exactly one subarray of size k within nums.

Return the largest almost missing integer from nums. If no such integer exists, return -1.

A subarray is a contiguous sequence of elements within an array.

 

## Example

```text
Example 1:

Input: nums = [3,9,2,1,7], k = 3
Output: 7

Explanation:

1 appears in 2 subarrays: [9, 2, 1] and [2, 1, 7].
2 appears in 3 subarrays: [3, 9, 2], [9, 2, 1], [2, 1, 7].
3 appears in 1 subarray: [3, 9, 2].
7 appears in 1 subarray: [2, 1, 7].
9 appears in 2 subarrays: [3, 9, 2], and [9, 2, 1].
We return 7 since it is the largest integer that appears in exactly one subarray of size k.

Example 2:

Input: nums = [3,9,7,2,1,7], k = 4
Output: 3

Explanation:

1 appears in 2 subarrays: [9, 7, 2, 1], [7, 2, 1, 7].
2 appears in 3 subarrays: [3, 9, 7, 2], [9, 7, 2, 1], [7, 2, 1, 7].
3 appears in 1 subarray: [3, 9, 7, 2].
7 appears in 3 subarrays: [3, 9, 7, 2], [9, 7, 2, 1], [7, 2, 1, 7].
9 appears in 2 subarrays: [3, 9, 7, 2], [9, 7, 2, 1].
We return 3 since it is the largest and only integer that appears in exactly one subarray of size k.
```

## Approach

Try to make fool to problem itself. because sometimes you will never find the easiest solution by thinking only problem statement,
</br>
You would have to thing more practically.

In the given problem they are directly saying like use sliding window, though they are clearly mentioning that there definately all values between consecutive slides are going to be repeat.
</br>

Except edge cases like if the k is 1 or the k is equal to size of n. so there should have only three base cases like,
```text
if(k == n){
    ...
}
```
For this case, you would only check the maximum element from whole array.
```text
else if(k == 1){
    ...
}
```
For this case, you would have to find maximum element which occurs only ones in the array. So that reasong we are using HashMap to store the frequency count of each unique element.

```text
else{
    //check only whether nums[0] and nums[n-1] are repeating or not
}        
```
For this case, You would have to find whether 1st or last element is occuring more than ones in the array,
 - if no: return the maximum between both of them;
 - if yes: check whether the first is repeating or last.

Then return max if found else -1.

## Solution

```java
class Solution {
    private int kEqualOne(int [] nums){
        int n = nums.length;
        int max = -1;
        Map<Integer, Integer> map = new HashMap<>();
        for(int i : nums){
            map.put(i, map.getOrDefault(i, 0) + 1);
        }
        for(int i : nums){
            if(map.get(i) == 1){
                max = Math.max(max, i);
            }
        }
        return max;
    }
    public int largestInteger(int[] nums, int k) {
        int n = nums.length;
        if(k == n){
            int max = -1;
            for(int i : nums){
                max = Math.max(max, i);
            }
            return max;
        }
        if(k == 1){
            return kEqualOne(nums);
        }
        //check if first repeat
        boolean firstRepeat = false;
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[0]) {
                firstRepeat = true;
                break;
            }
        }
        boolean lastRepeat = false;
        for (int i = 0; i < n-1; i++) {
            if (nums[i] == nums[n-1]) {
                lastRepeat = true;
                break;
            }
        }
        int max = -1;
        if (!firstRepeat) max = Math.max(max, nums[0]);
        if (!lastRepeat) max = Math.max(max, nums[n - 1]);
        return max;
    }
}
```

## Complexity
```text
Time Complexity: O(n)

Space Complexity: O(n) - since we are using HashMap
```

## Key Takeaway

Boundary elements seem to belong to only one window, but duplicate values elsewhere in the array break local index assumptions

To check if an element appears exactly once, a single-pass HashSet is insufficient—you must build complete counts using a HashMap or two sets

Separate extreme bounds (k = 1 and k = n) from intermediate cases (1 < k < n) to simplify your logic safely before generalizing.