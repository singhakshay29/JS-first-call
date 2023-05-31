
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