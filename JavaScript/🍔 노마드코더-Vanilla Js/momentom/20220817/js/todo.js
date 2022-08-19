const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //console.log(toDos); //배열
  //localStorage에 저장할때는 문자열형태로 밖에 안됨
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //console.log(JSON.stringify(toDos)); //문자열
}

function deleteToDo(event) {
  //   console.log(event.target.closest("li"));
  //   console.log(event.target.parentNode);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = `${newTodo} `;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // localStorage.setItem("todolist", toDoInput.value);
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //배열
  toDos = parsedToDos;
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo); //forEach는 배열의 원소 탐색
}
