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
        return `${student.name} recieves a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr)
        this.previousBackground = attr.previousBackground
        this.className = attr.className
        this.favSubjects = attr.favSubjects
    }
    listsSubjects() {}
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
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
    favLanguage: 'TypeScript',
    specialty: 'Front-end',
    catchPhrase: `Let's Code!!`
});

const sall = new Project_Manager({
    name: 'Sall',
    location: 'Fnockford',
    age: 37,
    favLanguage: 'English?',
    specialty: 'Design',
    catchPhrase: `Watch my colors color`
});