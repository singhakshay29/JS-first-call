
console.log("hello")
//-----try----catch-------//
function sum(a,b){
try{
    //do something
    throw Error('Reference Error')
    let c=a+b
    return c;
}catch(error)
{
    console.log("how are you")
    alert("Something went wrong")
}
}
let result=sum(5,4);
//console.log(result);

//----------first class function--------/

//var---->
// we can declare variable, pass variable in function,return variable


let num=12;
let anothernum=15;
 function sum(a,b)
 {
    return a+b;
 }
 let ans=sum(num,anothernum);



//we can treat function just like variable
//1. we can declare function just like variable
//2. we can return function

/*
function cal(fn,val){
    console.log(fn);
    console.log(val);
}
cal(sum,10);


*/

//Q- first login then do calculation;

function logging(callBackFunc){
    console.log("login");//5sec
    callBackFunc(1,2);
}

function add(a,b)
{
    console.log(a+b);
}

//js does not wait for anyone 
//if we search something on server we have to wait for while to get response from server
// but js wait for non and it will do calculation and return that which we don't want


//So we want that hey google server whenever you login successfull then excute my function
//i will give you my function when ever your work is complete then excute my function

//logging();-----5sec
//after that
//excute my function
logging(add);//calling back that function



// sum()<----means go to sum function and excute it.
//sum <-----means it is refernce of sum has a memory address of heap 



//1. named functions

function sum(){

}

//2. anonymous functions

const sum1=function()
{
    //anything
}

//3. arrow function


const sumArrow=(a,b)=>{
    return a+b;
}

let resArrow=sumArrow(1,3);
console.log(resArrow,"sum Arrow");


//---------call back--------//

function first(callBackFunction)
{
    //imp task
    console.log('first done');
    callBackFunction();//power()function will excute
}
function power(a,b){
    console.log(a**b);
}

first(power)//if we power() it will excute here it self


//---------Higher order function---------//

// function which return function

//function which can take function as a argument





//calculator


function calculator(operation){
    if(operation==='addi'){
        return function addition(){
            return a+b;
        };
    }else if(operation==='subtr')
    {
        return function subtraction(){
            return a-b;
        };
    }
}

let solution=calculator('addi');
console.log(solution);


function sum(a,b){
    return a+b;
}
const myans=sum(1,2);
//console.log(myans);

const newans=sum(1)(2);

console.log(newans);