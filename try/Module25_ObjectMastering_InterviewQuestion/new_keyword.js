class Person{
    constructor(firstName, lastName, salary) {
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
}

// "new" keyword use to create a instance of class

const heroPerson = new Person('hero', 'balam', 2000)
console.log(heroPerson)

const lovelyPerson = new Person('sweety', 'papiya', 200)
console.log(lovelyPerson)

