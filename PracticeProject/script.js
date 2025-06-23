const input = document.querySelector(".usertext");
const btn = document.querySelector(".addItem");
const list = document.querySelector(".todo-list");

btn.addEventListener("click", addTodoItem);

function addTodoItem(event) {
  event.preventDefault();
  const todoName = input.value;
  if (todoName !== "") {
    const div = document.createElement("div");
    div.classList.add("todoItemDiv");
    const newli = document.createElement("li");
    newli.innerText = todoName;
    newli.classList.add("todoItem");
    const combtn = document.createElement("button");
    combtn.innerText = "Completed";
    combtn.onclick = markedItCompleted;
    const delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.onclick = deleteListItem;

    div.appendChild(newli);
    div.appendChild(combtn);
    div.appendChild(delbtn);
    list.appendChild(div);
  }
}

function markedItCompleted(e) {
  const parentElement = e.target.parentElement;
  const element = parentElement.firstChild;
  const secChild = document.querySelector(".todoItemDiv :nth-child(2)");
  if (element.classList.contains("comp")) {
    element.classList.remove("comp");
    secChild.innerText = "Complete";
  } else {
    element.classList.add("comp");
    secChild.innerText = "Incomplete";
  }
}

function deleteListItem(e) {
  const parentElement = e.target.parentElement;
  parentElement.remove();
}
