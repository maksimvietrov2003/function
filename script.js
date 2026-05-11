// # ЗМІНІ

// 1. Створіть змінну з ім'ям `name` і присвойте їй ваше ім'я. Виведіть це ім'я в
//    консоль.

const name = "Maksim";
    console.log(name);



// 1. Створіть змінну `age` і присвойте їй ваш вік. Виведіть в консоль рядок, що
//    містить ваш вік у такому форматі: "Мені {вік} років".

let age = 23;

console.log(`Мені ${age} років`)

// 1. Створіть змінні `x` і `y` і присвойте їм довільні числа. Виведіть в консоль
//    результати додавання, віднімання, множення та ділення цих чисел.

let x = 10;
let y = 20;
console.log(x + y, x * y );


// 1. Створіть змінну `city` і присвойте їй назву вашого міста. Створіть рядок,
//    який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

let city = "Bydgoszcz"

console.log(`Я живу в місті ${city}`);


// 1. Створіть змінну `price` і присвойте їй число. Створіть рядок, що містить ціну
//    з символом гривні, наприклад: "Ціна: 500 грн".

let price = 500;
console.log(`Ціна: ${price} грн`)


// ---

// ```
// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.
// ```

let firstName = "Max";
let lastName = "Vietrov";

console.log(`${firstName} ${lastName}`)

// ---

// ```
// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.
// ```

let a = 2;
let b = 8;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log(`sum ${sum}, difference ${difference}, product ${product}, quotient ${quotient}`)
// ---

// ```
// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.
// ```
 let radius = 5;
 
 let result =  3.14 * radius ** 2;  

 console.log(`result radius ${result}`)
// ---

// ```
// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.
// ```

let someString = "heelo"

console.log(someString.length);
// ---

// ```
// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.
// ```

// ---

let someString1 = "What are you"; 

let firstLetter = someString1[0];

let lastLetter = someString1[someString1.length -1];

console.log(`someString = ${someString1}, firstLetter = ${firstLetter}, lastLetter = ${lastLetter}`);
// ```
// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
// ```

let str1 = "sdfdsfsd"
let str2 = "sdfsdfsda"

let resultStr = str1[str1.length -1] + str2[str2.length -1];

console.log(resultStr)

// ---

// ```
// Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

// ```

// ---

// ```
// Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.

// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total)
// const diff = ;
// console.log(diff)

// ```

// ---

// ```
// Замінити вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// students = students + 50;
// console.log(students);
// ```

// ---

// ```
// Розбери пріоритет операторів в інструкції визначення значення змінної
// `result`.

// const result = 108 + 223 - 2 * 5;
// console.log(result);
// ```

// ---

// ```
// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені у рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = ``;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```