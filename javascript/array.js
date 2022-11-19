//	Affiche le contenu d'un tableau dans la console
function print(arr) {
	arr.forEach((element, index) => {
		console.log(index + ": " + element)
	});
}

//	Déclare et assign un tableau map avec une list d'élements indexés et fléchés
function map(arr) {
	const map = arr.map(function (element, index) {
		element = "Element" + index + " -> " + element;
		return element;
	});
	return map;
}

//	Déclare et assign un tableau fruit
const fruit = ["Bannane", "Melon", "Poire", "Pomme"];

//	Affiche le tableau fruit et son contenu des dans la console
console.log("Tableau fruit:");
console.log(fruit);
console.log("Contenu de fruit:");
print(fruit);

//	Ajout de Orange dans le tableau fruit puis tri par ordre aphabétique
fruit.push("Orange");
fruit.sort();

//	Déclare et assign l'élement ul1
const ul1 = document.getElementById("ul1");

//	Déclare et assign un tableau list avec une list des éléments de fruit
const list = map(fruit);

//	Affiche le contenu de list dans le document main.html
for (const element in list) {
	const li = document.createElement("li");
	li.setAttribute("class", "list-group-item");
	li.textContent = list[element];
	ul1.appendChild(li);
}