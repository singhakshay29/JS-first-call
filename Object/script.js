//object is a key value pair

//objects are created in heap//non primitive

//object are passed by referrence



let name="meenakshi";
let age=34;
let key="parents";

let obj1={
    name:name,
    class:'5th',
    rollnumb:22,
    [key]:"babuji"
};

//get

console.log(obj1.class);

//Add

obj1['age']=age;
console.log(obj1);

//delete

delete obj1.rollnumb
console.log(obj1);

//copy of object


let obj2=obj1////obj2 is pointing to same address of obj1

let obj3={...obj1};
console.log(obj3);
obj3.class=8;
console.log(obj3);
console.log(obj1);

//every object has its prototype
//-------object methods-----------

//1.object.assign
const targetobj={};


Object.assign(targetobj,obj1,obj3);//.....how...?
console.log(targetobj);

//2.object.create

//---->
const person={
    name:"deep",
    mobile:'oppo'
}
//in this case name and mobile are own properties

//----->
const newPerson=Object.create(person)
//in this properties are not owned by object
console.log(person);

console.log(newPerson);


//3.Object.keys()
const keyPerson=Object.keys(person);
console.log(keyPerson);

//4.Object.Values()

const valuePerson=Object.values(person);
console.log(valuePerson);


//5.Object.entries()


const entriesPerson=Object.entries(person);
console.log(entriesPerson);



//----------Object destructuring---------


const myobj={
    name:"akash",
    class:10,
    pen:15,
    bottles:33
};

//console.log(.myobj);
const {bottles,pen}=myobj;
console.log(myobj);
