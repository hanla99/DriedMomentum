const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const allTodo = openAllTodo();

function openAllTodo() {
  if (localStorage.getItem("allTodo") === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("allTodo"));
  }
}

function saveAllTodo() {
  localStorage.setItem("allTodo", JSON.stringify(allTodo));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const willTodo = {
    id: new Date().valueOf(),
    text: todoInput.value,
  };
  todoInput.value = "";
  allTodo.push(willTodo);
  paintTodo(willTodo);
  saveAllTodo();
  todoList.scrollTop = todoList.scrollHeight;
}

function paintTodo(willTodo) {
  const newLi = document.createElement("li");
  const newWrapper = document.createElement("span");
  const newSpan = document.createElement("span");
  newLi.id = willTodo.id;
  newWrapper.classList.add("todo-wrapper");
  newSpan.innerText = willTodo.text;
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("tabindex", "-1");
  const delButton = document.createElement("button");
  delButton.innerText = "X";
  delButton.setAttribute("tabindex", "-1");
  delButton.addEventListener("click", handleDeleteButton);
  newLi.appendChild(newWrapper);
  newWrapper.appendChild(checkBox);
  newWrapper.appendChild(newSpan);
  newWrapper.appendChild(delButton);
  todoList.appendChild(newLi);
}

function handleDeleteButton(event) {
  const delLi = event.target.parentElement;
  const found = Number(delLi.id);
  delLi.remove();
  const delTodo = allTodo.findIndex((e) => e.id === found);
  allTodo.splice(delTodo, 1);
  saveAllTodo();
}

function paintTodoAll(obj) {
  obj.forEach(function (i) {
    paintTodo(i);
  });
}

// list open

const todo = document.querySelector("#todo");
const todoBtn = document.querySelector(".todo-btn");

function handleTodoBtn() {
  if (todo.classList.contains("todo-open")) {
    todo.classList.remove("todo-open");
  } else {
    todo.classList.add("todo-open");
  }
  // todo.classList.add();
}

todoBtn.addEventListener("click", handleTodoBtn);

// activate
todoForm.addEventListener("submit", handleTodoSubmit);

paintTodoAll(allTodo);
