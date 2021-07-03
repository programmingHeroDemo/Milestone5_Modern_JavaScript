const normalPerson = {
    firstName: 'Rakib',
    lastName: 'Hasan',
    salary: 15000,
    getFullName: function(){
        // object ar vitor function babohare, oi object ar property k "this" dara lekha hoy
        console.log(this.firstName, this.lastName) 
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary; 

    }
}

// console.log(normalPerson)  // give all object 

console.log(normalPerson.firstName) // give if firstName or undefined
 
normalPerson.chargeBill(150)  // call anonimous function
console.log(normalPerson.salary)




