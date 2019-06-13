// CODE here for your Lambda Classes
/*
# Prototypes Challenge

Overview: 
  Review the console.log() and object method invocations at the bottom of the page. 
  Update the Animal and Dog constructors so that the methods `dog.eat()` and `dog.speak()` match the commented result next to them.
  
Challenge: 
  1. Add the missing `speak` method.
  2. Complete the `eat` method.

*/

class Animal {
    constructor(attributes) {
        this.weight = attributes.weight
        this.height = attributes.height
        this.food = attributes.food
        this.animalCommonName = attributes.animalCommonName
    }
    eat() {
        console.log(`The ${this.animalCommonName} eats ${this.food}`);
    }
}

class Dog extends Animal {
    constructor(dogAttributes) {
        // Connect the attributes so we can use the this keyword
        super(dogAttributes)
        this.name = dogAttributes.name
        this.bark = dogAttributes.bark
    }
    speak() {
        console.log(`The ${this.name} eats ${this.bark}`);
    }
}


const dog = new Dog({
    'name': 'Dr. Doggo',
    'animalCommonName': "dog",
    'weight': 40,
    'height': 12,
    'food': 'meat',
    'bark': 'Woof!'
});

console.log(dog.animalCommonName); // "dog"
dog.eat(); // "The dog eats meat"
dog.speak(); // "Dr. Doggo says: Woof!"