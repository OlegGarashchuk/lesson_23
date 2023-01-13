"use strict"

//console.log('35' + - "22"); неправильно, викликало 35-22, щоб викликало 13, потрібно написати без +
//console.log('35' * "22"); правильно, викликало 770
//console.log('558' > 22++); неправильно, викликало помилку, через інкремент
//let userCounter = 0;
//let newUsers = userCounter++;
//console.log(newUsers); неправильно, викликало 0
//console.log(!false && 11 || 18 && !''); викличе 11 так як в першому рівнянні (!false && 11) викличе друге true,  в другому рівнянні (18 && !'') викличе друге true, а оператор || викличе перше true
//let name = 0;
//console.log(name ?? "Без імені"); викличе 0, так як він не null чи undefined




//if (1 === "1") {
//   console.log('Істина!');
//} else {
//   console.log('Брехня!');
//} викликало Брехня!

//if (5 == "5") {
//   console.log('Істина!');
//} else {
//   console.log('Брехня!');
//}  викликало Істина!

//let message = (92 > '11' && 58 < 100) ? 'Істина!' : 'Брехня!';
//console.log(message); викликало Істина!

//if (0) {
//   console.log('Брехня!');
//} else if (" ") {
//   console.log('Істина!')
//} викликало Істина!


//Задача №1
//for (let num = 1; num < 6; num++) {
//   console.log(num);
//}

//Задача №2
//let num = 8;
//while (num) {
//   console.log(num);
//   num--;
//} Остальний результат 1, 0 не виводиться так як 0 буде false


//Задача №3
//for (let num = 0; num < 3; num++) {
//   console.log(`Число: ${num}`);
//}

//let num = 0;
//while (num < 3) { 
//   console.log(`Число: ${num}`);
//   num++;
//}



//Задача №4

//Цикл №1
//oneCicle: for (let num = 0; num < 2; num++) {
//Цикл №2
//   for (let size = 0; size < 3; size++) {
//      if (size == 1) {
//         break oneCicle;
//      }
//      console.log(size);
//   }
//}



//Задача №1

//let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
//console.log(numOne);

//Задача №2

//let value = `135.50px`;
//let someNum = parseFloat(value);
//console.log(someNum);

//Задача №3

//let value = 58 + "Фрілансер";
//if (isNaN(value)) {
//   console.log('Результат виразу NaN');
//}

//Задача №4
//console.log(Math.max(10, 58, 39, -150, 0));

//Задача №5
//let summ = 58.858;
//console.log(Math.floor(summ));


//Задача №1
//let fls = "фрилансер";
//let text = `Привіт! Я ${fls}`;
//console.log(text); 

// викликало Привіт! Я ${fls}, потрібно змінну text писати в зворотніх лапках 

//Задача №2

//let text = 'фрилансер';
//console.log(text[5]);

//Задача №3
//let text = 123 + "456";
//console.log(text); отримали 123456, додало рядки.

//Задача №4
//let text = 'фрилансер';
//console.log(text.toUpperCase());


//Задача №5
//let text = 'фрилансер';
//console.log(text.slice(3, 6));


//Задача №6

//let text = 'фрилансер';
//console.log(text.includes('лан', 4)); false

