---
id: 4/2958
title: Length of Longest Subarray With at Most K Frequency
slug: Length-of-Longest-Subarray-With-at-Most-K-Frequency
difficulty: Medium
date: 2026-08-12
topics:
  - Array
  - HashTable
  - HashMap
  - Sorting
language:
  - Java
  - C++
leetcodeUrl: https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/description/
---

# Problem

You are given an integer array nums and an integer k.

The frequency of an element x is the number of times it occurs in an array.

An array is called good if the frequency of each element in this array is less than or equal to k.

Return the length of the longest good subarray of nums.

A subarray is a contiguous non-empty sequence of elements within an array.

## Example

```text
Input:
nums = [1,2,3,1,2,3,1,2], k = 2
Output: 6

Input: 
nums = [1,2,1,2,1,2,1,2], k = 1
Output: 2

Input:
nums = [5,5,5,5,5,5,5], k = 4
Output: 4

```
## Approach

It's a problem of slinding window, we can understand it by problem statement only. it's telling exactly we have to find subarray, so this is a sliding window problem.


Here window can grow or shring based on k condition

I'll have to store the frequency of each element in the window. for this I'll go with Map interface and use HashMap to store Key-Value pair (nums[i], frequency) and O(1) lookup.

So, now we are not using any nested loops, we will try to solve in O(n) TC.

Maintain the map with element -> frequency and one result variable to indicate the size of subarray and also result variable is not going to decrease once it's increased.

Then I'll have to maintain one another variable i.e hit. hit maintains the count of elements who's frequency is crossing k.

If the value of hit is greater than 0, that means the subarray is not good and we are going to shrink the window till the hit comes down to 0.


## Solution

```java
class Solution {
    public int maxSubarrayLength(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();

        int i = 0;
        int j = 0;
        int result = 0;
        int hit = 0;

        while (j < nums.length) {
            map.put(nums[j], map.getOrDefault(nums[j], 0) + 1);

            if(map.get(nums[j]) == k+1){
                hit++;
            }
            if(hit > 0){
                map.put(nums[i], map.get(nums[i]) - 1);
                if(map.get(nums[i]) == k){
                    hit--;
                }
                i++;
            }
            if(hit == 0){
                result = Math.max(result, j - i + 1);
            }
            j++;
        }
        return result;
    }
}
```

```cpp
class Solution {
public:
    int maxSubarrayLength(vector<int>& nums, int k) {
            int n = nums.size();
            unordered_map<int, int> map;

            int i = 0;
            int j = 0;
            int result = 0;
            int hit = 0;

            while (j < n) {
                map[nums[j]]++;
            
                if(map[nums[j]] == k+1){
                    hit++;
                }
                
                if(hit > 0){
                    map[nums[i]]--;
                if(map[nums[i]] == k){
                    hit--;
                }
                i++;
            }
            if(hit == 0){
                result = max(result, j - i + 1);
            }
            j++;
        }
        return result;
    }
};
```

### Even Optimized with C++

```cpp
static const int __ = []() {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(NULL);
    return 0;
}();

class Solution {
public:
    int maxSubarrayLength(vector<int>& nums, int k) {
        // Fast I/O
        ios_base::sync_with_stdio(false);
        cin.tie(NULL);

        unordered_map<int, int> count;
        count.reserve(nums.size()); // Pre-allocate map buckets

        int i = 0, max_len = 0;
        for (int j = 0; j < nums.size(); ++j) {
            count[nums[j]]++;

            // Shrink window from left until nums[j] frequency is valid
            while (count[nums[j]] > k) {
                count[nums[i]]--;
                i++;
            }
            max_len = max(max_len, j - i + 1);
        }
        return max_len;
    }
};
```

## Complexity

```text
Time: O(n)

Space: O(n)

```

## Key Takeaway

The main idea is to use extra memory to achieve faster lookup.

 - For JAVA, Primitive Boxing Overhead HashMap<Integer, Integer> boxes primitive int values into Integer objects. This causes heavy cache missing (pointer chasing) and Garbage Collector (GC) pressure.

 - Optimization: Set initial capacity on the HashMap via new HashMap<>(n) to prevent resizing during iteration.