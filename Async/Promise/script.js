//Promise represents the future value and we are assured we will get in future

//three state in promise
//1.Pending---->initial state
//2.Fullfilled----->task is completed and get the result
//3.Rejected---->task is failed



//we fetch(server) api to call the server

console.log("hello");

const promiseresults=
fetch('https://api.kanye.rest/')//fetch is an internal function provided by browser it return the promise result(fetch created by browser people)
.then(responseObj=>{            //.then are consumer of promise
    console.log(responseObj.status)/////it give the status
    return responseObj.json()////to se the result value 
})
.then(data=>{
    const quote=data.quote;


    const element=document.createElement('h1');


    element.textContent=quote;


    const body=document.body;
   // body.appendChild(element);
    console.log('data',data)
}).catch(error=>{
    console.log('Something is wrong')
    console.log(error);
})

console.log(promiseresults);

console.log('its completed')

//Implementation waya async


async function fetchingdata(){

    console.log('initial');
    const awaitresult=await fetch("https://api.kanye.rest/")//fetch will give the response to awaitresult,response object is huge their are so many key value

    console.log(awaitresult);


    const data= await awaitresult.json();//json give the data to our data variable....?
    console.log(data);
    const{quote}=data;
   // const quote=data.quote; above and this line are ..??
   console.log(data);

    console.log('after fetching');

    console.log(awaitresult);
    addingToDom(quote);


}

fetchingdata();




//adding data to dom

function addingToDom(quote){
    const newElement=document.createElement('h1');
    newElement.innerText=quote;

    const body=document.body;
    body.appendChild(newElement);
}





//Behind the scenes



// console.log("Let's do it")//1.
// fetch("https://api.kanye.rest/")//.then always return something
// .then(response=>{
//     return response.json();
// }).then(data=>{
//     console.log(data);//3.//we get the data
// }).then(data=>{
//     console.log(data);//3./we get undefined
// }).catch(error=>{
//     console.log("something is wrong");//2
// }).finally(()=>{
//     console.log("all task completed");
// })





console.log("Let's do it")//1.
fetch("https://api.kanye.rest/")//.then always return something
.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);//3.//we get the data
}).catch(error=>{
    console.log("something is wrong at 1");//2
}).then(data=>{
    console.log(data);//3./we get undefined
}).catch(error=>{
    console.log("something is wrong at 2");//2
}).then(data=>{
    console.log(data);//3./we get undefined
}).then(data=>{
    console.log(data);//3./we get undefined
}).then(data=>{
    console.log(data);//3./we get undefined
}).catch(error=>{
    console.log("something is wrong at 5");//2
}).finally(()=>{
    console.log("all task completed");
})