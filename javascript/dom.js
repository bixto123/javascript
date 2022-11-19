//  Création d'un object littéral
const human = {
	Name: "Fabrice",
	Lastname: "Dame",
	Weight: "50kg",
	Size: "1m 72cm",
	Gender: "Male"
}

//  Affiche le contenu de l'object littéral human
console.log(human);

//  Obtient un élement par son selecteur comme en css
const ul2 = document.querySelector("#ul2");

//  Création d'un élement <li></li> pour chaque élément de l'object littéral human
for (const element in human) {
	const li = document.createElement("li");
	li.setAttribute("class", "list-group-item");
	li.textContent = element.valueOf() + ": " + human[element.valueOf()];
	ul2.appendChild(li);
}

//  Affichage d'un bouton clickable qui affiche bonjour le monde
let flag = false;
const button1 = document.querySelector("#button1");
button1.onclick = function (e) {
	const paragraph7 = document.querySelector("#paragraph7");
	if(!flag) {
		paragraph7.style.color = "green";
		paragraph7.textContent = "Bonjour le monde";
	}
	else {
		paragraph7.style.color = "white";
		paragraph7.textContent = "";
	}
	flag = !flag;
}

// Affichage d'un formulaire input et de son contenu quand le bouton est clické

// Création et configuration d'un élément label */
const label = document.createElement("label");
label.setAttribute("for", "name");
label.textContent = "Nom:";
label.style.marginRight = "1rem";

//  Création et configuration d'un élément input de type text
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("minlength", 4);
input.setAttribute("maxlength", 8);
input.setAttribute("size", 10);
input.style.marginRight = "1rem";

//  Création et configuration d'un élément button
const button2 = document.createElement("button");
button2.textContent = "Afficher le contenu du fomulaire";

//  Création et configuration d'un élément p
const paragraph8 = document.createElement("p");
paragraph8.textContent = "";
paragraph8.style.color = "red";

//  Requière l'élement .section et lui ajoute les éléments label, input, button2 et paragraph8
const section = document.querySelector("#section");
section.appendChild(label);
section.appendChild(input);
section.appendChild(button2);
section.appendChild(paragraph8);
button2.onclick = function (e) {
	paragraph8.textContent = input.value;
}