console.log("hello")
//-----try----catch-------//
function sum(a,b){
try{
    //do something
    throw Error('Reference Error')
    let c=a+b
    return c;
}catch(error)
{
    console.log("how are you")
    alert("Something went wrong")
}
}
let result=sum(5,4);
console.log(result);

//----------first class function--------/




//we can treat function just like variable
//1. we can declare function just like variable
//2. 