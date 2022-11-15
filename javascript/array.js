/* affiche le contenu d'un array */
function print(arr) {
    arr.forEach((element, index) => {
        console.log(index + ": " + element)
    });    
}

/* déclare et assign un array fruit */
const fruit = ["Bannane", "Melon", "Poire", "Pomme"];

/* déclare et assign un array fruit1 avec une list de ces éléments */
const list = fruit.map(function (element, index) {
    element = "<li>" + index + ": " + element + "</li>";
    return element;
});

console.log("Object fruit:");
console.log(fruit);
console.log("Contenu de fruit:");
print(fruit);
console.log("Contenu de fruit1:");
print(list);