const normalPerson = {
    firstName: 'Rakib',
    lastName: 'Hasan',
    salary: 1500,
    getFullName: function(){
        // object ar vitor function babohare, oi object ar property k "this" dara lekha hoy
        console.log(this.firstName, this.lastName) 
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary; 

    }
}

//   ::::::::::::use bind:::::::::::::::::
const heroPerson = {
    fullName : 'Abul',
    fullAddress : 'haven',
    salary: 5000
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(1000)
console.log(heroPerson)

