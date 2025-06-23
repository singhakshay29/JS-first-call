// console.log("hello");
// //-------------Arrays------------//


// //arrays are non-primitive and store in heap
// //  let arr1=[1,2,3,4,5,6,7,8,9];

// //  let arr2=[1,2,3,4,5,6,7,8,9];

// //  let isEqual=arr1===arr2;
// //  console.log(isEqual);//false

// //  let arr3=arr1;
// //  arr1===arr3//true because its pointing to same address


//  //1.Push
// //push add the element in array from the last and return the length of array.
// // let length=arr1.push(10);
// //console.log(length);
// //console.log(arr1);


// //2.Pop
// //Remove the last element of array and return that element

// //console.log(arr1.pop());

// //3.slice and splice
// //slice return the part of array or subarray does not affect the original
// //does not consider the last index
// //slice return the shallow copy of portion of array


// //console.log(arr1.slice(8));
// //console.log(arr1.slice(2,6))
// //console.log(arr1);


// //4.splice
// //remove the element from array
// //distroy the original array and return the element which is removed

// //let splice =arr1.splice(8,9);
// //console.log(splice);
// //console.log(arr1);

// //5.sort
// //sort an array    --(inplace)-- means sorting an array without creating new one

// let mat=[45,67,22,44,90,23];
// //console.log(mat.sort());


// //sort function try to sort lexgographicall ie.Deicnary

// let orgArr=[1,5,7,3,2,9,8,45,21,11,19,103,391,231];
// //console.log(orgArr.sort());

// //console.log(orgArr.sort((a,b)=>a-b));//ascending

// //console.log(orgArr.sort((a,b)=>b-a));//descending


// //6.Shift

// //Remove first element from array and return the element

// //console.log(orgArr.shift());
// //console.log(orgArr);


// //7.Unshift

// //Add element from Starting in original array

// orgArr.unshift(10);
// //console.log(orgArr);


// //-------------------Looping---------------------

// //1.for loop

// for(let i=0;i<orgArr.length;i++)
// {
//     //console.log(orgArr[i]);
// }

// //2. for of loop

// for(let item of orgArr)
// {
//    // console.log(item);//give the value
// }

// //3.for in loop
// for(let key in orgArr)
// {
//    // console.log(key);//give the key or index;
// }


// //--------------Array callback -------------------





// //1.--------------------for each--------------------

// let array=[5,8,9,45,22,67,409];
// //in for each parent is (for each)
// //call back function is user function=>Arrow function
// //foreach will excute my function we don't have to call 
// //for each has control to call function
// //for ecah call my function with three parameter it will go to every element with
// //value,index,Hole array
// //It will got every element and excute your function,it will traversing in array
// array.forEach((value,index,array) => {
//     //console.log(value,value,array);
// });

// //Example.1 Syntax of simple and arrow function

// //normal function
// // function newfunction(a,b){
// //     return a**b;
// // }

// // //arrow function
// // newfunction((a,b) => {
// //     return a**b
// // });

// // myfunction((value,index)=>{
// //     return value+index;
// // });
// //for each will get the return for your function
// // //normal 
// // function myfunction(value,index){
// //     return value+index;
// // }


// //2.--------------------------Map------------------

// //map call user function with three parameters value,index,array
// //go to every element,excute user function,collect the return teyp can be any type<--------imp---
// // let marks=[5,8,9,45,22,67,409];

// // let ans=marks.map((value,index,marks)=>{
// // console.log(value+"at index of"+index+"in array"+marks);
// // let rank='';
// // if(value<22)
// // {
// //     rank='undergraduates'
// // }else if(value>=22 && value < 40)
// // {
// //     rank="graduates"
// // }else if(value>40){
// //     rank='experience'
// // }
// // let obj={
// //     age:value,
// //     rank:rank
// // }
// // return obj;
// // });
// // console.log(ans);


// //3.----------------------filter-----------------

// //.1 go to every element
// //2.excute the function
// //3.return the value which is true or false
// // let nums=[19,21,29,44,51,69,77,88];

// // let result=nums.filter((value)=>{
// //     if(value%2==0)
// //     {
// //         return true;
// //     }else{
// //         return false;
// //     }
// // });
// // console.log(result+" <----");




// // Note-->
// // for each--->does not care about return value
// // Map ----> collect every return value
// // filter ----> collect return value as in form of true and false

// //Sychronous----perform one task one after another

// //4.-------------find------------------

// // let num=[3,5,6,8,9,89,76,55,4,12];

// // let resultfind=num.find((value)=>{
// //     if(value==76)
// //     {
// //         return true;
// //     }else{
// //         return false;
// //     }
// // });
// // console.log(resultfind);


// //5.--------------------findIndex----------
// // let num=[3,5,6,8,9,89,76,55,4,12];

// // let resultfindindex=num.findIndex((value)=>{
// //     if(value==4)
// //     {
// //         return true;
// //     }
// // })
// // console.log(resultfindindex);


// //6.-----------fill----------
// // num.fill(0,2,6);
// // console.log(num);



// //7--------------reduce-------------


// //Iterate gor to every element
// //call the call back function
// //storing the return value and passing to that value to accumulator


// // let num=[3,5,6,8,9,89,76,55,4,12];

// // let result=num.reduce((accumulator,value)=>{
// //     return accumulator+value;
// // },500);
// // console.log(result);


// // let arr=[1,2,3,4,5,6,7,8,9,10]
// // //Q.sum of all the odd number

// // let addodd=arr.reduce((accumulator,value)=>{
// //     if(value%2!==0)
// //     {
// //         return accumulator+value;
// //     }else{
// //         return accumulator;
// //     }
// // },0);
// // console.log(addodd);

// // //Q.double of each number

// // let doubleofeach=arr.forEach((value)=>{
// //     console.log(value*2);
// // });

// // let doubles=arr.map((value)=>{
// //     return value*2
// // });
// // console.log(doubles);

// // let doublevalues=arr.reduce((accumulator,value)=>{
// //     accumulator.push(2*value);
// //     return accumulator;
// // },[]);
// // console.log(doublevalues);

// //---------------copy an Array--------------
// // let a=12;
// // let b=a;

// // console.log(a===b);

// // let arr=[1,2,3,4,5,6];
// // let arrCopy=arr;
// // arrCopy.push(99);
// // console.log(arrCopy);

// // console.log(arr);
// // console.log(arr===arrCopy);


// // //the above method is not the right way to copy an array

// // let newArray=[];
// // for(const item of arr){
// //     newArray.push(item);
// // }
// // console.log(newArray);
// // console.log(arr===newArray);

// // //way -2
// // //using spread operator
// // let newarray=[...arr];
// // console.log(arr===newarray);


const call1224 = (callback) => {
    callback  = (a, b) => {
  return a - b;
};

return callback(1, 2); 
};

const sum = (a, b) => {
  return a + b;
}; 

call1224(sum);
