
//******************************************
// Работа с переменными
//******************************************
let admin, name; 

name = "Джон";

admin = name;

console.log( admin );
//******************************************
// Преобразование типов
//******************************************
console.log("" + 1 + 0);      // | 10
console.log("" - 1 + 0);      // | -1
console.log(true + false);    // | 1
console.log(6 / "3");         // | 2
console.log("2" * "3");       // | 6
console.log(4 + 5 + "px");    // | 9px
console.log("$" + 4 + 5);     // | $45
console.log("4" - 2);         // | 2
console.log("4px" - 2);       // | NaN
console.log(7 / 0);           // | Infinity
console.log("  -9  " + 5);    // | -9  5
console.log("  -9  " - 5);    // | -14
console.log(null + 1);        // | 1
console.log(undefined + 1);   // | NaN
console.log(" \t \n" - 2);    // | -2
//--******************************************
// Постфиксная и префиксная формы
//--******************************************

let a = 1, b = 1;

let c = ++a; 
let d = b++; 

console.log(c); // 2

console.log(d); // 1
//--******************************************
// Операторы сравнения
//--******************************************
console.log(5 > 4);               // true
console.log("ананас" > "яблоко"); // false
console.log("2" > "12");          // true
console.log(undefined == null);   // true
console.log(undefined === null);  // false 
console.log(null == "\n0\n");     // false
console.log(null === +"\n0\n");   // false
//--******************************************
// if..else
//--******************************************
let message;

let login = 'Сотрудник';

if (login === 'Сотрудник') {
  message = 'Привет';
} else if (login === 'Директор') {
  message = 'Здравствуйте';
} else if (login === '') {
  message = 'Нет логина';
} else {
  message = '';
}
console.log(message);
//--******************************************
//Проверка логина
//--******************************************
let login = 'Админ';
let password = 'Я главный';
let wrongPassword = 'не угадал';
let userDo = 'esc';

if (login === 'Админ') {
    if (password === 'Я главный') {
        console.log('Здравствуйте!');
    } else if (userDo === 'esc') {
        console.log('отмена');
    } else {
        console.log('Неверный пароль');
    }

} else if (userDo === 'esc') {
    console.log('отмена');
} else {
    console.log('я Вас не знаю');
}