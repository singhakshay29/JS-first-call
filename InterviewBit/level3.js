/*
Q - 1 Try the following example in the editor below.

You are given an integer N, print the summation of N XOR (N OR (Negation N)).

Sample Input:

100

Sample Output:

-101




ans =>
var num =parseInt(readLine().trim());

let ans= num^(num|(~num));
console.log(ans);




Q-2 You are given an integer N, you have to print the nearest integral value for the base-2 logarithm of N.

Sample Input:

101

Sample Output:

7



ans =>
var num = parseInt(readLine().trim());

let Integer = Math.log2(num);
let ans=Math.round(Integer);
console.log(ans);




Q-3 Try the following example in the editor below.

You are given an integer N, print the value of N*N + N^3 - N.

Sample Input:

2

Sample Output:

10





ans => 

var num=parseInt(readLine().trim())
console.log(num*num+Math.pow(num,3)-num);




Q-4 You are given a string S, you have to print the string followed by it’s length.

Sample Input:

adarsh

Sample Output:

adarsh6



var num=read.Line().trim();

var len=num.length;

console,log(num+len);



Q-5  You are given a string S, you have to print the string after combining it with it’s UPPERCASE form.

Sample Input:

adarsh

Sample Output:

adarshADARSH




ans =>
var str = readLine().trim();

var upper=str.UpperCase();

var ans= str.concat(upper);

console.log(ans);




*/






