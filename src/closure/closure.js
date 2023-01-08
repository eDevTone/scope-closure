function greeting() {
  let username = 'Esteban';

  function displayUserName() {
    return `Hello ${username}`;
  }

  return displayUserName;
}


const g = greeting();
console.log(g);
console.log(g());

//MyMoneyBox
// This save all context of the function
function moneyBox() {
  let saveCoins = 0;
  return (coins) => { 
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };
}

const MyMoneyBox = moneyBox();
MyMoneyBox(5);
MyMoneyBox(5);
MyMoneyBox(125);
console.log(MyMoneyBox);