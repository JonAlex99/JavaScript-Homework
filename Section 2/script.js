/***************
 * Lecture nr. 8
 * Variables and data types
 */

/*
console.log('Hello World!!!'); //Þetta gerir það sama og System.out.print í java held ég)

var firstName = 'Jon'; //Þetta er gildi (int/string/double x = bla)
console.log(firstName);

var lastName = 'Alex';
var age = 21;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//var 3years = 3; 
//má ekki skýra var með tölu í byrjuninni (má bara hafa stafi, '_' eða '$')
*/

/***************
 * Lecture nr. 9
 * Variable mutation and type coercion
 */

/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age); //type coertion breytir int í string

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver'

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/


/***************
 * Lecture nr. 10
 * Basic operators
 */
/*
 var year, yearJohn, yearMark;
 now = 2020
 ageJohn = 28
 ageMark = 33

 //Math operators
 yearJohn = now - ageJohn;
 yearMark = now -ageMark;
 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators
 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

 // typeof operator
 console.log(typeof johnOlder);
 console.log(typeof ageJohn);
 console.log(typeof 'Mark is older then John');
 var x;
 console.log(typeof x);
 */

 /***************
 * Lecture nr. 11
 * Operator precedence
 */
/*
 var now = 2020;
 var yearJohn = 1989;
 var fullAge = 18;

 var isFullAge = now - yearJohn >= fullAge; //true
 console.log(isFullAge);

 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 //Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6;
 console.log(x, y);

 //More operators

 //x = x * 2;
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x++;
 console.log(x);
 */

/***************
 * Lecture nr. 12
 * Coding challenge
 */
/*
 var markHeight, johnHeight, markMass, johnMass;
 var markBMI, johnBMI;
 markHeight = 160;
 markMass = 80;

 johnHeight = 170;
 johnMass = 80;

 markBMI = markMass / (markHeight * markHeight);
 johnBMI = johnMass / (johnHeight * johnHeight);

 var markGreater = markBMI > johnBMI;
 console.log("Is Mark's BMI higher than John's? " + markGreater);
 */

 /***************
 * Lecture nr. 14
 * if / else Statements
 */
/*
 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married'){
     console.log(firstName + ' is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = true;
 if (isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/

/***************
 * Lecture nr. 15
 * Boolean logic
 */
/*
 var firstName = 'John';
 var age = 16;

 if(age < 13) {
     console.log(firstName + ' is a boy.');
 }else if (age >= 13 && age <20){
     console.log(firstName + ' is a teenager.');
 } else if(age > 20 && age < 30){
     console.log(firstName + ' is a young man.');
 }  else{
     console.log(firstName + ' is a man.');
 }
 */

/***************
 * Lecture nr. 16
 * The Ternary Operator and switch Statements
 */ 
/*
 var firstName = 'John';
 var age = 16;

 age >= 20 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

 var drink = age >= 20 ? 'beer' : 'juice'; // Þetta er eins og...
 console.log(drink);

 if (age >= 18) { //...þetta 
     var drink = 'beer';
 } else {
     var drink = 'juice';
 }

 //switch statement
 var job = 'teacher';
 switch (job) {
     case 'teacher':
         console.log(firstName + ' teaches kids how to code.');
         break;
     case 'driver':
         console.log(firstName + ' drives an uber in Lisbon');
         break;
     case 'designer':
         console.log(firstName + ' disignes beautiful websites.');
         break;
     default:
         console.log(firstName + ' does something else.');

 }

 switch(true){
     case age < 13:
        console.log(firstName + ' is a boy.');
        break;
     case age >= 13 && age <20:
        console.log(firstName + ' is a teenager.');
        break;
     case age > 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
     default:
        console.log(firstName + ' is a man.');
 }
*/

 /***************
 * Lecture nr. 17
 * Truthy and Falsy values and equality operators
 */ 
/*
 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 var height;

 height = 23;

 if(height || height === 0){
     console.log('Variable is defined');
 } else {
     console.log('Variable has NOT been defined');
 }

 // Equality operators
 if (height == '23'){ //Þetta breytir stringinu 23 í int 23 en 3 = gerir það ekki
     console.log('The == operator does type coercion');
 }
 */

/***************
 * Lecture nr. 18
 * Coding challenge 2
 */  
/*
 var J1, J2, J3, M1, M2, M3, Ma1, Ma2, Ma3;
 J1 = 110;
 J2 = 120;
 J3 = 103;
 M1 = 116;
 M2 = 94;
 M3 = 123;
 Ma1 = 97;
 Ma2 = 130;
 Ma3 = 105;

 var jAverage = (J1 + J2 + J3)/3;
 var mAverage = (M1 + M2 + M3)/3;
 var maAverage = (Ma1 + Ma2 + Ma3)/3;

 if (jAverage > mAverage && jAverage > maAverage){//John wins
     console.log('John is most likely to win with the average score of ' + jAverage);
 }
 else if(jAverage < mAverage && maAverage < mAverage){//Mike wins
     console.log('Mike is most likely to win with the average score of ' + mAverage);
 }
 else if(jAverage < maAverage && mAverage < maAverage){//Mary wins
     console.log('Mary is most likely to win with the average score of ' + maAverage);
 }
 else{
     console.log('It will most likely be a tie');
 }
 console.log(jAverage);
 console.log(mAverage);
 console.log(maAverage);
*/

/***************
 * Lecture nr. 20
 * Function
 */  
/*
 function calculateAge(birthYear){
     return 2020 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1988);
 var ageAlex = calculateAge(1999);
 console.log(ageJohn, ageAlex, ageMike);

 function yearsUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;

     if(retirement > 0){
     console.log(firstName + ' retires in ' + retirement + ' years.');
     } else{
         console.log(firstName + ' is already retired.')
     }
 }

 yearsUntilRetirement(1953, 'John');
 yearsUntilRetirement(1999, 'Mike');
 yearsUntilRetirement(1969, 'Jane');
 */

 /***************
 * Lecture nr. 21
 * Function Statements and Experssions
 */  
/*
 //Function decloration
 //function whatDoYouDo(job, firstName){}

 //Function expression
 var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Mark'));
 console.log(whatDoYouDo('retired', 'Jane'));
 */
/***************
 * Lecture nr. 22
 * Arrays
 */ 
/*
 //Initsilze new array
 var names = ['John','Mark','Jane'];
 var years = new Array(1990,1969,1948);

 console.log(names[0]);
 console.log(names);
 console.log(names.length);

 //Mutate array data
 names[1] = 'Ben';
 console.log(names[1]);

 names[5] = 'Mary';
 console.log(names);

 // Different data types
 var john = ['John', 'Smith', 1990, 'teacher', false];

 john.push('blue');
 john.unshift('Mr.');
 console.log(john);

 john.pop();
 john.shift();
 console.log(john);

 console.log(john.indexOf(1990));
 console.log(john.indexOf(10));

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
 console.log(isDesigner);
*/

/***************
 * Lecture nr. 23
 * Coding Challange 3
 */ 
/*
 var johnsBills = [124, 48, 268];

 function calculatorTip(money){
     if(money < 50){
         return money*0.2;
     }else if(money >= 50 && money < 200){
         return money*0.15;
     }else{
         return money*0.1;
     }
 }

 function calculatorPay(money){
     return calculatorTip(money) + money;
 }

var johnTip = [calculatorTip(johnsBills[0]),calculatorTip(johnsBills[1]),calculatorTip(johnsBills[2])];
var johnPay = [calculatorPay(johnsBills[0]),calculatorPay(johnsBills[1]),calculatorPay(johnsBills[2])];

console.log(calculatorTip(10));
console.log(johnTip);
console.log(johnPay);
*/

/***************
 * Lecture nr. 25
 * Objects and Properties
 */ 
/*
 //Object literal
var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john)
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'desigenr';
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.firstname = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/***************
 * Lecture nr. 26
 * Objects and methods
 */ 
/*
var john = {
    firstName: 'John', 
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age =  2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/***************
 * Lecture nr. 27
 * Coding challenge 4
 */ 

 var john = {
     name: 'John Smith',
     mass: 90,
     height: 1.77,
     BMICalculator: function(){
         this.bmi = this.mass/(this.height*this.height);
         return this.bmi;
     }
 }

 var mark = {
     name:  'Mark Davids',
     mass:  70,
     height: 1.82,
     BMICalculator: function(){
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
 }

 john.BMICalculator();
 mark.BMICalculator();
 console.log(john, mark);

 if(john.bmi > mark.bmi){
     console.log(john.name + ' has a bigger BMI, his BMI is ' + john.BMICalculator());
 }else if(mark.bmi > john.bmi){
    console.log(mark.name + ' has a bigger BMI, his BMI is ' + mark.BMICalculator());
 }else{
     console.log('They have the same BMI');
 }