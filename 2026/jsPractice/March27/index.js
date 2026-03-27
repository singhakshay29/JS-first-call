//🟨 JavaScript (Output-Based)
//✅ Q1: Hoisting (Function vs Variable)
console.log(a);

var a = 10;

function a() {
  console.log("Hello");
}

console.log(a);
//✅ Output:
//[Function: a]
10
//✅ Q2: Closure + setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100);
}
//✅ Output:
3
3
3
//✅ Q3: Object Reference
const obj1 = { name: "Akshay" };
const obj2 = obj1;

obj2.name = "Singh";

console.log(obj1.name);
//✅ Output:
Singh
//✅ Q4: Type Coercion
console.log([] + []);
console.log([] + {});
console.log({} + []);
console.log([] == false);
//console.log([] === false);
//✅ Output:
""
"[object Object]"
0
true
false
//✅ Q5: Closure + TDZ
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
    let x = 20;
  };
}

outer()();
//✅ Output:
ReferenceError
//🟦 DSA (Arrays)
//✅ 1. Move Zeroes (In-place)
function moveZero(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }

  return arr;
}

console.log(moveZero([0,1,0,3,12]));
//✅ 2. Maximum Subarray Sum (Kadane’s Algorithm)
function maximumSubArray(arr) {
  let res = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxSum = Math.max(maxSum + arr[i], arr[i]);
    res = Math.max(res, maxSum);
  }

  return res;
}

console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]));
//✅ 3. Count Subarrays with Sum = K
function countSubArray(arr, k) {
  let count = 0;
  let currentSum = 0;
  let prefixSum = new Map();

  prefixSum.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (prefixSum.has(currentSum - k)) {
      count += prefixSum.get(currentSum - k);
    }

    prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);
  }

  return count;
}

console.log(countSubArray([1,2,3,1,1,1], 3));
//✅ 4. First Non-Repeating Character
function fNR(str) {
  let map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str) {
    if (map[char] === 1) {
      return char;
    }
  }

  return '';
}

console.log(fNR('aabcbcde'));
//✅ 5. Flatten Nested Array
function flatterned(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let temp = flatterned(arr[i]);

      for (let j = 0; j < temp.length; j++) {
        res.push(temp[j]);
      }
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

console.log(flatterned([1,2,[3,4,[5,6],7],8],9,[0]));
//✅ 6. Longest Substring Without Repeating Characters
function longSubString(str) {
  let maxLength = 0;
  let left = 0;
  let set = new Set();

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