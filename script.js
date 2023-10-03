// TODO TASK MANAGER

// SELECTEURS
const button = document.querySelector(`.button`);
const todoList = document.querySelector(`.todo`);
const filterList = document.querySelector(".filter-category");


//ECOUTEURS

todoList.addEventListener(`click`, checkDelete);
filterList.addEventListener("input", filterCategory);


//FONCTIONS

button.addEventListener(`click`, (e) => {
  e.preventDefault();

  const listTask = document.createElement("listTask")
  listTask.classList.add("task")

  const input = document.querySelector(`.input`);
  const newTask = document.createElement('li');
  newTask.classList.add(`newTask`);
  newTask.innerText = input.value;
  listTask.appendChild(newTask);

  const confirmButton = document.createElement("button")
  confirmButton.innerHTML = '<i class="fas fa-check"></i>'
  confirmButton.classList.add('check-btn')
  listTask.appendChild(confirmButton)

  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
  deleteButton.classList.add('delete-btn')
  listTask.appendChild(deleteButton)

  todoList.appendChild(listTask)
  input.value = ``;
});


