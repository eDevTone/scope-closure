// A esto hace referencia el ambito lexico, esto se refiere al alcance de una variable siguiendo la cadena de scopes.
// Una variable se puede abordar desde un nivel inferior a uno superior, pero no al contrario.
const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { //internal function
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }
  return parent();
}


myFunction();