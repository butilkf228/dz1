const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

const email = 'asdfgafsfgsdf@gmail.com';
const symbol = "@";
if (email.includes(symbol)) {
    console.log(`Символ ${symbol} є`);
  } else {
    console.log(`Символу ${symbol} немає`);
}

console.log(email);
console.log(email.length);

const first = 'My ';
const second = 'Name ';
const third = 'Is ';
const fullName = first + second + third + 'Viktor';

console.log(fullName);

const userName = 'qwerty';
const payment = 400;

alert(`Дякуємо, ${userName} До сплати ${payment} гривень`);