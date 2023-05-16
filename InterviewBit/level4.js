/*
Q-1 You are given two integer arrays A and B, you have to delete first element of A and add that at the end of B 
and then append both the arrays. 
Finally, print the elements of merged array. 
For example: for A = [1, 2, 3] and B = [4,5], new array A = [2,3] and B = [4,5,1] and merged ans array = [2,3,4,5,1]. 
Please note you have to print one element of ans array in one line, so total output 
lines will be equal to the size of ans array.




ans =>
var size1 = parseInt(readLine().trim());
var A = []
for(var i = 0 ; i < size1; i++ ){
    var x = parseInt(readLine().trim());
    A.push(x);
}
var size2 = parseInt(readLine().trim());
var B = []
for(var i = 0 ; i < size2; i++ ){
    var x = parseInt(readLine().trim());
    B.push(x);
}
// YOUR CODE GOES HERE
var a_remove=A.shift();
B.push(a_remove);
var mergeAB=A.concat(B);
for(let i=0;i<mergeAB.length;i++)
{
    console.log(mergeAB[i]);
}

We can use variables with same name inside multiple fucntions.
If we assign a value to a variable that has not been declared, it will become a GLOBAL variable always.


*/
function fun1(a) {
    a *= 2;
    function fun2(b) {
      return a + b; 
    } 
    a += 2;
    return fun2; 
  }
  
  function fun3(){
    return fun1(2) (2);
  }
  
  console.log(fun3());