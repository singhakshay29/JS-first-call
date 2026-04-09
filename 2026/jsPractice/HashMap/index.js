//✅ 1. Two Sum
function twoSum(arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let findValue = target - arr[i];
    if (map.has(findValue)) {
      return [map.get(findValue), i];
    }
    map.set(arr[i], i);
  }
  return [-1, -1];
}
//✅ 2. First Non-Repeating Character
function firstNonRepeating(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i;
    }
  }
  return -1;
}

//3. Valid Anagram
function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) return false;

    map.set(char, map.get(char) - 1);

    if (map.get(char) === 0) {
      map.delete(char);
    }
  }

  return map.size === 0;
}

//✅ 4. Contains Duplicate
function containsDuplicate(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    } else {
      set.add(arr[i]);
    }
  }
  return false;
}

//Intersection of Arrays
function intersection(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = new Set();
  
    for (let num of nums2) {
      if (set1.has(num)) {
        result.add(num);
      }
    }
  
    return [...result];
  }
  
  //Subarray Sum Equals K
  
  function subArraySum(arr, k) {
    let map = new Map();
    let currentSum = 0;
    let count = 0;
  
    // Important: base case
    map.set(0, 1);
  
    for (let num of arr) {
      currentSum += num;
  
      // Check if (currentSum - k) exists
      if (map.has(currentSum - k)) {
        count += map.get(currentSum - k);
      }
  
      // Store current sum
      map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }
  
    return count;
  }
  
  //Top K Frequent Elements
  
  function topKFrequent(nums, k) {
    let map = new Map();
    let result = [];
  
    // Step 1: Count frequency
    for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }
  
    // Step 2: Find max k times
    while (k > 0) {
      let maxFreq = -1;
      let maxElement = null;
  
      // Find element with max frequency
      for (let [num, freq] of map.entries()) {
        if (freq > maxFreq) {
          maxFreq = freq;
          maxElement = num;
        }
      }
  
      result.push(maxElement);
  
      // Remove that element
      map.delete(maxElement);
  
      k--;
    }
  
    return result;
  }
  
  //Group Anagrams
  
  function groupAnagrams(strs) {
    let map = new Map();
  
    for (let word of strs) {
      // Step 1: create key
      let sorted = word.split('').sort().join('');
  
      // Step 2: group
      if (!map.has(sorted)) {
        map.set(sorted, []);
      }
  
      map.get(sorted).push(word);
    }
  
    return [...map.values()];
  }
  
  
