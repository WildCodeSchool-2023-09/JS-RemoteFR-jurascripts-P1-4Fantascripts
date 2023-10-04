// Fonction thème :

// Thème Parchemin : 

// fonction "Parchemin" modifie les variables CSS dans :root :
//     --background-primary-color : #6f4c37;
//     --color-h1 : #dacbcb;
//     --primary-color : #dacbcb;
//     --color-hover : #6f4c37;
//     --background-hover : #dacbcb;
//     --primary-transition: all 0.5s ease;
//     --background-image : url(img/parchemin.jpg);


//     Ou choix "Wood" modifie les variables CSS dans :root : 

//     --background-primary-color : #6f4c37;
//     --color-h1 : #dacbcb;
//     --primary-color : #dacbcb;
//     --color-hover : #6f4c37;
//     --background-hover : #dacbcb;
//     --primary-transition: all 0.5s ease;
//     --background-image : url(img/wooden.jpg);

//     Ou choix "Tableau" modifie les variables CSS dans :root : 

//     --background-primary-color : #6f4c37;
//     --color-h1 : #dacbcb;
//     --primary-color : #dacbcb;
//     --color-hover : #6f4c37;
//     --background-hover : #dacbcb;
//     --primary-transition: all 0.5s ease;
//     --background-image : url(img/chalkboard.jpg);

function themeSelect(e) {
  const theme = todoList.querySelectorAll(".theme");

  theme.forEach(function (theme) {

    switch (e.target.value) {
      case "parchemin":
        task.style.;
        break;
      case "wood":
        if (task.classList.contains("wood")) {
          task.style.;
        } else {
          task.style.display = "none";
        }
        break;
      case "tableau":
        if (!task.classList.contains("achieved")) {
          task.style.;
        } else {
          task.style.display = "none";
        }
        break;
    }
  });
}