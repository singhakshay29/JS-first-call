//forms


//1.Select Element

//keypress

// const nameElement=document.getElementById("name");
// console.dir(nameElement);

// let myname="";

// nameElement.addEventListener('keypress',(event)=>{
//     console.log(event);
//     let key=event.key;
//     myname+=key;
//     console.log(key);
//     console.log(myname);
// })

//keypress event only capture characters not the backspace & not the alt button


//keydown

// const nameElement=document.getElementById("name");
// console.dir(nameElement);

// let myname="";

// nameElement.addEventListener('keydown',(event)=>{
//     console.log(event);
//     let key=event.key;
//     myname+=key;
//     console.log(key);
//     //console.log(myname);
// })

//prevent copy,pasting

const nameElement=document.getElementById("name");
console.dir(nameElement);

const otherElement=document.getElementById('othername');

let myname="";

nameElement.addEventListener('copy',(event)=>{
    console.log('copy..');
    event.preventDefault();
})


//focus

nameElement.addEventListener('focus',(event)=>{
    console.dir(event);
    event.target.value="";
})


//blur




const formelement=document.getElementById("forms");
formelement.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("submit");
    console.log(event);
})


