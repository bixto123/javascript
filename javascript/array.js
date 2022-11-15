/* affiche le contenu d'un tableau */
function print(arr) {
    arr.forEach((element, index) => {
        console.log(index + ": " + element)
    });    
}

/* déclare et assign un tableau fruit */
const fruit = ["Bannane", "Melon", "Poire", "Pomme"];

/* déclare et assign un tableau list avec une list indexé de ces éléments */
const list = fruit.map(function (element, index) {
    element = "<li>" + index + ": " + element + "</li>";
    return element;
});

/* affiche le contenu des tableaux */
console.log("Tableau fruit:");
console.log(fruit);
console.log("Contenu de fruit:");
print(fruit);
console.log("Contenu de list:");
print(list);