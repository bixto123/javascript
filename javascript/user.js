/* Définition d'une fonction print */
function print(element, number) {
    element.innerHTML = "Utilisateur" + number;
}

/* Définition d'une class User */
class User {
    /* Initialisation des variables local */
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    /* Définition d'une fonction print */
    print(element) {
        element.style.color = "green";
        element.innerHTML =
            "Prénom: " + this.firstname + "</br>" +
            "Nom: " + this.lastname + "</br>" +
            "Age: " + this.age + "</br>" +
            "Class: utilisateur";
    }
}

/* Définition d'une class SuperUser héritiere de User */
class SuperUser extends User {
    /* Initialisation des variables local */
    constructor(firstname, lastname, age, ban, remove, change) {
        super(firstname, lastname, age);
        this.ban = ban;
        this.remove = remove;
        this.change = change;
    }
    /* Définition d'une fonction print */
    print(element) {
        element.style.color = "red";
        element.innerHTML =
            "Prénom: " + this.firstname + "</br>" +
            "Nom: " + this.lastname + "</br>" +
            "Age: " + this.age + "</br>" +
            "Banir: " + this.ban + "</br>" +
            "Supression: " + this.remove + "</br>" +
            "Changement: " + this.change + "</br>" +
            "Class: super utilisateur";
    }
}

/* Instanciation des User */
let user1 = new User("Fabrice", "Dame", 44);
let user2 = new User("Tony", "Stark", 38);
let user3 = new User("Chuck","Norris", 82);
let user4 = new SuperUser("Jo", "Bar", 50, true, true, true);
let user5 = new SuperUser("Tony", "Danza", 71, true, true, false);
let user6 = new SuperUser("Arnold", "Schwarzenegger", 75, true, false, false);

/* Déclare et assign les élements heading et paragraph */
let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
let heading3 = document.getElementById("heading3");
let heading4 = document.getElementById("heading4");
let heading5 = document.getElementById("heading5");
let heading6 = document.getElementById("heading6");
let paragraph1 = document.getElementById("paragraph1");
let paragraph2 = document.getElementById("paragraph2");
let paragraph3 = document.getElementById("paragraph3");
let paragraph4 = document.getElementById("paragraph4");
let paragraph5 = document.getElementById("paragraph5");
let paragraph6 = document.getElementById("paragraph6");

/* Affiche le contenu de chaque User */
let number = 1;
print(heading1, number++);
user1.print(paragraph1);
print(heading2, number++);
user2.print(paragraph2);
print(heading3, number++);
user3.print(paragraph3);
print(heading4, number++);
user4.print(paragraph4);
print(heading5, number++);
user5.print(paragraph5);
print(heading6, number);
user6.print(paragraph6);