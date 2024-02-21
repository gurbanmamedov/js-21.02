//Создай три промта, два числа и  арифметический оператор (+,-,/,*),и выполни вычисление. Отработать ошибку если введено неверное значение

// let num1 = parseFloat(prompt("Введите первое число: "));
// let num2 = parseFloat(prompt("Введите второе число: "));
// let symbols = prompt("Введите оператор (+, -, *, /): ");

// if (isNaN(num1) || isNaN(num2) || !["+", "-", "*", "/"].includes(symbols)) {
//   console.log("Введены неправильные значения.");
// } else {
//   let result;

//   switch (symbols) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         console.log("Ошибка. Деление на ноль");
//         break;
//       }
//       break;
//     default:
//       console.log("Некорректный оператор");
//       break;
//   }

//   console.log('Результат ' + result)
// }

//2 - Добавь промта возможность ввести название фруктов, выбери 5 фруктов

let fruitName = prompt("Введите название фрукта: ");
let fruits = ["apple", "orange", "pineapple", "watermelon", "orange"];
if (fruitName.includes(fruits)) {
  alert("Your fruit is on the list");
} else {
  alert("Your fruit is not on the list");
}

//3 - С помощью объекта Date, выведи какой сегодня день недели

// let currentDate = new Date();

// let weekDay = currentDate.getDay();

// let weekDays = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];

// console.log("Сегодня " + weekDays[weekDay]);
