//web pages--->are document (an html page)
// Dots per Inch
//Browser is host which provide some envirnoment
//DOM ---> is resposible for view
//BOM Browser object Model created by google people
//BOM provides -Local storage,location,debugging tools
// ------------Browser/window-----------
// |              |                    |
// js           BOM                   DOM

//DOM has ui structure 1 html 
//BOM has Location, Local storage ,Debugging tools


//window contains all properties of BOM and DOM
//DOM and document both are same
// const a=window.document
// if we do this document contain hole body
//  to se the object 
//  console.dir(a);
//  now we can see the objects of a
//  object is collection of key and value 
//  for every tab we open their we are creating new window object


//  CSSOM-----> Cssobject value model

//  Rendor Tree -----> combination of DOM and CSSOM



//Practice question


const bgbox=document.getElementById("bigbox");
bgbox.style.width="600px";
bgbox.style.height="600px";
bgbox.style.border="3px solid black";
// bgbox.addEventListener('click',(event)=>{
//     bgbox.style.backgroundColor="black";
// })


const smbox1=document.getElementById("red")
smbox1.style.width="100px";
smbox1.style.height="100px";
smbox1.style.border="3px solid black";
smbox1.style.margin="30px";
// smbox1.addEventListener('click',(event)=>{
//     smbox1.style.backgroundColor="red";
//     event.stopPropagation();
// })


const smbox2=document.getElementById("green")
smbox2.style.width="100px";
smbox2.style.height="100px";
smbox2.style.border="3px solid black";
smbox2.style.margin="30px";
// smbox2.addEventListener('click',(event)=>{
//     smbox2.style.backgroundColor="green";
//     event.stopPropagation();
// })



const smbox3=document.getElementById("blue")
smbox3.style.width="100px";
smbox3.style.height="100px";
smbox3.style.border="3px solid black";
smbox3.style.margin="30px";
// smbox3.addEventListener('click',(event)=>{
//     smbox3.style.backgroundColor="blue";
//     event.stopPropagation();
// })



//another way

const bigbox=document.getElementById("bigbox");


bigbox.addEventListener('click',(event)=>{
    if(event.target.id=='red'){
    event.target.style.backgroundColor="red";
    }else if(event.target.id=='green'){
        event.target.style.backgroundColor="green";
    }else if(event.target.id=="blue"){
        event.target.style.backgroundColor="blue";
    }
})



