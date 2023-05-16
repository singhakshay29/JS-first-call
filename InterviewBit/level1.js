/*
Q1 - Predict the output of the following code:

var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b) 

//ans => -10;


Q-2 - Try the following example in the editor below.

Take a user input string and print space separated “Hello” and input (without quotes).

 

Input

Read a string input.

 

Output Format

Print Hello input to stdout.




ans => 
let ans=readLine();//node 
let ans=prompt();//browser
console.log("Hello "+ input)





Q-3 Try the following example in the editor below.

Given an input string which represents a positive number, 
you have to print the next greater integer.

Sample Input</div>

123
Sample Output</div>

124
Hint

We can the next greater number by using ‘+’ operator. 
For e.g. console.log(5+1) prints 6.



ans => 
let str=readLine();
let num=parseInt(str);
console.log(ans+1);

*/