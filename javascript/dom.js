// Création d'un object littéral
const human = {
  Name: "Fabrice",
  Lastname: "Dame",
  Weight: "50kg",
  Size: "1m 72cm",
  Gender: "Male"
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

// Affichage d'un bouton clickable qui affiche bonjour le monde
let flag = false;
const button = document.querySelector("#button").parentElement;
button.onclick = function (e) {
  const paragraph7 = document.querySelector("#paragraph7");
  if(!flag) {
    paragraph7.parentElement.style.color = "red";
    paragraph7.textContent = "Bonjour le monde";
  }
  else {
    paragraph7.parentElement.style.color = "white";
    paragraph7.textContent = "";
  }
  flag = !flag;
}