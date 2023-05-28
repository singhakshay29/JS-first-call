console.log("hello world")
//------Hoisting------
//variable and function are hoisted
//their are two phase 1)parsing phase 2)excution phase
//in parsing phase variable initialization and function copy take place
//in execution phase assignment take place
console.log(a);
var a=10;//undefined


sum()//inside the sum function

function sum(){
    console.log('inside the sum function')
}

//let and const are hoisted in Temporaral deadzone
//console.log(name);
const name="akshay";

//console.log(b);
let b=10;//cannot access before initialiation

//-------Basic Math-----
console.log(1+2);
console.log(1*2);
console.log(Math.pow(5,3));
console.log(2**3);//same as power
console.log(5**3);
let val="123"+2;//String + number=String
//to covert string to number
let val1= +"123"+2;
console.log(val);
console.log(val1);

//-----------------------------------------//
//==is doing one thing
//checking the value only
//=== is doing 2 things 
// checking the value
// checking the type
//-----------------------------------------//
//for in-->loops over object and its properties
//for of-->iterable over the object
//way 1
let arr1=[1,3,4,5,6,7,8,9,0];
for(a of arr1)
{
    console.log("-->"+a)
}
//way 2
for(let i=0;i<arr1.length;i++)
{
    //console.log(arr1[i]);
}
//way 3
let j=0;
while(j<arr1.length)
{
   //console.log(arr1[j]);
    j++;
}
//forEach can give value,index,and array in the same array
arr1.forEach((item,) => {
    console.log(item)
})
let obj ={
    name:"akshay",
    canDrive:true,
};
//iterate in object
for(const key in obj)
{
    console.log(key)
}

//-------Switch ---------//
switch(condition)
{
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("no value");
}


