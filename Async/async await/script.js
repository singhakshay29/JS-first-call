//async & await



//when js executor see the await it stops the excucation


//await only use when function is async

//async function return promise



function fuddu(){
    return 100
}

const fudduresult=fuddu();
console.log(fudduresult);



async function fun(){
    return 1
}

const funresult=fun();
funresult.then(data=>{
    console.log(data);
})
console.log(funresult);


const promiseresults=fetch('https://api.kanye.rest/')//fetch is an internal function provided by browser it return the promise result(fetch created by browser people)
.then(responseObj=>{            //.then are consumer of promise
    console.log(responseObj.status)
    console.log("akshay")/////it give the status
    return responseObj.json()////to se the result value 
})
console.log("sir");
console.log(promiseresults)


console.log("Let's do it")//1.
fetch("https://api.kanye.rest/")//.then always return something
.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);//3.//we get the data
 })







 let age=30;
 let user={
    name: 'akshay',
    city: 'lko'
 }
 
 let key=age>30?"name":"city";
console.log(user[key])