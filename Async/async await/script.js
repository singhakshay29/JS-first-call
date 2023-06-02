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


