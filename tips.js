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

// Возвращает тип-значение оператора
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



// -------------------------- CALLBACK Функция



// Это функция которая должна быть выполнена после того как другая функция завершилась 


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});

// или же 

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);




// -------------------------- Обьекты



delete options.name; // удаляет значение с обекта

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

options.makeTest(); // Вызов функции с обекта

const {border, bg} = options.colors; // деструктуризация, вытянуть свойства и вставить в переменные

console.log(Object.keys(options).length); // Выводит кол-во свойств в обекте

console.log(options.name);

delete options.name;

console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') { // Перебирает свойство обекта если он обект
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
    }
}


// -------------------------- МАССИВЫ



'use strict';

const arr = [1, 2, 3, 6, 8];

arr.pop(); // удаляет последний елемент массива
arr.push(10); // добавляет в конец елемент

console.log(arr);


for (let i = 0; i < arr.length; i++) { //перебор массива - обычный цикл массива
    console.log(arr[i]);
}

for (let value of arr) { // перебор массива - цикл метод for of
    console.log(value);
}


// item - индекс массива
// i - значение каждого елемента массива
// arr - сам массив()
arr.forEach(function(item, i, arr) { // перебор массива - цикл метод forEach
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt("", "");
const products = str.split(", "); // создает массив на основание строк
products.sort(); // сортирует все в алфавитном порядке (но только строки)
products.sort(compareNum); // сортирует цифры попорядку
console.log(products);
console.log(products.join('; ')); // обратно переводит с массива в строку

function compareNum(a, b) { // функция которая помогает сортировать цифры попорядку
    return a - b;
}


// -------------------------- Передача по ссылке или по значению Spead оператор



'use strict';

const obj = {
    a: 5,
    b: 1
}

// const copy = obj; // Тут передаеться ссылка на обект obj, поэтому если менять значение то будет меняться везде

// copy.a = 10;
// console.log(copy);
// console.log(obj);


// Как же копировать тогда обект? Клонирование
function copy(mainObj) {
    let objCopy = {}; // Куда копировать

    let key;
    for (key in mainObj) { // цикл и вставляем в новый обект
        objCopy[key] = mainObj[key];
    }

    return objCopy; // вертаем обект
}

const numbers = { // Поверхносна копия обектов
    a: 2,
    b: 5,
    c: { // тут уже вложеный обект, потому это будет ссылка, если меняеться значение то везде
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);


const add = { // Соеденить обект add с обектом numbers
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // Соеденить обект add с обектом numbers


//Копирование массива
const oldArray = ['a', 'b'];
const newArray = oldArray.slice();


// Также копирование
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // розвертает в массив правильно

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // разложит сразу все три елемента в функцию


// Также копирование

const array = ["a", "b"];

const newArray = [...array]; // Копирование в массив

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // Копирование в обект



// -------------------------- ООП



/* Это когда есть много елементов например модальных окон, и они  
могут отличаться друг от друга - шириной, высотой, но имеют те жы свойства - крестик, кнопка, и тд. */


let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);



const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

// john.__proto__ = soldier; // Устаревшая запись прототипа
// Object.setPrototypeOf(john, soldier); // Современная запись

console.log(john.armor);


// Но большинство случаев мы не создаем обекты и тогда прототипы а делаем это все на этапе создания

const vasyl = Object.create(soldier);



// -------------------------- Динамическая типизация JS



// To String

// 1)
console.log(typeof(String(null)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log("https:/vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('3')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean

// false - 0, '', null, undefined, NaN;
// true - все остальное

let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}



// -------------------------- Задачки на собеседований



// 1)
// Выведет 5 так как сначало инкремент стоит так - 5++ а не ++5.
// То есть сначало выведет 5 а потом добавит 1
let x = 5; 
alert( x++ );

// 2)
// [] + false = string (массив это пустая строка)
// отнимаем null + true = NaN - не число
console.log([] + false - null + true);

// 3)
// Выходит 2, так как наследуется последнее значение
let y = 1;
let x = y = 2;
alert(x);

// 4)
// Переведет все в строку - 12
console.log([] + 1 + 2);

// 5)
// Выведет 1, так как [0] обращается по индексу строки
alert( "1"[0] );

// 6)
// && - И - запинается на лжы. Выведет null
console.log(2 && 1 && null && 0 && undefined);
// Тут undefined
console.log(2 && 1 && undefined && 0 && null);

// 7)
// Есть ли разница между
// Да, есть. Так как два знака !! возвразает значение boolean
console.log(!!(1 && 2) === (1 && 2));

// 8)
// || - или - запинается на правде. Выведет 3, последнее значение
// Сначала будет срабатывать И&& а потом ||
alert( null || 2 && 3 || 4 );

// 9)
// a == b?
// нет. Так как это разные массивы, только имеют такую же внутренность
const a = [1, 2, 3]; 
const b = [1, 2, 3];

// 10)
// Выведет infinity - так как это строка. 
alert( +"infinity" );

// 11)
// выведет false так как каждый символ под определенным номером. Е находится ближе чем Я
console.log("Ежик" > "яблоко");

// 12)
// Выведет - 2. Запинается на правде
console.log( 0 || "" || 2 || undefined || true || false );



// -------------------------- Получение елементов со страницы








