console.log("hellow world")
//----------------------Variable--------
// var let const

/*
var carName="Volvo";
var x=50;
var x=5;
var y=10;
var sum=x+y;
console.log(sum);
//we can also do like this 
var firstName="John",lastName="Doe",age="35";
console.log(age);
*/

/*The var keyword is used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
If you want your code to run in older browsers, you must use var.*/

//Data types
//1.String
//2.Number
//3.Boolean
//4.null
//5.undefined is can be set by user but it is initially set by Program only

let a=10;            //data type Number
let lastName="Singh";//data type String
let x={
    firstName: "akshay",
    lastName: "Singh"
};                   //data type Object
//let values can be re-assign but const can't reassign they are fixed
//console.log is used to print the output
//-------------------Object -----------------//
let car ={
    seat:4,
    ac:true,
    sports:false,
    powerWheels:true,
    "year":2019
};
//car=null;
//console.log(car);
//--------get-----------//
//console.log(car.seat,car.sports);

//--------edit-----------//
car.seat=2;
car["powerWheels"]=false;
car["year"]=2020;
//-----delete--------
delete car.sports;
//console.log(car);

//---------------Arrays--------------
let arr=[1,3,8,true,'c'];
console.log(arr);

let arr1=[1,4,"abcd"];
//---get----
console.log(arr[2]);

//----edit------
arr[0]="start";
console.log(arr);

//----length-----
console.log(arr.length)

//----Arrays properties
arr.push(89);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

/*
let user = [{
    name: "akshay",
    parents: [{
        name: "mother",
        age: 50
    }, {
        name: "father",
        age: 55,
    }]
}]
console.log(user);
console.log(user.parents);
*/