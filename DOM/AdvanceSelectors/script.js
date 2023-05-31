//addition in dom

//basic way
//1.inner Html
//append


//--------------Insertion ways---------
//1.append it takes the element and add it to the last

const body=document.body;
console.dir(body);


const headingtag=document.createElement("h1");
headingtag.textContent="humongous"
body.append(headingtag);

const headingtag2=document.createElement("h1");
headingtag2.innerText="not up to the mark";
body.append(headingtag2);


//2.prepend
//insert the element in the first position

const headingtag3=document.createElement('h2');
headingtag3.textContent="we are starting"
headingtag3.style.color="purple"

body.prepend(headingtag3);

//3.before it add the element before the selected element

const unorderedList=document.getElementById("names");
const newmember=document.createElement('li')
newmember.textContent="aastha";
unorderedList.before(newmember);


//4.after it add the element after the selected element

const anotherele=document.createElement('li');
anotherele.textContent="anjali";
unorderedList.after(anotherele);



//---------4 more ways methods Insertion (insert adjacenetment)---------


//before begin

unorderedList.insertAdjacentHTML("beforebegin","<li>amit</li>")

//afterbegin

unorderedList.insertAdjacentHTML("afterbegin","<li>alakh</li>")

//before end

unorderedList.insertAdjacentHTML("beforeend","<li>sakshi</li>")


//after end

unorderedList.insertAdjacentHTML("afterend","<li>faizal</li>")



