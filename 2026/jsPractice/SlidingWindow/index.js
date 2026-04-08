//1️⃣ Maximum Sum Subarray of Size K

// Input: arr[] = [100, 200, 300, 400], k = 2
// Output: 700
// Explanation: arr2 + arr3 = 700, which is maximum.

function sumSubArray(arr, k) {
    let maxSum = 0;
    let windoSum = 0;
    let left = 0;
    for (let i = 0; i < k; i++) {
      windoSum += arr[i];
    }
    maxSum = windoSum;
    for (let i = k; i < arr.length; i++) {
      windoSum = windoSum - arr[left] + arr[i];
      maxSum = Math.max(maxSum, windoSum);
      left++;
    }
    return maxSum;
  }

  
//  2️⃣ Longest Substring Without Repeating Characters

//Longest Substring Without Repeating Characters
// Input: s = "geeksforgeeks"
// Output: 7

function longestsubstring(str) {
    let set = new Set();
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < str.length; right++) {
      while (set.has(str[right])) {
        set.delete(str[left]);
        left++;
      }
      set.add(str[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  }
  
  
 // 3️⃣ Longest Substring with At Most K Distinct Characters
 
 function longestSubStringwithDistinct(str, k) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < str.length; right++) {
      map.set(str[right], (map.get(str[right]) || 0) + 1);
      while (map.size > k) {
        map.set(str[left], map.get(str[left]) - 1);
        if (map.get(str[left]) === 0) {
          map.delete(str[right]);
        }
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
    }
    console.log(map.size);
    return maxLength;
  }
  
  
 // Longest Repeating Character Replacement
 
 function longestRepeatReplacement(str, k) {
    let maxLength = 0;
    let map = new Map();
    let maxFreq = 0;
    let left = 0;
    for (let right = 0; right < str.length; right++) {
      map.set(str[right], (map.get(str[right]) || 0) + 1);
      while (right - left + 1 - maxFreq > k) {
        map.set(str[left], map.get(str[left]) - 1);
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  }