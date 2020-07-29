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

//Skoðuðum allt í consoleinu
//Skoðuðum prototype í consolinu

*/


/*
Fyrirlestur 63 ***********************
Creating Objects: Object.create



var personProto = {
    caæculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});

*/

/*
Fyrirlestur 64 ***********************
Creating Objects: Primitives vs. Objects


var a = 23; //Primatives geima gildi í var sjálfu
var b = a;
a = 46;
console.log(a);
console.log(b);

//objects gera það ekki, þeir benda bara í minnið hvar objectið er

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age); // age breytist í obj2 því það er ekki geymt í var obj2

//functions eru eins og objects

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco'; //Objectið fer tæknilega aldrei í functionið. Bara það sem bendir á það
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/


/*
Fyrirlestur 65 ***********************
Creating Objects: Passing functions as Arguments
*/

var years = [1990, 1965, 1937, 2005, 1999];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }    
}


var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);








