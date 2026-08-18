---
id: 8/1563
title: Stone Game V
slug: Stone-Game-V
difficulty: Hard
date: 2026-08-16
topics:
  - Array
  - Math
  - Dynamic Programming
  - Game Theory
language:
  - C++
leetcodeUrl: https://leetcode.com/problems/stone-game-v/description/
---

# Problem

There are several stones arranged in a row, and each stone has an associated value which is an integer given in the array stoneValue.

In each round of the game, Alice divides the row into two non-empty rows (i.e. left row and right row), then Bob calculates the value of each row which is the sum of the values of all the stones in this row. Bob throws away the row which has the maximum value, and Alice's score increases by the value of the remaining row. If the value of the two rows are equal, Bob lets Alice decide which row will be thrown away. The next round starts with the remaining row.

The game ends when there is only one stone remaining. Alice's score is initially zero.

Return the maximum score that Alice can obtain.

 

## Example

```text
Input: stoneValue = [6,2,3,4,5,5]
Output: 18
Explanation: In the first round, Alice divides the row to [6,2,3], [4,5,5]. The left row has the value 11 and the right row has value 14. Bob throws away the right row and Alice's score is now 11.
In the second round Alice divides the row to [6], [2,3]. This time Bob throws away the left row and Alice's score becomes 16 (11 + 5).
The last round Alice has only one choice to divide the row which is [2], [3]. Bob throws away the right row and Alice's score is now 18 (16 + 2). The game ends because only one stone is remaining in the row.


Input: stoneValue = [7,7,7,7,7,7,7]
Output: 28


Input: stoneValue = [4]
Output: 0
```

## Approach

We have told that alice is going to devide the array in two parts ie.
```text
               {1, 2, 3, 4}
             /      |      \
            /       |       \
           /        |        \
{1}{2, 3, 4}   {1, 2}{3, 4}  {1, 2, 3}{4}
```

So, here we can solve this in O(n^3), but it will not work since we are having array length of 500.</br>
Our strategy is to solve this with <strong>Recurring + Memoization</strong>
</br>
We'll divide array and calculate sum for both of the array. Handle the edge case like if <strong>l <= 0</strong>.
```cpp
int left = (l == 0) ? pref[mid] : pref[mid] - pref[l - 1];

int right = pref[r] - pref[mid];
```

Then count the score for each of the sub-arrays and select recursive sub array of max sum.
```cpp
if(left < right){
  score = max(score, left + calcScore(l, mid, pref));
}

else if(left > right){
  score = max(score, right + calcScore(mid + 1, r, pref));
}

else{
  score = max(score, max(left + calcScore(l, mid, pref), right + calcScore(mid + 1, r, pref)));
}
```
Here, you can see, there is 3rd condition in else block- after dividing the array in two parts, we calculate the sum and if both the sum's are equal then we will have to go for each of the sub arrays.

At last just return the calculated score var.


## Solution

```cpp
class Solution {
public:
    int t[501][501];
    int calcScore(int l, int r, vector<int>& pref){
        if(l >= r){
            return 0; // array now cannot be divide
        }
        if(t[l][r] != -1){
            return t[l][r];
        }

        int score = 0;
        for(int mid = l; mid <= r - 1; mid++){
            int left = (l == 0) ? pref[mid] : pref[mid] - pref[l - 1];
            int right = pref[r] - pref[mid];

            if(left < right){
                score = max(score, left + calcScore(l, mid, pref));
            }
            else if(left > right){
                score = max(score, right + calcScore(mid + 1, r, pref));
            }
            else{
                score = max(score, max(left + calcScore(l, mid, pref), right + calcScore(mid + 1, r, pref)));
            }
        }
        return t[l][r] = score;
    }
    int stoneGameV(vector<int>& stoneValue) {
        int n = stoneValue.size();
        vector<int> pref(n, 0);
        memset(t, -1, sizeof(t));
        pref[0] = stoneValue[0];
        for(int i = 1; i < n; i++){
            pref[i] = pref[i-1] + stoneValue[i];
        }
        return calcScore(0, n-1, pref);
    }
};
```

## Complexity
```text
Time Complexity: O(n^3)

Space Complexity: O(n^2)
```

## Key Takeaway

Interval DP with prefix sums to maximize score by optimally splitting arrays.