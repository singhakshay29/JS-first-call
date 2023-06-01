const container =document.getElementById("c1");
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
//42-45p