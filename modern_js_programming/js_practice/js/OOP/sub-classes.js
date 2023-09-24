// sub class
// Inheritance 

class Person{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }

    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(fname,lname,phone,membership){
        super(fname,lname);
        this.phone = phone;
        this.membership = membership;
    }

    fullName(){
        console.log(this.firstName, this.lastName);
    }
}

let person1 = new Person("Md. Mozammel", "Hossain");
console.log(person1);
console.log(person1.greeting());
// console.log(person1.fullName());

let customer1 = new Customer("Rony", "Chy","03164161","4646");
console.log(customer1);
console.log(customer1.greeting());
customer1.fullName();

