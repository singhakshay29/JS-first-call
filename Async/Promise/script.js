//Promise represents the future value and we are assured we will get in future

//three state in promise
//1.Pending---->initial state
//2.Fullfilled----->task is completed and get the result
//3.Rejected---->task is failed



//we fetch(server) api to call the server

// console.log("hello");

// const promiseresults=
// fetch('https://api.kanye.rest/')//fetch is an internal function provided by browser it return the promise result(fetch created by browser people)
// .then(responseObj=>{            //.then are consumer of promise
//     console.log(responseObj.status)/////it give the status
//     return responseObj.json()////to se the result value 
// })
// .then(data=>{
//     const quote=data.quote;


//     const element=document.createElement('h1');


//     element.textContent=quote;


//     const body=document.body;
//    // body.appendChild(element);
//     console.log('data',data)
// }).catch(error=>{
//     console.log('Something is wrong')
//     console.log(error);
// })

// console.log(promiseresults);

// console.log('its completed')

//Implementation waya async


// async function fetchingdata(){

//     console.log('initial');
//     const awaitresult=await fetch("https://api.kanye.rest/")//fetch will give the response to awaitresult,response object is huge their are so many key value

//     console.log(awaitresult);


//     const data= await awaitresult.json();//json give the data to our data variable....?
//     console.log(data);
//     const{quote}=data;
//    // const quote=data.quote; above and this line are ..??
//    console.log(data);

//     console.log('after fetching');

//     console.log(awaitresult);
//     addingToDom(quote);


// }

// fetchingdata();




//adding data to dom

function addingToDom(quote){
    const newElement=document.createElement('h1');
    newElement.innerText=quote;

    const body=document.body;
    body.appendChild(newElement);
}





//Behind the scenes




console.log("hello");//(1)first line will excute it will got to stack and print the hello and taken from stack

const promiseresults=fetch('https://api.kanye.rest/')//as soon as it sees the fetch it will send an https call to server and all handlers send to web api memory
.then(responseObj=>{            //.all the handlers are save in web api memory along with call back function  (handlers are .then,catch,finally)
    console.log(responseObj.status)//
    return responseObj.json()//
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

console.log('its completed')(2)//excutor come here and excute it


//for web api their is micro taks queue(when the api fetch is successfull it response come in micro queue)
//for set time out their is macro task queue
//both work as same
//their is event loop which work infinitly
//event loop check micro task their is anything if their is response it check whether stack is empty or not if it empty
//resposne come in stack which will excute



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


//..............catching errors...................


// console.log("Let's do it")//1.
// fetch("https://api.kanye.rest/")//.then always return something
// .then(response=>{
//     return response.json();
// }).then(data=>{
//     console.log(data);//3.//we get the data
// }).catch(error=>{
//     console.log("something is wrong at 1");//2
// }).then(data=>{
//     console.log(data);//3./we get undefined
// }).catch(error=>{
//     console.log("something is wrong at 2");//2
// }).then(data=>{
//     console.log(data);//3./we get undefined
// }).then(data=>{
//     console.log(data);//3./we get undefined
// }).then(data=>{
//     console.log(data);//3./we get undefined
// }).catch(error=>{
//     console.log("something is wrong at 5");//2
// }).finally(()=>{
//     console.log("all task completed");
// })





//console.log("Let's do it")//1.
fetch("https://api.kanye.rest/")//.then always return something
.then(response=>{
    return response.json();
},(error)=>{
    console.log('catched the error here 0')
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







//why callback is not used


//1.Due to pyramid of Dom

//2.Order of excution of inner function is not linear

// machine(start,(end)=>{
//     console.log(1);
//     engine(start,(pressue_gain)=>{
//         console.log(2);
//     })
//     console.log(3);
//     engine();
//     console.log(4);

// });

// machine();

//................Promise Creation..............

//fetching...

//1.calling a server

//2.judging the data
//a.if data is ok ....successful
//b.if data is bad....Error..


// const myfetch=new Promise((resolve,reject)=>{
//     //1.calling the server

//     //const data=XMLHttpRequest();///this is the way calling data
//     const data={status:200,url: "blah blah"}
//     data :{
//         name:"kalki"
//         yug:"kalyug"
//     }

//     //judgging the data
//     if(data.status===200)
//     {
//         //goood
//         resolve(data);
//     }else if(data===500){
//         //bad error
//         reject({errorCode : 500, message: "hey there is an error"})
//     }
// })