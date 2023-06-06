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



