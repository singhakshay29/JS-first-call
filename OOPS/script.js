// //class
// //Properties
// //Constructor


// class car {
//     model="basic";
//     speed=100;


//     constructor(model,speed){
//         this.model=model;
//         this.speed=speed;

//     }


//     canIDrive(){
//         console.log("Yes only if you are above 18")
//     }

// }


// //object creation


// const nano=new car('power engine',130);
// console.log(nano.model,nano.speed,nano.canIDrive());



// //--------------------Before ES6   Constructor Function --------------------//


// function CarConstructor(model,speed){
//     this.model=model;
//     this.speed=speed;
//     this.canIDrive=function(){
//         console.log("no");
//     }

// }

// const safari=new CarConstructor("prime sadan",230);
// console.log(safari);
// safari.canIDrive();




// class circle{
//     x=0;
//     y=0;
//     radius=0;
    
//     constructor(radius,x,y){
//         this.x=x;
//         this.y=y;
//         this.radius=radius;
//     }

//     circlepossible(){
//         console.log(this.x +" "+ this.y)
//     }
// }


//----------------call site-------------------------//

//1.

function code(){
    console.log("it is a new day")
}

//code();// call site---> global  //define ---> global

//2.

function remote(){
    console.log("black");
}

function cabel(){
    console.log("not working");
    remote();//define--->global,// called---->functional

}

//cabel();//define-->global, //called-->global




//4 rule-----determine the context------



//1.----------default binding---------


function space(){
    console.log("Infinity");
    console.log(this.abc)//undefined...this keyword  is nothing it is a window object...this is window 
}

//space();//define--->global --->called --->global
//no extra info give so window is context


//2.-----------implicit binding---------

//js-will determine the context


function banner(){
    console.log(this);
}

var object={
    table:12,
    chair:36,
    classes:"five",
    func:function(){
        console.log(this.table,this.chair);
        console.log(this);
    }

}
//object.func();//here js seen the extra information is given whatever befor --->(.)<----
//so here object is the context of func

//Example..2

let obj3={
    name:"obj3",
    sum:function(a,b){
        console.log(a+b);
    }
}


let obj2={
    name:"obj2",
    obj3:obj3
}


let obj1={
    name:"obj1",
    obj2:obj2
}

//obj1.obj2.obj3.sum(2,5);

//Example..3

let newobj={
    name:"monday",
    sum:function(a,b){
        console.log(a+b);
    }
}
newobj.sum(9,2);//call site

let copynewobj=newobj;
console.log(copynewobj);//copy object

copynewobj=newobj.sum;//copy object function

console.log(copynewobj);
copynewobj(5,8);//excuting function,call site

//Example ..4.....?

function lead(num){
    this.a=num;
}
var OBj={
    lead:lead
}

OBj.lead(100);
console.log(OBj);


//----------------Issues----------------------//

let myobj={
    num1:1,
    num2:3,
    num3:5,
    sum:function(){
        console.log("Inside the object");//Inside the object
        console.log(this.num2+" "+this.num3);//undefine
        console.log(this.sum);//function obj
        console.log(this.num1+this.num2);//undefine+undefine===>NaN
    }
}

let copymyobj=myobj.sum

copymyobj();//call site



//3.------------Explicit binding------------
//1.call,apply,blind--->to set the context



function utf(a,b){
    console.log("abcdef",a,b);
}

//utf.call(undefined,1,2);//here underfined we are giving is the contex



// function abc(a,b){
//     console.log(this)//window
//     console.log("abcdesf",a,b)//abcdesf,5,8
//     console.log("abcsdef",this.a);//abcsdef,undefined
// }

//abc(5,8);//call site is global here no extra info is given

const obj={
    a:45,
    food:"no"
};



function abc(a,b){
    console.log(this)//objext
    console.log("abcdesf",a,b)//abcdesf,12,66
    console.log("abcsdef",this.a);//abcsdef,45
}
//abc.call(obj,12,66);//object is the context

//--------------------apply---------------------

function power(str1,str2){
    this.a=str1;
    this.b=str2;
}
var bike={
    name:"splendor",
    power:power
}
var bike2={
    name:"yezdi"
}

bike.power.call(bike2,"apache","pulsor");
console.log(bike2);
console.log("-----------------------");
bike.power.apply(bike2,["avenger","shine"])
console.log(bike2);






//Implicit vs Explicit

// function power(str){
//     this.a=str;
// }
// var bike={
//     power:power
// }
// var bike2={
//     name:"yezdi"
// }

// bike.power.call(bike2,"apache");//power will have context of bike2 object
// bike.power.call(null,"apache");//power will have context of window object


'use strict'
bike.power.call(null,"apache");//power will have context of null
//console.log(bike);
//console.log(bike2);




//-----------new keyword vs implict-----------
let car=new bike.power("pulsor")
//console.log(car);


//----------Priorites----------------
//new>exlicit>implicit>default



