const inputBox=document.getElementById('input');
console.log(inputBox);

const searchCallback= (e)=>{
   //console.log('event',e);
    const value=e.target.value;
    //api call
    console.log(value, "api call");
}

//input.addEventListener('input',searchCallback);

//Debouncing...
//debouncing take my function and take delay time when the user stop typing delay timer start
//Debouncing function will return function which will implemented in eventlistner
//where as eventlistener works with my deboune Search callback function

//basic approch -->user when start typing for every input api call request is generated
//modern approch---> user when start typing when (we created timer)which start when timer surpass the delay we send the api call


// function Debouncing(callback,delay){
//     return function() {
//         console.log(arguments,"arguments")
//         const event=arguments[0];
//         console.log(event,"events");

//         setTimeout(()=>{
//             callback(event);
//         },delay)
//     }

// }

// const debounceSearchCallbackfunction=Debouncing(searchCallback,3000)

// input.addEventListener('input',debounceSearchCallbackfunction);
//now after settime out we have to cancel old api request


// function Debouncing(callback,delay){
//     let timeertime;
//     return function() {
//         //console.log(arguments,"arguments")
//         const event=arguments[0];
//         //console.log(event,"events");
//         clearTimeout(timeertime);

//         timeertime=setTimeout(()=>{
//             callback(event);
//         },delay)
//     }

// }
// const debounceSearchCallbackfunction=Debouncing(searchCallback,3000)

// input.addEventListener('input',debounceSearchCallbackfunction);


//-----------------Throtting-------------------------

// window.addEventListener('resize',()=>{
//     console.log("r u missing me");
// })

const fireBullet =()=>{

    console.log("Death is a privilege, for those who embraces pain. ")
}
 

function throttle(callback,delay){
    let flag=true;
    return function(){
        //console.log(arguments);
        const event=arguments[0];
        if(flag){
            callback(event);
            flag=false;
            setTimeout(()=>{
                flag=true;
            },delay);
        }
    }
}

//window.addEventListener('resize',fireBullet);
const throttleFire=throttle(fireBullet,3000);
window.addEventListener('resize',throttleFire);

//------------------Memorization---------------------------

