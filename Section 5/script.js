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

*/

/*
Fyrirlestur 66 ***********************
Furst Class Functions: Functions Returning Functions


function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Mike');
designerQuestion('Bill');
designerQuestion('Jane');

interviewQuestion('teacher')('Adam');
*/


/*
Fyrirlestur 67 ***********************
Immediately Invoke Function Expressions (IIFE)
*/
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(
    function(){
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)(); //Þetta kallast IIFE

//console.log(score);

(
    function(goodLuck){
        var score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    }
)(5);

*/


/*
Fyrirlestur 68 ***********************
Closures
*/
/*

function retirement(retirementAge){
    var a = ' years left until retirement';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
//retirement(66)(1990);


function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


function interviwQuestions(person){
    return function(job){
        if(job === 'designer'){
            console.log(person + ', can you please explain what UX design is?');
        }else if(job === 'teacher'){
            console.log('What subject do you teach, ' + person + '?');
        }else{
            console.log('Hello ' + person + ', what do you do?');
        }
    }
}

var johny = interviwQuestions('John');
johny('designer');

*/

/*
Fyrirlestur 69 ***********************
Bind, Call and Apply
*/
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\m ' + this.age + ' years old.');

        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
    
}
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); //.call kallar á functionið með öðru objecti í huga eins og emily

// john.presentation.apply(emily, ['friendly', 'afternoon']); //Mun ekki virka því fallið okkar er ekki að búast við array. En þannig virkar .apply

var johnFriendly = john.presentation.bind(john, 'friendly'); //.bind geymir gildi eins og friendly þannig það þarf ekki að skrifa það alltaf aftur og aftur.

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');






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

function isFullAge(limit, el){
    return el >= limit;
}


var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/




