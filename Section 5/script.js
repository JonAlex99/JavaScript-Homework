/*
Fyrirlestur 61 ***********************
Creating Objects: Function Constructors


//Function construction

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};

var Person = function(name, yearOfBirth, job){ //Function constructors byrja ávalt á stórum staf
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function() { //Hérna er verið að nota prototype
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'desigenr');
var mark = new Person('Mark', 1948, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

/*
Fyrirlestur 62 ***********************
The Prototype Chain in the Console
*/

//Sami kóði frá fyrirlestrinum á undan

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
};

var Person = function(name, yearOfBirth, job){ //Function constructors byrja ávalt á stórum staf
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function() { //Hérna er verið að nota prototype
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'desigenr');
var mark = new Person('Mark', 1948, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);