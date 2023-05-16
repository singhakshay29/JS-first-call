let text= "I am a Newton School Student,ready to became full stack developer";
const p = document.querySelector('p');
p.textContent=text;

const div=document.querySelector('div');
div.classList.add('day')
div.setAttribute('id','app')
    
const btn=document.querySelector('button');
btn.setAttribute('id', 'swap')
btn.classList.add('button_day')

function swapTheme(){
    if(div.classList.contains('day'))
    {
        div.classList.remove('day');
        div.classList.add('night')
        btn.classList.remove('button_day')
        btn.classList.add('button_night')
    }else{
        div.classList.remove('night')
        div.classList.add('day')
        btn.classList.remove('button_night')
        btn.classList.add('button_day')
    }
}
