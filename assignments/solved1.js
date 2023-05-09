/*
Create an array named arr which contains the first 5 multiples of 2.
After this create a variable named val which stores the middle element of the array.
*/
let arr=[2,4,6,8,10];
let val=arr[2];
console.log(val);

/*Create 6 variables with namesvarA, varB, varC, varD, varE, varF
Store 6 different values of your choice in the variables such that the variables represent the given primitive types in the given order:
varA: Number
varB: String
varC: Boolean
varD: Undefined
varE: Object
varF: Symbol */

const varA =10;
const varB = "akshay";
const varC = false
const varD = null;
const varE = {
    color : "yellow"
};
const varF = Symbol();
let varG;

console.log(typeof(varA));
console.log(typeof(varB));
console.log(typeof(varC));
console.log(typeof(varD));
console.log(typeof(varE));
console.log(typeof(varF));
console.log(typeof(varG));

/*
Complete the given printMultiplesOfThree function. 
You will be given two arguments beginNum, and endNum. 
Your task is to loop from beginNum to endNum, and if a number is a multiple of 3, 
print that number to the console.
*/

function printMultiplesOfThree(beginNum,endNum){
    for(i=beginNum;i<=endNum;i++)
    {
        if(i%3==0)
        {
            console.log(i);
        }
    }
}


printMultiplesOfThree(3,12);


/*
Modify the takeMultipleNumbersAndAdd such that it can take any number of arguments
and return its sum.
takeMultipleNumbersAndAdd(1, 2, 2) should return 5 because 1 + 2 + 2

takeMultipleNumbersAndAdd(-1, 2, -1, 5) should return 5 */



function takeMultipleNumbersAndAdd(){
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    return sum;
}
console.log(takeMultipleNumbersAndAdd(1,2,3));