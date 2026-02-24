 function outer() {
   let count = 0;
   return function inner() {
     count++;
     console.log(count);
   };
 }

 const fn = outer();
 fn();
 fn();
 
 //2
  const objOne = {
   name: "JS",
   getName: function () {
     console.log(this.name);
   }
 };

 objOne.getName();
 
 //3
  const objTwo = {
   name: "akshay",
   getName() {
     return function () {
       console.log(this.name);
     };
   }
 };

 objTwo.getName()();
 
 //4
 
  const objThree = {
   name: "Frontend",
   getName() {
     return () => {
       console.log(this.name);
     };
   }
 };

 objThree.getName()();
 
 //5
  for (let i = 1; i <= 3; i++) {
   setTimeout(() => {
     console.log(i);
   }, 1000);
 }
 
 //6
  console.log("A");

 setTimeout(() => console.log("B"), 0);

 console.log("C");
 
 //7
  foo();

 function foo() {
   console.log("Hello");
 }
 
 //8
 
  bar();

 const bar = function () {
   console.log("Hi");
 };
 
 //9
 function test() {
    var a = [];
    for (var i = 0; i < 3; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    return a;
  }
  
//  const arr = test();
//  arr[0]();
//  arr[1]();
  
  //10
  
  const obj = {
    name: "React",
    getName() {
      console.log(this.name);
      return function () {
        console.log(this.name);
      };
    }
  };
  
  obj.getName()();
  
  //11
   function test() {
   let a = [];
   for (let i = 0; i < 3; i++) {
     a[i] = function () {
       console.log(i);
     };
   }
   return a;
 }

 const arr = test();
 arr[0]();
 arr[1]();
 
 //Part -II
 const nums = [1, 2, 3, 4];

const doubleNums = nums.map((item)=>item*2);
console.log(doubleNums);

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
//👉 Return ["A", "B"]

const nameArray = users.map(({name})=>name)
console.log(nameArray);

const fruits = ["apple", "banana", "apple", "orange", "banana"];
// 👉 Output:
// { apple: 2, banana: 2, orange: 1 }

const countOccurance = fruits.reduce((acc,fruit)=>{
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
},{})

console.log(countOccurance);

const people = [
  { name: "A", age: 17 },
  { name: "B", age: 21 },
];
//👉 Return only users with age >= 18

people.filter((item)=>item.age >18);

//1️⃣ once – function runs only once

function once(fn){
    let called = false;
    return function(...args){
        if(!called){
            called=true;
           return fn.apply(this,args);
        }
    }
}

// function outer() {
//   let x = 10;
//   return function inner() {
//     console.log(x);
//   };
// }

// const fn = outer();
// fn();

// function counter() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// const c1 = counter();
// console.log(c1());
// console.log(c1());

// function test() {
//   let arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr[i] = () => i;
//   }
//   return arr;
// }

// const res = test();
// console.log(res[0](), res[2]());

// const obj = {
//   name: "Akshay",
//   show: function () {
//     console.log(this.name);
//   },
// };

// obj.show();

// const obj = {
//   name: "React",
//   show: () => {
//     console.log(this.name);
//   },
// };

// obj.show();

// const user = {
//   name: "JS",
//   greet() {
//     function inner() {
//       console.log(this.name);
//     }
//     inner();
//   },
// };

// user.greet();

function add(a, b) {
  return a + b;
}

const addFive = add.bind(null, 5);
console.log(addFive(3));


// //createCounter()
// createCounter()
// console.log(createCounter().increment() );

// console.log(createCounter().increment() );


// function createCounter(){
//   let counter=0;
//   const increment = function(){
//     return counter++;
//   }
//   return increment;

// }

function once (fn){
  let isCalled = false;
  return function (...args){
  if(! isCalled){
     isCalled=true;
    return fn.apply(this,args);
  }
  }
}
//⭐ 2️⃣ memoize
//function memoize(fn) {
//  const cache = {};

//  return function (...args) {
//    const key = JSON.stringify(args);

//    if (cache[key]) return cache[key];

//    const result = fn.apply(this, args);
//    cache[key] = result;
//    return result;
//  };
//}

//⭐ 3️⃣ Deep clone object
//function deepClone(obj) {
//  if (obj === null || typeof obj !== "object") return obj;

//  const copy = Array.isArray(obj) ? [] : {};

//  for (let key in obj) {
//    copy[key] = deepClone(obj[key]);
//  }

//  return copy;
//}

//⭐ 4️⃣ Flatten array
//function flatten(arr) {
//  let result = [];

//  arr.forEach((item) => {
//    if (Array.isArray(item)) {
//      result = result.concat(flatten(item));
//    } else {
//      result.push(item);
//    }
//  });

//  return result;
//}

//⭐ 5️⃣ Check palindrome
//function isPalindrome(str) {
//  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//  return cleaned === cleaned.split("").reverse().join("");
//}

//debounce
function debounce(fn, delay) {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context,args);
      }, delay);
    };
  }

  
  //throttling
  
  function throttle (fn,limit){
    let inThrottle = false;
    return function(...args){
        if(!inThrottle){
            fn.apply(this,args);
            inThrottle=true;
            
            setTimeout(()=>{
                inThrottle=false
            },limit)
        }
    }    
  }
  
  //custom map
  
  Array.prototype.myMap =function(callback){
    
    const res=[];
    for(let i=0;i<this.length;i++){
        res.push(callback(this[i],i,this));
    }
    return res;
  }
  
  Array.prototype.myFilter = function(callback){
    const res=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            res.push(this[i]);
        }
    }
    return res;
  }
  
  // class Person {
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   greet(){
//     return `Hi my name is ${this.name} and ${age}`
//   }
// }

// const p1 = new Person('Banku',28)


// class Test {
//   constructor(x) {
//     this.x = x;
//   }

//   get value() {
//     return this.x * 2;
//   }
// }

// const t = new Test(5);
// console.log(t.value);

// class Counter {
//   #count = 0;

//   inc() {
//     return ++this.#count;
//   }
// }

// const c = new Counter();
// console.log(c.inc());
// console.log(c.#count);

// const arr = [1,2,3,4];
// const result = arr.splice(1,2);
// console.log(arr, result);

// function A() {}
// A.prototype.say = function () {
//   console.log("Hi");
// };

// const a = new A();
// a.say();


//1

// console.log(a);

// var a = 10;

// function a() {}

// console.log(a);

//2




// console.log(typeof x);

// let x = 5;

//3



// setTimeout(() => console.log('T1'), 0);

// for (let i = 0; i < 1e6; i++) {}

// console.log('X');


// const obj = {

//   value: 42,

//   a: () => console.log(this.value),

//   b: function () { console.log(this.value); }

// };

// obj.a();

// obj.b();




// function makeCounter() {

//   let n = 0;

//   return () => ++n;

// }

// const c1 = makeCounter();

// const c2 = makeCounter();

// console.log(c1());

// console.log(c1());

// console.log(c2());




// const user = {

//   _age: 10,

//   get age() { return this._age + 1; },

//   set age(v) { this._age = v * 2; }

// };

// user.age = 20;

// console.log(user._age, user.age);




// class X {

//   #v = 1;

//   getV() { return this.#v; }

// }

// const x = new X();

// console.log('v' in x, x.getV());




const data = { a: { b: 0 } };

console.log((data.a?.b ?? 5) || 9);




const { a = 1 } = { a: undefined };

console.log(a);


const { x = 10, y = 20 } = { x: undefined, y: null };

console.log(x, y);

// const [p, , q] = [1, 2, 3];

// console.log(p, q);

//const data = [" ", "", undefined];

//console.log(data.filter(item => item));

//Solve these:

//Q1 – Two Sum

//Return indices of two numbers adding to target.

//Q2 – Best Time to Buy and Sell Stock
//Q3 – Contains Duplicate
//Q4 – Move Zeroes
//Q5 – Valid Anagram
//flattenArray

function flattenArray(arr){
  let result = [];
  for(let i = 0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      let temp=flattenArray(arr[i]);
      for(let j=0;j<temp.length;j++){
        result[result.length] = temp[j];
      }
    }else{
      result[result.length] = arr[i];
    }
  }
  return result;
}

//remove duplicate

function removeDuplicate(arr){
  let result = [];
  for(i=0;i<arr.length;i++){
    let exist =false;
    for(let j=0;j<result.length;j++){
      if(arr[i]=== result[j]){
        exist=true;
        break;
      }
    }
    if(!exist){
      result[result.length]=arr[i];
    }
  }
  return result;
}

//Max/min in array

function maxMin(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

console.log(maxMin(arr));


//Second largest
function secondLarge(arr) {
  let max = Math.max(arr[0], arr[1]);
  let secMax = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i];
    }
  }
  return secMax;
}

console.log(secondLarge(arr));

//Move zeros to left

let value = [1, 6, 0, 3, 1, 5, 0, 7, 9];

function moveZero(arr) {
  let count = 0;
  let modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      modifiedArray.push(arr[i]);
    } else {
      count++;
    }
  }
  while (count > 0) {
    modifiedArray.push(0);
    count--;
  }
  return modifiedArray;
}

console.log(moveZero(value));

//2625. Flatten Deeply Nested Array

//Given a multi-dimensional array arr and a depth n, return a flattened version of that array.



var flat = function (arr, n) {
  function flattern(arr, depth) {
      let res = [];
      for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i]) && depth < n) {
              let temp = flattern(arr[i], depth + 1);
              for (let j = 0; j < temp.length; j++) {
                  res[res.length] = temp[j];
              }
          } else {
              res[res.length] = arr[i];
          }
      }
      return res;
  }
  return flattern(arr, 0)
};

//Given a string s containing just the characters
//'(', ')', '{', '}', '[' and ']',
//determine if the input string is valid.
//Input: s = "()[]{}"
function isValid(s) {
  let st = [];
  for (let ch of s) {
    if (ch == "(" || ch == "[" || ch == "{") {
      st.push(ch);
    } else if (ch == ")" || ch == "]" || ch == "}") {
      let top = st[st.length - 1];
      if (
        (ch == ")" && top !== "(") ||
        (ch == "]" && top !== "[") ||
        (ch == "}" && top !== "{")
      ) {
        return false;
      }else{
        st.pop();
      }
    }
  }
  return  st.length === 0;
}

// Input: arr[] = [0, -1, 2, -3, 1], target = -2
// Output: true
// Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

// Input: arr[] = [1, -2, 1, 0, 5], target = 0
// Output: false
// Explanation: There is no pair with sum equals to given target.

function twoSum(arr, target) {
  let map = new Set();
  for (let i = 0; i < arr.length; i++) {
    let find = target - arr[i];
    if (map.has(find)) {
      return true;
    } else {
      map.add(arr[i]);
    }
  }
  return false;
}

console.log(twoSum([1, -2, 1, 0, 5],-2))

//Longest substring without repeating

function longestSubString(s){
  let set=new Set();
  let left=0;
  let maxLength=0;
  for(let right=0;right<s.length; right++){
    if(set.has(s[right])){
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength=Math.max(maxLength,right-left+1)
  }
  return maxLength;
}


//Given an integer array nums, 
//move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

function moveZero(arr){
  let index=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[index] =arr[i];
      index++;
    }
  }
  while (index < arr.length){
    arr[index]=0;
    index++;
  }
  return arr;
}

//binary Search 

function binarySearch(arr,left=0,right=arr.length-1,x){
  while(right>=left){
    let mid = left+ Math.floor((right-left)/2);
    if(arr[mid] === x){
      return mid;
    }
    if(arr[mid]>x){
      return binarySearch(arr,0,mid-1,x);
    }
    return binarySearch(arr,mid+1,right,x);
  }
  return -1;
}
let findarr = [ 2, 3, 4, 10, 40 ];
let target = 10;
let n = arr.length
let result = binarySearch(findarr, 0, n - 1, target);

function longestString(str) {
  let s = str.split(' ');
  let max = 0;
  let maxStr='';
  for (let i = 0; i < s.length; i++) {
    let length=s[i].length;
    if(max<length){
      max=length
      maxStr=s[i];
    }
  }
  return maxStr;
}

console.log(longestString("throttle meaning in hindi"))
console.log(maxSubarraySum(arr));

function maxSubarraySum(arr){
  let res=arr[0];
  let maxSum=arr[0];
  for(let i=1;i<arr.length;i++){
    maxSum=Math.max(maxSum+arr[i],arr[i]);
    res=Math.max(maxSum,res);
  }
  return res;
}

const s = 'ADOBECODEBANC';
const t = 'ABC';

function minSubString(s, t) {
  if (t.length > s.length) return '';
  let left = 0;
  let minLength = s.length;
  let found = 0;
  let resultStart = 0;
  let targetMap = new Map();

  for (let char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }
  let want = targetMap.size;
  let map = new Map();
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    map.set(char, (map.get(s[right]) || 0) + 1);
    if (targetMap.has(char) && targetMap.get(char) === map.get(char)) {
      found++;
    }
    while (want == found) {
      if (right - left + 1 < minLength) {
        minLength=right-left+1;
        resultStart=left;
      }
      let leftChar=s[left];
      map.set(leftChar,map.get(leftChar)-1);
      if(targetMap.has(leftChar) && map.get(leftChar)<targetMap.get(leftChar)){
        found--;
      }
      left++;
    }
  }
 return minLength === Infinity 
    ? "" 
    : s.substring(resultStart, resultStart + minLength);
}
console.log(minSubString(s, t));

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  const tMap = new Map();
  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }
  for (let char of s) {
    if (!tMap.has(char)) return false;
    tMap.set(char, tMap.get(char) - 1);
    if (tMap.get(char) === 0) {
      tMap.delete(char);
    }
  }
  return tMap.size === 0;
}
console.log(validAnagram('anagram', 'nagaram'));

function findTwice(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) return true;
    set.add(arr[i]);
  }
  return false;
}
console.log(findTwice([1, 2, 3, 4]));

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let maxLength = 0;

  for (let num of set) {

    // only start if it's beginning of sequence
    if (!set.has(num - 1)) {

      let current = num;
      let count = 1;

      while (set.has(current + 1)) {
        current++;
        count++;
      }

      maxLength = Math.max(maxLength, count);
    }
  }

  return maxLength;
}

console.log(longestConsecutive([100,4,200,1,3,2]));