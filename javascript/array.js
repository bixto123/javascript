/* Affiche le contenu d'un tableau dans la console */
function print(arr) {
    arr.forEach((element, index) => {
        console.log(index + ": " + element)
    });    
}

/* Déclare et assign un tableau fruit */
const fruit = ["Bannane", "Melon", "Poire", "Pomme"];

/* Affiche le contenu des tableaux dans la console */
console.log("Tableau fruit:");
console.log(fruit);
console.log("Contenu de fruit:");
print(fruit);

/* Déclare et assign l'élement ul */
let ul = document.getElementById("ul");

/* Definition du style css de l'élement ul */
ul.style.listStyleType = "none";
ul.style.padding = 0;
ul.style.margin = 0;

/* Déclare et assign un tableau list avec une list indexé de ces éléments */
const list = fruit.map(function (element, index) {
    element = index + ": " + element;
    return element;
});

/* Affiche le contenu de list dans le document main.html */
for(let element in list) {
    let li = document.createElement("li");
    li.textContent = list[element];
    ul.appendChild(li);
}