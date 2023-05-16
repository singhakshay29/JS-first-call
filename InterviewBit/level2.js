/*
Q-1 Try the following example in the editor below.

Given an integer num denoting the percentage of a student, 
calculate the grade according to the below rules:

If num >= 90, grade A.
If num >= 80, grade B.
If num >= 70, grade C.
If num >= 60, grade D.
If num >= 50, grade E.
Else grade will be F.
Print a string consisting of a single character denoting 
the grade.


ans => 

var num =readLine().trim();

if(num>=90)
{
    console.log("A");
}else if(num>=80 && num<90)
{
    console.log("B");
}else if(num>=70 && num<80)
{
    console.log("C");
}else if(num>=60 && num<70)
{
    console.log("D");
}else if(num>=50 && num<60)
{
    console.log("E");
}else
{
    console.log("F");
}




Q-2 Try the following example in the editor below.

Given the weekday number, print the weekday name corresponding to it.

Note: Day 1 is Monday. First letter is always Capital.

Sample Input

4
Sample Output

Thursday


ans =>

var num=parseInt(readLine().trim());
switch(num){
    case 1:
        num="Monday";
        break;
    case 2:
        num="Tuesday";
        break;
    case 3:
        num="Wednesday";
        break;
    case 4:
        num="Thrusday";
        break;
    case 5:
        num="Friday";
        break;
    case 6:
        num="Saturday";
        break;
    case 7:
        num="Sunday";
}
console.log(num);



Q-3 Try the following example in the editor below.

You are given an integer N, print all the odd values, 
for all i, where 0 <= i < N. 
Print each values on a seperate line.


ans =>
var num =parseInt(readLine().trim());
for(let i=0;i<num;i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}



Q-4 Try the following example in the editor below.

You are given an integer N, print all the odd values, 
for all i, where 0 <= i < N. Print each values on a seperate line.
Note: Use continue to avoid even numbers and break to get out
of the loop.

Sample Input:

6

Sample Output:

1
3
5

ans =>

var num =parseInt(readLine().trim));
for(let i=0;i<num;i++)
{
    if(i%2==0)
    {
        continue;
    }
    console.log(i);
}






























*/