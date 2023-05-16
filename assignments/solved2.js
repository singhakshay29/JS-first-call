/*callback function
Complete the function callThisFnBack
Such that it takes a number as the first argument and a function
(callback function) as the second argument. 
You have to pass the first argument of the function callThisFnBack to the callback function 
and execute the callback function inside the callThisFnBack and return its result.
*/
function callThisFnBack(num,fn){
    let ans=fn(num)
    return ans;
}
function fn1(a){
    return 2*a;
}
callThisFnBack(10,fn1)


/*You are given an array of objects representing a group of students, each with a name and an array of test scores.
Your task is to use map, filter, and reduce to calculate the average test score for each student,
and then return an array of objects containing only the students who have an average score above 90.

The array of objects that you will return should have the keys "name" and "average"
which should contain the name and the average marks of the student if his average marks is greater than 90.
const students = [
{ name: "Ram", scores: [80, 95, 60] },
{ name: "Mohan", scores: [85, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [95, 90, 94] },
];

const res = highPerformers(students);
console.log(res);
// [ { name: 'Hemang', average: 93 } ]*/
