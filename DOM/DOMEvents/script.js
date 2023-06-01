
const container=document.getElementById("fcontainer");
container.style.color="darkgreen"
container.style.backgroundColor="grey";
container.style.border="4px solid black";
container.style.width='100px';
container.style.height="50px";

container.addEventListener('click',(event)=>{
    console.log("i am clicked");
})

container.addEventListener('onmouseover',()=>{
    container.style.backgroundColor="red";
})

//1.DOM ContentLoaded--->event which weill be used when dom tree fully loaded

document.addEventListener('DOMContentLoaded',()=>{
    const containerDuv=document.getElementById('fcontainer');
    console.dir(containerDuv);
})


//2 loadEvent-->when external resources are fully loaded

document.addEventListener('load',()=>{

})

//3 beforeunload-->

document.addEventListener("beforeunload",()=>{
    //cancel all event listner
    //cleaning
    //saving the form if accidently reload
})