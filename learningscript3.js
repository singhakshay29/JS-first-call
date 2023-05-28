console.log("hello learner")
//-----------Function------------
//Input(box)->Output

function sum(a,b){
    return a+b;
}
let ans=sum(5,100);
//console.log(ans)


//case 2
function sum1(a,b){
    //let c=50;
    return a+b+c;
}
let c=100;
let ans1=sum1(5,100);
console.log(ans1)
//if we forget to give two values we can set one variable to give default value
let ans2=sum1(99)
//console.log(ans2)

//function return type is depend upon what we are returning 
//if we use console.log we are not returning anything from that function

function sunny(a,b){
   // console.log(a+b);
}
let results=sunny(5,6);
//console.log(results);


//------------Scope--------------
//var we can redeclare the variable
//js file itself is global
//scope of var is global and functional
//var does't care about {}
//var has scope of execution context

/*problem 1
var a=100;
console.log(a);//100
if(true)
{
    var b=300;
    console.log(a);//100 if parent scope has variable the child also access its properties
    console.log(b);//300
}
console.log(b);//300
*/
//problem 2
/*
var a=12;
console.log(a);//12
if(true)
{
    var a=13;
    console.log(a);//13
}
console.log(a);//13
*/
/*problem 3
var a=12;
console.log(a);//12
if(true)
{
    function abc()
    {
        var a=13;
        console.log(a);//13
    }
}
abc();
console.log(a);//12
*/
//problem 4
/*
var a=12;
console.log(a);//12
if(true)
{
    var a=13;
    console.log(a);//13
}
console.log(a);//13

function abc(){
    var a=12;
    console.log(a);//12
}
abc()
console.log(a);1//13
*/
//problem 5
/*
var a=12;
console.log(a);//12
//console.log(b);//cannot acess
if(true)
{
    var a=13;
    console.log(a);//13
}
console.log(a);//13
function abc(){
    var a=12;
    console.log(a)//12
    return a;
}
let result=abc()
console.log(result);//12
console.log(a);//13
*/
//problem 6

console.log(a)//undefined
var a=12;
abbc()
function abbc(){
    console.log("Hello")//hello
    console.log(a);//undefined<-----imp
    var a=19;
    console.log(a);//19
}
console.log(a);//12


var aa=12;
var bb=12;
abc();
function abc(){
    var a=100;
    console.log(aa);
    console.log(bb);//12
}
console.log(aa);//12
console.log(bb);//12

//---------------let and const----------
//let and const have block scope
/*case1
let ab=21;
console.log(ab);
if(true)
{
    let ac=22;
    console.log(ab);
    console.log(ac);
}
*/
//console.log(ac);//give ac is not define it is out of scope



