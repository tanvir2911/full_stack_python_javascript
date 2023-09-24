// static function

class Person{
    constructor(fname, lname){
        this.firstName =fname;
        this.lastName = lname;
    }

    greeting(){  // should be called by the object or instance of the class
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    static test(){ // should be called by the class itself
        console.log("I am static function");
    }
}

const person1= new Person("Md. Mozammel", "Hossain");
person1.greeting();
Person.test();