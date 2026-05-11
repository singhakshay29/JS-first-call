//Given string s, return true if all characters are unique
//method 1
function checkString(s) {
    let map = new Map();
    for (let char of s) {
      if (map.has(char)) {
        return false;
      }
      map.set(char, 1);
    }
    return true;
  }
  console.log(checkString('abb'));
  
  //Return FIRST duplicate character
  
  function returnDublicate(s) {
    let set = new Set();
    for (let char of s) {
      if (set.has(char)) {
        return char;
      }
      set.add(char);
    }
    return null;
  }
  
  //console.log(returnDublicate('abcidefghij'));
  
  //Longest substring without repeating characters
  
  // Input: s = "abcabcbb"
  // Output: 3
  
  function longestSubstring(s) {
    let left = 0;
    let set = new Set();
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
  }
  
  //You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.
  
  function longestKSubstr(s, k) {
    // code here
    let map = new Map();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
      map.set(s[right], (map.get(s[right]) || 0) + 1);
      while (map.size > k) {
        map.set(s[left], map.get(s[left]) - 1);
        if (map.get(s[left]) === 0) {
          map.delete(s[left]);
        }
        left++;
      }
      if (map.size === k) {
        maxLength = Math.max(maxLength, right - left + 1);
      }
    }
    return maxLength;
  }
  
  console.log(longestKSubstr('aabacbebebe', 3));
  