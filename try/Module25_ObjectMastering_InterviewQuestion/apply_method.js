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

//   ::::::::::::apply call:::::::::::::::::

const heroPerson = {
    fullName : 'Abul',
    fullAddress : 'haven',
    salary: 5000
}

normalPerson.chargeBill.apply(heroPerson, [900]);   // direct call using array[] (a for apply=array)

console.log(heroPerson.salary)

