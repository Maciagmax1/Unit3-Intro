//firstName - string
let firstName = "Mitch";
console.log(firstName.length);
//lastName - string
//favoriteAnimal - string
//nickName - null
//excitementLevel - number
//isHungry - boolean

//console.log your first name.
//console.log your last name.
//console.log your full name using a template literal.

const myInformation = {
  name: "Adam",
  age: 32,
  favoriteFoods: ["nachos", "pizza", "tacos"],
  dog: {
    name: "Syntax",
    breed: "Mix",
  },
};

myInformation.test = [1, 2, 3];

console.log(myInformation);

const car = {
  speed: 0,
  on: false,
  color: "red",
  speedUp() {
    this.speed++;
  },
  slowDown() {
    this.speed--;
    // this.speed = this.speed -1;
  },
  changeColor(newColor) {
    this.color = newColor;
  },
};

class Student {
  constructor(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const mitch = new Student("Mitch", 28);
const andrew = new Student("Andrew", 28);
const alexa = new Student("Alexa", 28);
const max = new Student("Max", 28);
mitch.sayHello();
andrew.sayHello();
alexa.sayHello();
max.sayHello();

// make an object named “me” and give values to the following properties: firstName, lastName, favoriteAnimal, nickName, excitementLevel, and isHungry
const me = {
  firstName: "Mitch",
  lastName: "Cuckovich",
  favoriteAnimal: "Cheetah",
  nickName: null,
  excitementLevel: 10,
  isHungry: true,
  // add a method to “me” called increaseExcitement that increments the excitementLevel by 1;
  increaseExcitement(excitement) {
    this.excitementLevel += excitement;
  },
};
// console.log “me”
console.log(me);
// call the increaseExcitement method on “me”
me.increaseExcitement(5);
// console.log “me” again. Do you see that excitement incremented?
console.log(me);

// make a class named Person. The constructor accepts the parameters of firstName, lastName, favoriteAnimal, nickName, excitementLevel, and isHungry. Person has the properties of firstName, lastName, favoriteAnimal, nickName, excitementLevel, and isHungry that are set to the corresponding parameters. Add a method to Person called increaseExcitement that increments excitementLevel by 1

class Person {
  constructor(
    firstName,
    lastName,
    favoriteAnimal,
    nickName,
    excitementLevel,
    isHungry
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteAnimal = favoriteAnimal;
    this.nickName = nickName;
    this.excitementLevel = excitementLevel;
    this.isHungry = isHungry;
  }
  increaseExcitement() {
    this.excitementLevel++;
  }
}

const chris = new Person("Chris", "Calleja", "Turtle", null, 9, false);
const chris2 = new Person("Chris2", "Calleja2", "Turtle2", null, 9, false);
// create a couple instances of the Person class.
// call the increaseExcitement method on them separately

chris.increaseExcitement();
chris2.increaseExcitement();
console.log(chris, chris2);

// create an array of names
const names = ["Mitch", "Dan", "James"];
// create an array of people
const people = [chris, chris2];
// console.log the second name in the array of names.
console.log(names[1]);
// change the name of the first person in the array of names.
names[0] = "Someone else";
// console.log the second object in the array of people
console.log(people[1]);
// console.log just the second objects firstName value in the array of people.
console.log(people[1].firstName);
// change the second object's firstName value.
people[1].firstName = "Matthew";
console.log(people);

// ternary example
let age = 17;
// const canVote = null;
// if (age < 18) {
//   canVote = false;
// } else {
//   canVote = true;
// }

const canVote = age < 18 ? false : true;

console.log(canVote);

for (let jelly = 0; jelly <= 100; jelly += 25) {
  console.log(jelly);
}

let counter = 0;
while (counter <= 100) {
  console.log(counter);
  counter += 25;
}

for (let name of names) {
  console.log(name);
}

//console.log "My name is <firstName> and I am hungry" if isHungry is true.
//console.log "My name is <firstName> and I am not hungry" if isHungry is false.
if (me.isHungry) {
  console.log(`My name is ${firstName} and I am hungry.`);
} else {
  console.log(`My name is ${firstName} and I am not hungry.`);
}

me.isHungry
  ? console.log(`My name is ${firstName} and I am hungry.`)
  : console.log(`My name is ${firstName} and I am not hungry.`);

//if you are hungry, set your nickName to be something like: <firstName> the hungry <favoriteAnimal>
//if you are not hungry, set your nickName to be something like: <firstName> the satisfied <favoriteAnimal>
if (me.isHungry) {
  me.nickName = `${me.firstName} the hungry ${me.favoriteAnimal}`;
} else {
  me.nickName = `${me.firstName} the satisfied ${me.favoriteAnimal}`;
}
//console.log nickName

console.log(me.nickName);

//console.log "I'm not excited" if excitement level is less than 4
//console.log "I'm moderately excited" if excitement level is greater than or equal to 4 and excitement level is less than or equal to 7
//console.log "I'm excited" if excitement level is greater than 7

if (me.excitementLevel < 4) {
  console.log("I'm not excited");
} else if (me.excitementLevel >= 4 && me.excitementLevel <= 7) {
  console.log("I'm moderately excited");
} else {
  console.log("I'm excited");
}

//console.log every object in the array
for (let person of people) {
  console.log(person.firstName);
}
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//console.log every first name in the array
//use a loop to find the person with the longest first name.

let personWithLongestName = people[0];
for (let person of people) {
  if (person.firstName.length > personWithLongestName.firstName.length) {
    personWithLongestName = person;
  }
}

console.log(personWithLongestName);

//console.log the object that represents the person with the longest name

//find the average excitement level
//console.log the average excitement level

let test = 0;

while (true) {
  if (test < 75) {
    console.log(test);
    test++;
  } else {
    break;
  }
}
