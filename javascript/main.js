/* Définition d'une fonction print */
function print(element, number) {
    element.innerHTML = "User" + number;
}

/* Définition d'une class User */
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    print(element) {
        element.style.color = "green";
        element.innerHTML =
            "FirstName: " + this.firstname + "</br>" +
            "LastName: " + this.lastname + "</br>" +
            "Age: " + this.age + "</br>" +
            "Is a user";
    }
}

/* Définition d'une class SuperUser héritiere de user */
class SuperUser extends User {
    constructor(firstname, lastname, age, change, remove, ban) {
        super(firstname, lastname, age);
        this.change = change;
        this.remove = remove;
        this.ban = ban;
    }
    print(element) {
        element.style.color = "red";
        element.innerHTML =
            "FirstName: " + this.firstname + "</br>" +
            "LastName: " + this.lastname + "</br>" +
            "Age: " + this.age + "</br>" +
            "Change: " + this.change + "</br>" +
            "Remove: " + this.remove + "</br>" +
            "Ban: " + this.ban + "</br>" +
            "Is a super user";
    }
}

let user1 = new User("Fabrice", "Dame", 44);
let user2 = new User("Tony", "Stark", 38);
let user3 = new SuperUser("Joe", "Bar", 50, true, true, true);
let user4 = new SuperUser("Tony", "Michelli", 50, true, false, false);

let heading1 = document.getElementById("heading1");
let heading2 = document.getElementById("heading2");
let heading3 = document.getElementById("heading3");
let heading4 = document.getElementById("heading4");
let paragraph1 = document.getElementById("paragraph1");
let paragraph2 = document.getElementById("paragraph2");
let paragraph3 = document.getElementById("paragraph3");
let paragraph4 = document.getElementById("paragraph4");
let number = 1;

print(heading1, number++);
user1.print(paragraph1);
print(heading2, number++);
user2.print(paragraph2);
print(heading3, number++);
user3.print(paragraph3);
print(heading4, number);
user4.print(paragraph4);