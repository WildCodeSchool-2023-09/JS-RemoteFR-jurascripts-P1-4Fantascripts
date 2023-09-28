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

button.addEventListener(`click`, (e) => {
  e.preventDefault();
  const input = document.querySelector(`.input`);
  const newTask = document.createElement(`li`);
  newTask.classList.add(`newTask`)
  newTask.innerText = input.value;
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
