let - // изменяемая переменная
const - // неизменяемая переменная, но можна поменять если задать обьект

"use strict"; - // современный режим javascript - всегда игпользовать эту дерективу

null - // когда чего просто не существует
undefined - // что-то существует но значения у него никакого нет
BigInt - // работа с большими числами

// Обьект
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj.name);

// Массив
let arr = ['plum', 6, 'orange.jpg', {}, []];
console.log(arr[1]);

// Ок, Нет ответ
const result = confirm("Are you here?");

// Ввести в строку ответ
const answer = prompt("How old are you?", "18");

// Возвращает тип оператора
typeof()

// Интерполяция
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

// Увеличение +1
++incr incr++

// Уменьшение -1
--decr decr--

// Свойства и методы
console.dir(Number);


// -------------------------- УСЛОВИЯ 


&& - //  И это права и это правда

|| - // Или это правда или это правда

! - // Оператор отрицания

!= - // Не равен

// Кроме if else есть болеее краткое 

const num = 50;

switch (num) {
    case 49:
        console.log('неверно'); 
        break;
    case 50:
        console.log('верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}


// -------------------------- GIT


git init
git config --local user.name "Vasyl"
git config --local user.email up.vasyl@gmail.com
git config --global user.email up.vasyl@gmail.com
git add -A - добавить все файлы если появились новые 
git status - проверить что изменилось
git commit -a -m"first commit"
git log // инфо про коммиты
git push
git pull



// -------------------------- Циклы


let num = 50;

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}


// -------------------------- ФУНКЦИИ



let num = 10;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));




// -------------------------- СВОЙСТВА И МЕТОДЫ


.length // Длинна
.toUpperCase(); // Верхний регистр
.toLowerCase(); // Нижний регистр
.indexOf("fruit"); // поиск под строки
.slice(6, 11); // начало и конец что отрезать или же задать первую цифру и далее отрежеться до конца
.substr(6, 5); // начало а потом сколько нужно символов отрезать.
Math.round(num) // Округляет цифры, всередине переменная
parseInt(test) // переводит в другую систему исчисления с 12.2px до 12
parseFloat(test) // переводит в другую систему исчисления с 12.2px до 12.2
isNaN(numberOfFilms) // если не число, возвращает правду

const str = "test";
const arr = [1, 2, 4];

console.log(str[2]); // Выведет s
console.log(str.toUpperCase()); 

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello World";

console.log(logg.slice(6));

console.log(logg.substr(6, 5));

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";

console.log(parseInt(test));
console.log(parseFloat(test));





