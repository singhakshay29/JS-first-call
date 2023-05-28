console.log("hello");
//-------------Arrays------------//


//arrays are non-primitive and store in heap
let arr1=[1,2,3,4,5,6,7,8,9];

let arr2=[1,2,3,4,5,6,7,8,9];

let isEqual=arr1===arr2;
//console.log(isEqual);//false

let arr3=arr1;
arr1===arr3//true because its pointing to same address


//1.Push
//push add the element in array from the last and return the length of array.
let length=arr1.push(10);
//console.log(length);
//console.log(arr1);


//2.Pop
//Remove the last element of array and return that element

//console.log(arr1.pop());

//3.slice and splice
//slice return the part of array or subarray does not affect the original
//does not consider the last index
//slice return the shallow copy of portion of array


//console.log(arr1.slice(8));
//console.log(arr1.slice(2,6))
//console.log(arr1);


//4.splice
//remove the element from array
//distroy the original array and return the element which is removed

let splice =arr1.splice(8,9);
//console.log(splice);
//console.log(arr1);

//5.sort
//sort an array    --(inplace)-- means sorting an array without creating new one

let mat=[45,67,22,44,90,23];
//console.log(mat.sort());


//sort function try to sort lexgographicall ie.Deicnary

let orgArr=[1,5,7,3,2,9,8,45,21,11,19,103,391,231];
//console.log(orgArr.sort());

//console.log(orgArr.sort((a,b)=>a-b));//ascending

//console.log(orgArr.sort((a,b)=>b-a));//descending


//6.Shift

//Remove first element from array and return the element

//console.log(orgArr.shift());
//console.log(orgArr);


//7.Unshift

//Add element from Starting in original array

orgArr.unshift(10);
//console.log(orgArr);


//-------------------Looping---------------------

//1.for loop

for(let i=0;i<orgArr.length;i++)
{
    //console.log(orgArr[i]);
}

//2. for of loop

for(let item of orgArr)
{
    console.log(item);//give the value
}

//3.for in loop
for(let key in orgArr)
{
    console.log(key);//give the key or index;
}


//--------------Array callback ---------------34

let array=[5,8,9,45,22,67,409];
function filtermyfunction()
{

}
