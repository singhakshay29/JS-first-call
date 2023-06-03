const container =document.getElementById("container");
container.style.border="5px solid black";
container.style.width="150px";
container.style.height="100px";
container.addEventListener("click",(event)=>{
    console.log("i am clicked")
    console.dir(event)
    const buttontarget=event.target;
    console.dir(buttontarget);

    buttontarget.style.height="200px";
    buttontarget.style.width="400px";
    buttontarget.style.backgroundColor="red";
})


const grandcontainer=document.getElementById("gparents");
grandcontainer.style.border="4px solid black";
grandcontainer.style.width="400px";
grandcontainer.style.height="400px";
grandcontainer.style.backgroundColor="green";
grandcontainer.addEventListener('click',()=>{
    console.log("grandparent clicked");
},false)


const parentscontainer=document.getElementById("parents");
parentscontainer.style.border="4px solid black";
parentscontainer.style.width="200px";
parentscontainer.style.height="200px";
parentscontainer.style.margin="80px";
parentscontainer.style.backgroundColor="yellow";
parentscontainer.addEventListener('click',(event)=>{
    console.log('parent is clicked')
    event.stopPropagation();
},false)

const childcontainer=document.getElementById("child")
childcontainer.style.border="4px solid black";
childcontainer.style.width="80px";
childcontainer.style.height="80px";
childcontainer.style.margin="50px";
childcontainer.style.backgroundColor="red";
childcontainer.addEventListener('click',(event)=>{
    console.log('child is clicked');
    event.stopPropagation();
},false)



//Event delegation
//stopPropagation-----it stop the event object at current element
//event propagation is freezed

//adding event listeneris basically adding an object in the memory


const mysubmitbutton=document.getElementById('submit');
mysubmitbutton.style.backgroundColor="grey";
mysubmitbutton.style.border="4px solid black";
mysubmitbutton.style.height="100px";
mysubmitbutton.style.width="100px";


// mysubmitbutton.addEventListener('click',()=>{
//     console.log('click me yrr');
// })

//we have to give the name to our function for that
mysubmitbutton.addEventListener('click',buttonClickHandle)

function buttonClickHandle(event){
    console.log('click me');
}















//------------dom content loaded-------------


// document.addEventListener('DOMContentLoaded')
// const containerDiv=document.getElementById("container");
// console.dir(containerDiv);


//in parsing phase-->a   
//in excuation phase---->b
//dom tree creation start till title where it see the js which will be downloaded and excuted
//after excution pending dom tree creation start after the creation browser create an event called domContentLoaded

// document.addEventListener('DOMContentLoaded',()=>{               //a-phase     //after parsing phase excution state are start//in which  function is regesterd only

//     console.log("------inside--------")                          //when excution 
//     const containerDiv=document.getElementById("container");
//     console.dir(containerDiv);
// })

// console.log("-----------outside------------")                   //a--phase // in b--phase  print it

// const containerDiv=document.getElementById("container");        //a--phase //in -b---phase  as dom tree is incomplete and due to hoisting

// console.dir(containerDiv);                                      //b-phase print null
//after excution phase left over dom tree creation start and when dom tree created 100%, browser broadcast one event
//which goes to all file html,css,js--->"dom contentload"--->after this our function will be excuted



// //1.select the elemet
// const myclickdiv=document.getElementById("container");
// console.dir(myclickdiv);

// myclickdiv.style.border="2px solid black";
// myclickdiv.style.width="150px";
// myclickdiv.style.height="150px";


// //2.adding event listener
// myclickdiv.addEventListener('click',()=>{
//     console.log('i am clicked');
// })

// //

