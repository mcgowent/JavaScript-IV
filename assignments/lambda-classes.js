class Person {
    constructor(attr) {
        this.name = attr.name
        this.age = attr.age
        this.location = attr.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr)
        this.specialty = attr.specialty
        this.favLanguage = attr.favLanguage
        this.catchPhrase = attr.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, string) {
        return `${student.name} recieves a perfect score on ${string}`
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr)
        this.previousBackground = attr.previousBackground
        this.className = attr.className
        this.favSubjects = attr.favSubjects
    }
    listsSubjects(subject) {
        return subject.forEach(function (i) {
            console.log(i)
        })
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class Project_Manager extends Instructor {
    constructor(attr) {
        super(attr)
        this.gradClassName = attr.gradClassName
        this.favInstructor = attr.favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const doni = new Student({
    name: 'Doni',
    location: 'Lardie',
    age: 37,
    previousBackground: 'Plummer',
    className: 'Web02',
    favSubjects: ["Math", "English", "NotMath"],
});

const sall = new Project_Manager({
    name: 'Sall',
    location: 'Fnockford',
    age: 37,
    favLanguage: 'English?',
    specialty: 'Design',
    catchPhrase: `Watch my colors color`,
    gradClassName: 'Web11',
    favInstructor: 'Fred'
});

//Methods--------------------------------------------------------------------------------------------
console.log(sall.speak()) //--------------------------Hello my name is Sall, I am from Fnockford
console.log(sall.demo("Constructor Functions")) //----Today we are learning about Constructor Functions
console.log(sall.grade(doni, "JavaScript")) //--------Doni recieves a perfect score on JavaScript
console.log(sall.standUp("Radio")) //-----------------Sall announces to Radio @channel standy times!
console.log(sall.debugsCode(doni, "Math")) //---------Sall debugs Doni's code on Math
doni.listsSubjects(doni.favSubjects)
console.log(doni.PRAssignment("Java"))
console.log(doni.sprintChallenge("Java"))


//Random Items to Show Functionality------------------------------------------------------------------
console.log(sall.name) //-----------------------------Should Print 'Sall'
console.log(sall.location) //-------------------------Should Print Knockford
console.log(sall.age) //------------------------------37
console.log(sall.favLanguage) //----------------------English?
console.log(sall.specialty) //------------------------Design
console.log(sall.catchPhrase) //---------------------'Watch my colors color