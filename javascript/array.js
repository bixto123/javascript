/* Affiche le contenu d'un tableau dans la console */
function print(arr) {
	arr.forEach((element, index) => {
		console.log(index + ": " + element)
	});
}

/* Déclare et assign un tableau map avec une list indexé des éléments de arr */
function map(arr) {
	const map = arr.map(function (element, index) {
		element = "Element" + index + ": " + element;
		return element;
	});
	return map;
}

/* Déclare et assign un tableau fruit */
const fruit = ["Bannane", "Melon", "Poire", "Pomme"];

/* Affiche le contenu des tableaux dans la console */
console.log("Tableau fruit:");
console.log(fruit);
console.log("Contenu de fruit:");
print(fruit);

/* Ajout de Orange dans le tableau fruit puis tri par ordre aphabétique */
fruit.push("Orange");
fruit.sort();

/* Déclare et assign l'élement ul */
const ul = document.getElementById("ul");

/* Definition du style css de l'élement ul */
ul.style.listStyleType = "none";
ul.style.padding = 0;
ul.style.margin = 0;

/* Déclare et assign un tableau list avec une list indexé des éléments de fruit */
const list = map(fruit);

/* Affiche le contenu de list dans le document main.html */
for (const element in list) {
	const li = document.createElement("li");
	li.textContent = list[element];
	ul.appendChild(li);
}