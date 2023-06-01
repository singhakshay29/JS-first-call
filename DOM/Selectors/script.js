/*
........Selectors
*/
// 1. getElementsByTagName


// let para=document.getElementsByTagName("p");
// console.log(para);

//2.getElementsById

let idname=document.getElementById("para");
idname.style.color='red';
console.log(idname);

//3.getElement by class
let classname=document.getElementsByClassName("container");

//4.getElement by querySelector->
let querySelectorelement=document.querySelector("#para");


/*
--------updation--------------

*/
//1.innerHtml
//in inner Html we can by selecting the item
//can inject any tag by using innerHtml

const card=document.getElementById("card");
console.log("----------card----------")
console.dir(card);
//card.innerHTML="hey i am changed by js command";
card.innerHTML="<h1> are u happy</h1>"


//2.innertext
//innertext does not care about tag it only deals with text only

card.innerText="i am updated by using innertext";


//inner text does not consider space and remove the extra
//all the formatting except the space is saved
// card.innerText=`'abcd'
// 'defgh'
// 'ijklm'
// 'nopqrst'               'uvwxyz'
// `




//3.textContenet

//all the formatting is removed and content will come in single line
// card.textContent=`abcd'
// 'defgh'
// 'ijklm'
// 'nopqrst'               'uvwxyz'
// `


//style


//card.style.color="green";

// --question--

// --write a function to search a name present or not


let search=document.getElementById("name");
//console.dir(search);
const children=search.children;
//console.log(children);
const Arrays=Array.from(children);
//console.log(Arrays);

Arrays.forEach(liElement=>{
    if(liElement.textContent==='amar'){
        console.log("result is true")
    }else{
        //console.log("result is false");
    }

});

// --question--

// --write a function to search a name present if present chnage to vijay


Arrays.forEach(liElement=>{
    if(liElement.textContent==='amar'){
        liElement.textContent='vijay';
       // console.log(liElement);
    }else{
       // console.log("result is false");
    }

});


//addition in dom

//1.create element

const li_Element=document.createElement("vijay denanath chauhan");
console.log(li_Element);

//3.attached with ul

const unorderlist=document.getElementById('name');
unorderlist.append(li_Element);




//------------Removal of element------------


//1.one way
const removeElement=document.getElementById("name");
console.dir(removeElement);
const remo=removeElement.children
//const firstchild=remo.item(2);
//firstchild.remove();
console.log(remo);


//2.another way

const letsremove =document.querySelector("#name > li:nth-child(3)");
letsremove.remove();
console.log(letsremove);

//removeElement.remove();