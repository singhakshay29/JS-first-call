//Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
let p=document.getElementById("text");
let btn=document.getElementById("jsstyle");
btn.addEventListener('click',()=>{
    p.style.color="red";
})

function js_style(){
    p.style.color="red";
    p.style.fontSize="24px";
    p.style.fontFamily="Comic Sans MS"
}

//Write a JavaScript function to get the values of First and Last names of the following form.
function getFormvalue(){
    var form=document.getElementById("form1");
    for(let i=0;i<form.length;i++){
        if (form.elements[i].value='Submit')
    {  
      console.log(form.elements[i].value);
     }  
   }
    }

    // Here is a sample HTML file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
let pa=document.getElementById("w3r");
function getAttributes(){
    console.log(pa.hreflang);
    console.log(pa.rel);
    console.log(pa.target);
    console.log(pa.href);
}

//Write a JavaScript function to add rows to a table.
let table=document.getElementById("sampleTable");
function insert_Row(){
    
}