let achievedCount = 0;
let standbyCount = 0;
// pour récupérer les compteurs du localStorage

function getCounter() {

  const achievedCount = localStorage.getItem("achievedCount") || 0;
  const standbyCount = localStorage.getItem("standbyCount") || 0;
  return { achievedCount: parseInt(achievedCount), standbyCount: parseInt(standbyCount) };
}

// MAJ les compteurs dans localStorage

function todoCounter() {
    const counterAchieved = document.getElementById("counter-achieved");
    const counterStandby = document.getElementById("counter-standby");
    const tasks = todoList.querySelectorAll(".task");
    const clearButton = document.getElementById("clear-button");
  
  
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
  