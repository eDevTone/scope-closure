//Variables

var a; //declaracion
var b = 'b'; //asignacion

b = 'bb'; //reasignacion
var a = 'aa'; //redeclaration


//Global Scope

var fruit = 'Apple';
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();


function countries() {
  country = 'Mexico'; //Es este espacio es una variable global si no le incada el let const o var
  console.log(country);
}

countries();
console.log(country);