// Création d'un object littéral
const human = {
    name: "Fabrice",
    lastname: "Dame",
    weight: "50kg",
    size: "1m 72cm",
    gender: "male"
}

// Affiche le contenu de l'object littéral human
console.log(human);

// Obtient un élement par son selecteur comme en css
const ul1 = document.querySelector("#ul1");

// Création d'un élement <li></li> pour chaque élément de l'object littéral human
for (const element in human) {
    const li = document.createElement("li");
    li.textContent = element.valueOf() + ": " + human[element.valueOf()];
    ul1.appendChild(li);
}