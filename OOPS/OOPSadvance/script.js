//-------Properties description------------


const abba=
{
    name:"akshay",
    brother:2,
    sister:1
}

for(const key in abba)
{
    console.log(key);
}
console.log(abba);

//.1------propertEnumerable----
//properties which are enumerable will be part



Object.defineProperty(abba,'cashinhand',{
    value:42,
    enumerable: false//if false it is part of object but not the part of for in(key will be disabled)

});
console.log(abba);
console.log(abba.propertyIsEnumerable("name"));


//.2------------writable----------------
//means value can be change

let time = {
    name:"monday",
    left:"hour",
    seconds:32
}
Object.defineProperty(time,"addHour",{
    value:100,
    writable:false,//if we true writable we can't change or update from global scope
    enumerable:true
})
console.log(time,"time")
console.log(time.addHour)
time.addHour=66;
console.log(time.addHour)


//3.-----------configure------------------
//properties of an object can be modified,delete and new 


let obj={
    name:"salman"
}

Object.defineProperty(obj,"frnd",{
    value:"amir",
    writable:true,
    enumerable:true,
    configurable:true//if we true this property we can't delete it 
})

delete obj.frnd
console.log(obj,"obj")


//4.----------Own propert
//the property of an object which is directly in the object not in the prototype


// class Car {
//     canmove=2
//     fun(){
//         console.log("abcdef");
//     }
// }

// let carAudi=new Car();
// console.log(carAudi);

// carAudi.fun();

// const carObj={
//     canMove:true,
//     fun:function(){
//         console.log("carObj",carObj);
//     }
// }
// console.log(carObj);

// const descriptors=Object.getOwnPropertyDescriptor(carObj,"fun");//function inside object are accesble
// console.log(descriptors,"descriptors fun");

// let carBMW=new Car();
// console.log(carBMW,"abcdef");
// const descriptors1=Object.getOwnPropertyDescriptor(carBMW,"canmove");
// console.log(descriptors1,"carBMWClass");
// const descriptors2=Object.getOwnPropertyDescriptor(carBMW,"fun");//function inside class not accessble but for 
// console.log(descriptors2);


/*
writable-->can't edit value of property but can delete it
configue---->can't delete the property but can edit
enumerable--->to be part of for-in

*/

//----------object.seal-------------

const obj5={
    value:45,
    property:2
}

Object.seal(obj5);//you can't delete and you can't change the property of existing object you can't add new properties


//Object.freeze---->in this you can't delete, can't change,can't add



//--------Date & Time--------

const date=new Date();
console.log(date);



console.log(date.getTime());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());


//------------------------------------------------------//


class Car {
    model="basic engine"
    speed;

constructor(speed,model){
    this.model=model
    this.speed=speed
}

canIDrive(){
    console.log("yes you can")
}


}

const maruti=new Car(50,"mini");
console.log(maruti);//here we can't see the function inside-->function will come in prototype method
//which is more benefical whenever we call function will come in prototype


function CarConstructor(speed,model){
    this.speed=speed
    this.model=model
    this.canIDrive=function(){
        console.log("yaaay u can",this.speed);
    }
}

const innova =new CarConstructor(200,"prime")
console.log(innova);//here  we can see the function inside this

//every time we create carconstructor it made all 3 values whic take space


//-------------Inheritance------------------//

class newCar {
    wheels;
    fuelTank;
    modelNumber;

    constructor(){
        this.wheels=4;
        this.fuelTank="full";
        this.modelNumber="prime"
    }

    canIDrive(){
        console.log("I can drive");
    }

}


class  suzukiCar extends newCar{
    sportmodel;
    airbags;
    autoconnet;

    constructor(sportmodel,airbags,autoconnet){
        super()//refers to parent class
        this.sportmodel=sportmodel;
        this.airbags=airbags;
        this.autoconnet=autoconnet;
    }
    canIDrivesuzuki(){
        console.log("its a automatic so i can't");
    }
}


const verna=new suzukiCar("s class",2,"yes");
console.log(verna);



/*

     Getters and setters..........


*/



const _radius=new WeakMap()


class Circle{
    constructor(radius){
    _radius.set(this,radius)//key,value
}
get radius(){
    return _radius.get(this);
}
}

const circle=new Circle(10);
console.log(circle);

//console.log(circle.radius());





/*


Method overridding


*/

class student{
    name;
    constructor(name){
        this.name=name;
    }
    markattendace(){
        console.log("present");
    }

}
const stulist=new student("aman ");
stulist.markattendace();
console.log(stulist);

class TeamCaptain extends student{
    bagde;
    constructor(name,bagde){
        super(name);//this is to call constructor of parent
        this.bagde=bagde;
    
    }
    // markattendace(){
    //     console.log("teamCaptain present")
    // }
    playmatch(){

    }

}

const ajaysportscaptain=new TeamCaptain("ajay",12);
console.log(ajaysportscaptain.markattendace());




class Shape{

    constructor (color){
        this.color=color;
    }
    changeble(){
        console.log("move");
    }
}

class Order extends Shape{
    constructor(radius,color){
        super(color);
        this.radius=radius;
    }
    draw(){
        console.log("yes");
    }
}

const blade=new Order(5,"red");
//console.log(blade);


function ShapeConstructor(color){
    this.color=color;
    // this.move=function(){
    //     console.log("....move");
    // }
}


const shapeObject=new Shape("purple");
const orderObject=new Order(5,"black");//but if we give("black", then it also be acceptable still not giving error)
const shapeConstructorObject=new ShapeConstructor("pink");
console.log(shapeObject);
console.log(orderObject);
console.log(shapeConstructorObject);//in this function is coming in own properties
//for moving in prototype we can try this

ShapeConstructor.prototype.move=function(){
    console.log("....move");
}//here we change the prototype and shift the function will be in prototype
const shapeConstructorObjectnew=new ShapeConstructor("yellow");
console.log(shapeConstructorObjectnew);


//we have created new constructor in which we are parent constructor
function circleConstructor(length,color){
    this.length=length;
    ShapeConstructor.call(this,color);

}


//as you can see that prototype is not of ShapeConstructor 
//to add Inheriteance
//we have made the ShapeConstructor object
circleConstructor.prototype=Object.create(ShapeConstructor.prototype);

//now we are adding 

const circleConstructorObject=new circleConstructor(10,"green");
console.log(circleConstructorObject);
circleConstructor.prototype.move=function(){
    console.log("....move");
}
console.log(circleConstructorObject);

/*

Composition


*/

//instead od inheritance
//we can try composition


// class Person{
//     name
// }

// class Eat{

// }

// class Walk{

// }

// class Sleep{

// }

// class Work{

// }

// class Person extends Eat,Sleep,Walk,Work{

// }

//1.multiple inheritance not suppoerted
//2.All the properties go to person class
//3.Person class became so heavy

const canSwim={
    swim:function(){
        console.log("swim");
    }
}

const canEat={
    eat:function(){
        console.log("Eat");
    }
}

const canSleep={
    sleep:function(){
        console.log("sleep");
    }
}

//constructor function

function Person(name){
    this.name=name;
}
const nerPerson=new Person("Siraj");
console.log(nerPerson);

Object.assign(Person.prototype,canEat,canSleep);
console.log(nerPerson.eat());