function func1() {
  return 2;
}

function func2() {
  return 4;
}

function func3() {
  return 6;
}

// let a=(2,5,8);

// console.log(a);

const arr = ["one", "two", "three"];
const str = "Men";

const a1 = arr.includes("one");
const a2 = arr.includes("onetwo");
const l1 = str.includes("e");

// console.log(arr,str);
// console.log(a1,a2,l1);

//console.log(true == "");//== try to convert it into same data type

let val = "123" + 2; //String + number=String
//to covert string to number
let val1 = +"123" + 2;
// console.log(val);
// console.log(val1);

// console.log(a)
// var a=12;
// abbc()
// function abbc(){
//     console.log("Hello")
//     console.log(a);
//     var a=19;
//     console.log(a);
// }
// console.log(a);

let value = Math.floor(Math.random() * 10);
// console.log(value);

let a = 10;
let b = new Number(10);
let c = 10;
// console.log(typeof a,typeof b);

// console.log(a===b);

// let z ={name:"akshay"};
// let y={...a};
// y.name="anna";
// console.log(z.name);

// console.log(+true);//"1"
// console.log(!"xyz");//

//currying function example

// function sum(){
//     let val=0;
//     for(let i=0;i<arguments.length;i++){
//         val+=arguments[i];
//     }
//     return val;
// }

const arrOfarr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//output [1,2,3,4,5,6,7,8,9]

function joinArray(arrOfarr) {
  let arr = [];
  for (let i = 0; i < arrOfarr.length; i++) {
    for (let k = 0; k < arrOfarr[i].length; k++) {
      arr.push(arrOfarr[i][k]);
    }
  }
  return arr;
}

console.log(joinArray(arrOfarr));

(function() {
  let val = 10;
  console.log(val);
})();

const name = "James";

const person = {
  first: name,
};

console.log(person);

const sayHelloLinting = fName => {
  console.log(`Hello linting, ${fName}`);
};

sayHelloLinting("James");
