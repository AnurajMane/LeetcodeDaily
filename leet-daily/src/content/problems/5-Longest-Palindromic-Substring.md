---
id: 6/5
title: Longest Palindromic Substring
slug: Longest-Palindromic-Substring
difficulty: Medium
date: 2026-08-14
topics:
  - Two Pointers
  - String
  - Dynamic Programming
  - Manacher
language:
  - C++
leetcodeUrl: https://leetcode.com/problems/longest-palindromic-substring/description/
---

# Problem

Given a string s, return the longest palindromic substring in s.

## Example

```text
Input: s = "babad"
Output: "bab"

Input: s = "cbbd"
Output: "bb"
```

## Approach

You are given the string and you have to return longest palindromic string.

you have to decide first how you would check palindrome:
 - by reversing string & match to original string O(n^2)
 - by two pointer O(n/2)

I would prefer two pointer for n/2 TC.

```java
int i = 0;
int j = s.length();
while(i < j){
    if(s[i] == s[j]){
        i++;
        j--;
    }
    else{
        return false;
    }
}
```

You can decide here if you want to use while loop or go for recursion.
```java
checkPalindrome(String s, int i, int j){
    if(i >= j){
        return true;
    }
    if(s[i] == s[j]){
        return checkPalindrome(s, i + 1, j - 1);
    }
    return false;
}
```

So, now we have our <strong>checkPalindrome(String s, int i, int j)</strong> recursion function and we will just pass the given string to the same function

Now we are using two variables i.e maxLength and startPoint. so

```java
s.substring(startPoint, startPoint + maxLength);
                i           j - i + 1
```



## Solution

```java
class Solution {
    private boolean checkPalindrome(String str, int i, int j){
        if(i >= j) return true;
        if(str.charAt(i) == str.charAt(j)){
            return checkPalindrome(str, i + 1, j - 1);
        }
        return false;
    }
    public String longestPalindrome(String s) {
        int sz = s.length();
        int maxLength = Integer.MIN_VALUE;
        int startPoint = 0;

        for(int i = 0; i < sz; i++){
            for(int j = i; j < sz; j++){
                if(checkPalindrome(s, i, j)){
                    if((j - i + 1) > maxLength){
                        maxLength = j - i + 1;
                        startPoint = i;
                    }
                }
            }
        }
        return s.substring(startPoint, startPoint + maxLength);
    }
}
```

## Complexity
```text
Time: O(n^3) - nested loops * checkPalindrome()

Space: O(1)

```

### Recursion + Memoization

Next at some iterations, there will be some basic repeatable checks we are going to track tackle.

So we are going to memoize some pairs that are already checked, so now,

```cpp
class Solution {
    int t[1001][1001];
private:
    bool checkPalindrome(string& s, int i, int j){
        if(i >= j){
            return 1;
        }
        if(t[i][j] != -1){
            return t[i][j];
        }
        if(s[i] == s[j]){
            return t[i][j] = checkPalindrome(s, i + 1, j - 1);
        }
        return t[i][j] = 0;
    }
public:
    string longestPalindrome(string s) {
        memset(t, -1, sizeof(t)); //preallocate the size and initialize instead of garbage values
        int n = s.length();
        int maxLength = INT_MIN;
        int startPoint = 0;

        for(int i = 0; i < n; i++){
            for(int j = i; j < n; j++){ //j = i because j < i i.e the indices represent an invalid substring range
                if(checkPalindrome(s, i, j)){
                    if(j - i + 1 > maxLength){
                        maxLength = j - i + 1;
                        startPoint = i;
                    }
                }
            }
        }
        return s.substr(startPoint, maxLength);
    }
};
```

## Complexity

```text
Time: O(n^2 * n/2) - nested loops * checkPalindrome()

Space: O(n^2) - because we are preoccupying the space for all

```

#### This could have solved with Expand Arround Centre approach so that can eliminate DP of O(n^2)

The Expand Around Center approach eliminates dynamic programming's O(N^2) space overhead by considering each character (and character pair) as a potential center and growing outward as long as matching characters are found.

Since palindromes read the same forward and backward, every palindrome expands symmetrically around a center:
 - Odd-length palindromes have $1$ center character (e.g., "aba" centered at 'b').
 - Even-length palindromes have 2 center characters (e.g., "abba" centered between 'b' and 'b').With N characters, there are 2N - 1 total centers (N single characters + N - 1 adjacent pairs).

 ```cpp
class Solution {
private:
    int expandAroundCenter(string& s, int left, int right) {
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }
        // Length of palindrome is (right - 1) - (left + 1) + 1
        return right - left - 1;
    }

public:
    std::string longestPalindrome(std::string s) {
        if (s.empty()) return "";

        int start = 0;
        int maxLen = 0;

        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);     // Odd-length center
            int len2 = expandAroundCenter(s, i, i + 1); // Even-length center

            int len = max(len1, len2);

            if (len > maxLen) {
                maxLen = len;
                start = i - (len - 1) / 2; // Derive starting index from center and length
            }
        }

        return s.substr(start, maxLen);
    }
};
```

## Key Takeaway

Finding the longest palindromic substring using dynamic programming or center expansion.

Next Consider: Can you achieve O(n) time complexity by exploiting the symmetry of palindromes with Manacher's algorithm?
