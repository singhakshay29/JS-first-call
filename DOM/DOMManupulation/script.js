const inputbtn=document.querySelector(".todo-input");
const addBtn=document.querySelector(".todo-button");
const addlist=document.querySelector(".todo-list");



addBtn.addEventListener('click',addToList);

function addToList(event){
    const content=inputbtn.value;

    if(!content){
        return;
    }

    const newDiv=document.createElement('div');
    newDiv.classList.add("todo")

    const btn=document.createElement("button");
    btn.innerText="Completed";
    btn.classList.add("compeleted");

    btn.onclick=taskcompleted;
    
    const delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete")

    delbtn.addEventListener('click',deleteMethod);
    
    
    const newLi=document.createElement("li");
    newLi.innerText=content;
    
    newDiv.appendChild(newLi);
    newLi.appendChild(btn);
    newLi.appendChild(delbtn);


    addlist.appendChild(newDiv);

}

function taskcompleted(event){
    const parentElement=event.target.parentElement
    const nameofTODOElement= parentElement.firstChild
    console.log(nameofTODOElement);

    const element=event.target.parentElement;
    console.log(element);
    element.style.color="red";
}

function deleteMethod(event){
    console.log(event);
    const parentElement = event.target.parentElement
    parentElement.remove();
}



let text="I am a Newton School student, ready to become an awesome full stack developer";
const p =document.querySelector('p');
p.innerText=text;

const myDiv=document.getElementById('swap');
myDiv.classList.add('day');

const myBtn=document.getElementById("toggleBtn");
myBtn.classList.add('button_day');

function swapTheme(){
    if(myDiv.classList.contains("day")){
        myDiv.classList.add("night");
        myDiv.classList.add("button_night");
    }else{
        myDiv.classList.add("day");
        myDiv.classList.add("button_day");
    }
}



const myButton=document.getElementById("toggleButton")


const toggle =()=> function(){
const mydiv=document.getElementById("content");
myDiv.classList.add("hidden");
    if(mydiv.classList.contains("hidden")){
        console.log(myDiv.classList);
        mydiv.classList.remove("hidden");
    }else{
        mydiv.classList.add("hidden")
       console.log( myDiv.classList);
    }
}

myButton.onclick=toggle;

