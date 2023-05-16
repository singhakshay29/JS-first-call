/*Write a JavaScript function createDiv(width, height, text) 
that creates and adds a new div element inside the #container div 
with the specified width and height. The div element should have text as its text content.*/



function createDiv(width,height,text){
    const div=document.createElement("div");
    div.style.width=width + "px";
    div.style.height=height+ "px";
    div.textContent=text;
    const element=document.getElementById("container");
    element.appendChild(div);
}