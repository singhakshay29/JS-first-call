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
