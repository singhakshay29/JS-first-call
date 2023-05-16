/*You have a document and that has one paragraph that is important for some of your audience 
but useless for the rest. You want to ensure that your users get to choose if they want to hide or see the paragraph.

There is a button that, on click, toggles the visibility of the paragraph <p> with id as useless-paragraph.

That means, if the paragraph is visible, button click should hide it and if it is not visible, 
the button click should show it.
*/

alert("success");
function toggleVisibility(){
    let p=document.getElementById("useless-paragraph")
    if(p.style.display==="none")
    {
        p.style.display="block";
    }else{
        p.style.display="none";
    }
}
