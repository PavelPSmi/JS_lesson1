// Task_1
let Tc = +prompt("enter the temperature");
console.log(Tc +" Enter number");
let Tf = (9 / 5) * Tc + 32;
console.log(typeof Tf);
console.log(Tf + " result");

// Task_2

// let name = "Василий";
// let admin;
// admin = name;
// console.log(admin + " result");

let name,admin;
name = "Василий";
admin = name;
console.log(admin + " result");

// Task_3

console.log(typeof 10);//это число
console.log(typeof "10");//это строка
console.log(10+10+"10");
//результат дает сумму двух чисел и добавляет строку

console.log(10 + "10" + 10);
//результат число + строка + число

console.log(typeof +"10");//знаком + мы преобразовали строку в число
console.log(10 + 10 + +"10");
//результат 30,т.к. мы сложили 3 числа(строка была преобразована)

console.log(typeof -"");//результат число из-за минуса получаем
console.log(10 / -"");
//получаем бесконечность, потому что делим на -0. Результат не определить математически

console.log(typeof "+2,5");//получаем строку
console.log(10 / +"2,5");
//получаем nan, т.к. поделили число на строку. Результат not-a-number

