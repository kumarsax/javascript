//factory pattern

/*
var factoryPerson = function(age, name, profession){
  
    var temp = {};
    
    temp.age = age;
    temp.name = name;
    temp.profession = profession;
    
    temp.printPerson = function(){
//        document.getElementById("").innerHTML="";
        console.log("Age " + temp.age + " Name " + temp.name + " Professions " + temp.profession);
    };
    
    return temp;
    
};

var person = new factoryPerson(25,"John","WoodCutter").printPerson();

//person.printPerson();

*/

// Constructer Pattern

/*
var constructorPerson = function(name,age,sex){
  
    this.age = age;
    this.name = name;
    this.sex = sex;
    
    this.printPerson = function(){
        console.log("Age " + this.age + " Name " + this.name + " Sex " + this.sex);
//        document.getElementById("").innerHTML="";
    };
};

var person = new constructorPerson("Daniel",30,'M').printPerson();

*/

//Prototype Pattern

/*
var prototypePerson = function(){
};

prototypePerson.prototype.age = 0;
prototypePerson.prototype.name = "no defined";
prototypePerson.prototype.sex = "Not defined";

prototypePerson.prototype.printPerson = function(){
        console.log("Age " + this.age + " Name " + this.name + " Sex " + this.sex);
    };

var person = new prototypePerson();
person.age=10;
person.name="Stella";
person.sex="Female";

person.printPerson();

console.log(person.hasOwnProperty('name'));//returns boolean values
console.log('name' in person);//returns boolean values
    
*/

//Dynamic Prototype Pattern
var dynamicPrototypePerson = function(age, name, sex){

        this.age = age;
        this.name = name;
        this.sex= sex;

        if(typeof this.printPerson!= 'function'){
            dynamicPrototypePerson.prototype.printPerson = function(){
            console.log("Age " + this.age + " Name " + this.name + " sex " + this.sex);
        };
    }
};

var person = new dynamicPrototypePerson(15,"jack","male");
    person.printPerson();
