//Block scope was added on ES6
function fruits() {
  console.log(fruit1);
  if (true) {
    var fruit1 = 'apple';
    let fruit2 = 'Kiwi';
    const fruit3 = 'Banana';
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();