const normalPerson = {
  firstName: "Rahim",
  lastName: "Uddin",
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount, tips, tax) {
    this.salary = this.salary - amount - tips - tax;
       console.log(this);
    return this.salary;
  }
};

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Salam',
    salary: 25000
}

// ############# bind ######### 
// normalPerson.chargeBill();
// const heroChargeBill =  normalPerson.chargeBill.bind(heroPerson); // bind korlee akta function return korbeee
// heroChargeBill(2000);
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(5000);


// ############### call() ########## 
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(friendlyPerson, 2200, 300, 30);
// console.log(heroPerson.salary)
// console.log(friendlyPerson.salary)
// console.log(normalPerson.salary)

// #################### apply() #########
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
normalPerson.chargeBill.apply(friendlyPerson, [1500, 300, 30]);
console.log(heroPerson.salary)
console.log(friendlyPerson.salary)