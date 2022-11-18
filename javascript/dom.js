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
ul1.parentElement.style.listStyleType = "none";
ul1.parentElement.style.padding = "0rem";
ul1.parentElement.style.margin = "0rem";

// Création d'un élement <li></li> pour chaque élément de l'object littéral human
for (const element in human) {
  const li = document.createElement("li");
  li.textContent = element.valueOf() + ": " + human[element.valueOf()];
  ul1.appendChild(li);
}

// Affichage d'un bouton clickable qui affiche bonjour le monde
let flag = false;
const button1 = document.querySelector("#button1").parentElement;
button1.onclick = function (e) {
  const paragraph7 = document.querySelector("#paragraph7");
  if(!flag) {
    paragraph7.parentElement.style.color = "green";
    paragraph7.textContent = "Bonjour le monde";
  }
  else {
    paragraph7.parentElement.style.color = "white";
    paragraph7.textContent = "";
  }
  flag = !flag;
}

// Affichage d'un formulaire input et de son contenu quand le bouton est clické
const label = document.createElement("label");
label.setAttribute("for", "name");
label.textContent = "Nom:";
label.style.marginRight = "1rem";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.style.marginRight = "1rem";

const button2 = document.createElement("button");
button2.textContent = "Afficher le contenu du fomulaire";

const paragraph8 = document.createElement("p");
paragraph8.textContent = "";
paragraph8.style.color = "red";

const section = document.querySelector("#section");
section.appendChild(label);
section.appendChild(input);
section.appendChild(button2);
section.appendChild(paragraph8);
button2.onclick = function (e) {
  paragraph8.textContent = input.value;
}