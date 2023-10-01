// TODO TASK MANAGER

// const button = document.querySelector(".button");
// const ul = document.querySelector(".todo");

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const input = document.querySelector(".input");
//   const li = document.createElement("li");
//   li.innerText = input.value;
//   ul.appendChild(li);
//   input.value = ``;
// });

const button = document.querySelector(`.button`);
const ul = document.querySelector(`.todo`);

clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});


button.addEventListener(`click`, (e) => {
  e.preventDefault();
  const input = document.querySelector(`.input`);
  const newTask = document.createElement('li');
  newTask.classList.add(`newTask`);
  newTask.innerText = input.value;

  const circle = document.createElement('i');
  circle.className = 'fa-regular fa-circle';

  const trash = document.createElement('i');
  trash.className = 'fa-regular fa-trash-can';

  newTask.appendChild(circle);
  newTask.appendChild(trash);

  ul.appendChild(newTask);
  input.value = ``;
});


// PAUL SOLUTION
// button.addEventListener("click", addToDo);

// function addToDo(e) {
//   e.preventDefault();

//   const listDiv = document.createElement("div");
//   const newTask = document.createElement("li");
//   newTask.classLi st.add("task");
//   newTask.innerText = input.value;
//   listDiv.appendChild(newTask);

//   toDoList.appendChild(listDiv);
//   input.value = "";
// }

const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"long", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("fr-FR", options)