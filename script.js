// sélectionner le boutton effacé
//const clear = document.getElementByClass("clear");
// sélectionner l'élément avec l'id "date"
//const dateElement = document.getElementByClass("date");
// sélectionner la liste
//C// const list = document.getElementByClass("todo");
// sélectionner l'input, la saisie

// // classe font awesome permettant d'obtenir le rond pour valider
// const check = "fa-circle-check";
// // classe font awesome permettant d'obtenir le rond validé
// const unCheck = "fa-circle";
// 
// const trash = "fa-trash";
// // classe font awesome permettant d'obtenir le +
// const submit = "fa-square-plus";

// TODOLIST

// crée une zone de texte
// envoyer son texte dans la "todolist" en liste
// a chaque entrée de liste avoir une fonction pour :
//          soit : "valider"(barre le texte) puis "supprimé"(bruit de papier qui se déchire?) 
//          ou si "supprimé(demande validation)"
//
//



// Les selecteurs
//const input = document.querySelector(".input");
const toDoList = document.querySelector(".todo");
const button = document.querySelector(".button");
const input = document.querySelector(".input")




// Les écouteurs 
button.addEventListener(`click`, );
todoList



// Les fonctions
function addToDo(event) {
    event.preventDefault();
}


// Crée le groupe des li
const listDiv = document.createElement("div");
listDiv.classList.add("task");






// Création <li>
const newList = document.createElement("li");
newList


function newList() {
    let list = document.createElement("li");
    let textList = document.querySelector(".input").value;
    let t = document.createTextNode(textList);
    listDiv.appendChild(list);
    if (textList ==='') {
    return alert("On ne peut pas rien avoir a faire ☺")
} 
} 



//document.body.onload = addElement;

// function newList(){
//     let newLi = document.createElement("li");
//     let newContent = document.createTextNode("input");
//     newLi.appendChild(newContent);
//     const currentLi = document.getElementByClass("todo");
//     document.body.insertBefore(newLi, currentLi);
// }

//Mettre bouton validé



//Mettre le bouton supprimé




// Section
toDoList.appendChild(listDiv);
input.value = '';