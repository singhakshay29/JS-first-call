//🟨 JavaScript (Output-Based Practice)
//✅ Q1: this + nested function
const obj = {
  name: "Akshay",
  getName: function () {
    return function () {
      console.log(this.name);
    };
  }
};

const fn = obj.getName();
fn();
//✅ Output:
undefined
//💡 Concept:
//Regular function → loses this
//this depends on how function is called
//✅ Q2: Arrow function + this
const obj2 = {
  name: "Akshay",
  greet: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj2.greet();
//✅ Output:
//Akshay
//💡 Concept:
//Arrow function uses lexical this
//✅ Q3: Hoisting (function vs var)
console.log(a);

var a = 1;

function a() {}

console.log(a);
//✅ Output:
function a() {}
1
//💡 Concept:
//Function hoisting > var
//Execution happens in 2 phases
//✅ Q4: Closure
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
    x++;
  };
}

const fn1 = outer();

fn1();
fn1();
fn1();
//✅ Output:
//10
//11
//12
//💡 Concept:
//Closures retain variables
//Same reference is updated
//✅ Q5: Type Coercion
console.log([] == ![]);
console.log([] == 0);
console.log([0] == 0);
console.log(false == "0");
console.log(false == 0);
//✅ Output:
//true
//true
//true
//false
//true
//💡 Concepts:
//[] → ""
//[0] → "0"
//false → 0
//+ vs - behavior
//🟦 DSA (Prefix Sum + Subarrays)
//✅ Q1: Count Subarray Sum = K
function countSubArrayEqualSum(arr, k) {
  let count = 0;
  let currentSum = 0;
  let preFixSum = new Map();

  preFixSum.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (preFixSum.has(currentSum - k)) {
      count += preFixSum.get(currentSum - k);
    }

    preFixSum.set(currentSum, (preFixSum.get(currentSum) || 0) + 1);
  }

  return count;
}
//💡 Concept:
//Prefix sum + hashmap
//Base case: map.set(0,1)
//✅ Q2: Subarray Sum = 0

//👉 Same as above

k = 0
//✅ Q3: Equal 0s and 1s
function equalZeroAndOne(arr) {
  let map = new Map();
  let count = 0;
  let sum = 0;

  map.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) sum += -1;
    else sum += 1;

    if (map.has(sum)) {
      count += map.get(sum);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
//✅ Output:
//7
//💡 Concept:
//Convert 0 → -1
//Reduce to sum = 0 problem
//✅ Q4: Longest Subarray Sum = K (Correct Approach)
function longestSubArray(arr, k) {
  let map = new Map();
  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLength = i + 1;
    }

    if (map.has(sum - k)) {
      maxLength = Math.max(maxLength, i - map.get(sum - k));
    }

    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }

  return maxLength;
}
//💡 Concept:
//Store first occurrence
//Works with negatives
//⚛️ React Concepts
//✅ Q1: useEffect dependency issues
//❌ Problems:
//Missing dependency → stale data
//Wrong dependency → infinite loop
//✅ Fix:
useEffect(() => {
  console.log(count);
}, [count]);
//💡 Concept:
//Dependency array controls execution
//Must include all used variables