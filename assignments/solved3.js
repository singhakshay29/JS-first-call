/*Create a function named "calculate" which takes in three arguments. 
The first and the second arguments are numbers and the third argument is a mathematical operator 
in the form of a string. The function performs mathematical calculations between the two numbers on the basis of the
operator passed as the third argument and prints the result in the console.Note- The "calculate" function should 
only support four operators "+" , "-" , "*" , "/" (without the quotes) where these operators have their 
usual meaning*/
//calculate(2,3,"*") // prints 6

function calculate(a,b,c){
    if(c==="+")
    {
        console.log(a+b);
    }else if(c==="-")
    {
        console.log(a-b);
    }else if(c==="*")
    {
        console.log(a*b);
    }else if(c==="/")
    {
        console.log(a/b);
    }
}
calculate(2,3,"*");

/*You need to complete the function findTax() that takes a number type variable as an argument which is the salary of a person.
You need to calculate the tax amount on his salary by using Js switch control flow.
The tax rates are given below.

if 500000<= salary >0 then 0% tax on the entire salary
If 1000000 >= salary > 500000 then 10% tax on the entire salary
If 1500000 >= salary > 1000000 then 20% tax on the entire salary
If salary >1500000 then 30% tax on the entire salary

If someone by mistake enters a salary that is less than 0 then you need to throw the ValidationError() error 
whose argument will be "Salary not valid". Put this code inside a try-and-catch block, so that the error is caught in the catch block, 
and then "Salary not valid" should be returned.*/
