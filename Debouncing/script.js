const inputBox=document.getElementById('input');
console.log(inputBox);

const searchCallback=inputBox.addEventListener('input',(e)=>{
    const value=e.target.value;
    console.log(value);
})

input.addEventListener('input',searchCallback);

//Debouncing...