/*
You need to create an Object in Javascript with the name Car.
This object will have three properties with name color, seats, nitros
The table given below contains the properties of the object, their data type, and the value for that property.

Property of Object	Data Type of Property	value for property
color	string	"white"
seats	number	2
nitros	boolean	false


Create another variable msg which contains a string in it with the value
"My car have seats seats and it is of color color"*/

console.log("solved");
const car ={ 
    color : "white",
    seats : 2,
    nitros : false
};

let msg = "My car have "+ car.seats + " seats and it is of "+ car.color + " color ";
console.log(msg);



/*Complete the function solve which takes obj as a parameter which is an object.

Iterate obj using a for of and a for in loop.
The for...of loop should print all the values of the obj in the console and the for...in loop 
should print the key and values of obj in the format {key}: {value}. */


function solve(obj){
    let allValues=Object.values(obj);
    for(const val of allValues)
    {
        console.log(val);
    }
    for(const k in allValues)
    {
        console.log(k+" : "+ allValues[k]);
    }
}

const obj={
    name:"akshay",
    age : 25,
    location : "Lucknow",
}
solve(obj);


/*
Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time.

The bounds tell that all the numbers between the lower bound and the upper bound are present in the array except one number which is missing. You have to find that missing number.
const input = [[1, 4, 3] ,4, 1];
const arr = input[0];
const upper_bound = input[1];
const lower_bound = input[2];

findMissingNumber(arr, upper_bound, lower_bound); //prints 2 */

function findMissingNumber(arr,upper_bound,lower_bound)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    upper_bound=upper_bound*(upper_bound+1)/2;
    lower_bound=lower_bound*(lower_bound-1)/2;
    let totalsum=upper_bound-lower_bound;
    let ans=totalsum-sum;
    console.log(ans);
}
let array=[1,4,3];
let ub=4;
let lb=1;
findMissingNumber(array,ub,lb);





