let myName = "Jacob";
const usStates = 50;
var isRaining = true;

let x = 5 + 4;
let y = 5 > 4;
let z = 231 * 4;

//This is a single line comment
/*This comment
is multiple
lines*/

function sayHello() {
    alert("Hello World!");
}
sayHello();
function checkAge(age, name) {
    if (age < 21) {
        alert(`Sorry ${name}, you aren't old enough to view this page!`);
    }
}
checkAge(21, "Charles");
checkAge(27, "Abby");
checkAge(18, "James");
checkAge(17, "John");

const vegetables = ["Carrot", "Corn", "Onions"];
vegetables.forEach(function (value) {
    console.log(value);
});

let people = [
    {
        name: "Joe",
        age: 18,
    },
    {
        name: "Bob",
        age: 47,
    },
    {
        name: "Jill",
        age: 19,
    },
    {
        name: "Scott",
        age: 55,
    },
    {
        name: "George",
        age: 31,
    },
];

people.forEach(function (person) {
    checkAge(person.age, person.name);
});

function getLength(word) {
    return word.length;
}

if (getLength("Hello World") % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}
