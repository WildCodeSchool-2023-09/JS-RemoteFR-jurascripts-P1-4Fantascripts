// TODO TASK MANAGER

// SELECTEURS
const button = document.querySelector(`.button`);
const todoList = document.querySelector(`.todo`);
const filterList = document.querySelector(".filter-category");


//ECOUTEURS

todoList.addEventListener(`click`, checkDelete);
filterList.addEventListener("input", filterCategory);


//FONCTIONS

clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});

button.addEventListener(`click`, (e) => {
  e.preventDefault();

  const listTask = document.createElement("listTask")
  listTask.classList.add("task")

  const input = document.querySelector(`.input`);
  const newTask = document.createElement(`li`);
  newTask.classList.add(`newTask`)
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


function checkDelete(event) {
  const item = event.target
  const task = item.parentElement

  if (item.classList.contains("check-btn")) {
    task.classList.add("achieved");

  } else if (item.classList.contains("delete-btn")) {
    task.classList.add("transighost");
    task.addEventListener("transitionend", function () {
      task.remove();
    });
  }
  todoCounter();
}

function filterCategory(e) {
  const tasks = todoList.querySelectorAll(".task");

  tasks.forEach(function (task) {

    switch (e.target.value) {
      case "all":
        task.style.display = "flex";
        break;
      case "achieved":
        if (task.classList.contains("achieved")) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
        break;
      case "standby":
        if (!task.classList.contains("achieved")) {
          task.style.display = "flex";
        } else {
          task.style.display = "none";
        }
        break;
    }
  });
}

// MAJ les compteurs dans localStorage

function todoCounter() {
  const counterAchieved = document.getElementById("counter-achieved");
  const counterStandby = document.getElementById("counter-standby");
  const tasks = todoList.querySelectorAll(".task");
  const clearButton = document.getElementById("clear-button");

  let achievedCount = 0;
  let standbyCount = 0;

  tasks.forEach((task) => {
    if (task.classList.contains("achieved")) {
      achievedCount++;
    } else {
      standbyCount++;
    }
  });

  localStorage.setItem("achievedCount", achievedCount);
  localStorage.setItem("standbyCount", standbyCount);

  counterAchieved.textContent = achievedCount;
  counterStandby.textContent = standbyCount;


  // Ajout du bouton Clear pour refresh les compteurs

  clearButton.addEventListener("click", () => {
    localStorage.setItem("achievedCount", 0);
    localStorage.setItem("standbyCount", 0);

    counterAchieved.textContent = 0;
    counterStandby.textContent = 0;
  });
}


document.addEventListener("contentCounter", () => {
  const counterAchieved = document.getElementById("counter-achieved");
  const counterStandby = document.getElementById("counter-standby");
  const counters = getCounter();

  counterAchieved.textContent = counters.achievedCount;
  counterStandby.textContent = counters.standbyCount;

});

// pour récupérer les compteurs du localStorage

function getCounter() {

  const achievedCount = localStorage.getItem("achievedCount") || 0;
  const standbyCount = localStorage.getItem("standbyCount") || 0;
  return { achievedCount: parseInt(achievedCount), standbyCount: parseInt(standbyCount) };
}

// ajout de la date

const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"long", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("fr-FR", options);
