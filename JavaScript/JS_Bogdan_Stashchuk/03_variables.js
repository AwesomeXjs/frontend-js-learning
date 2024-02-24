/* Переменные дают возможность повторного доступа к значениям */

const abc = 10
console.log(abc) /* 10 */

const str1 = 'Dima '
const str2 = 'Borovik'
console.log(str1 + str2) /* Dima Borovik */

/* Варианты названия переменных:

PascalCase - используется для названия классов и типов
DB_PASSWORD - используется для значений которые известны до запуска приложения и не меняются
camelCase - используется для всех остальных

*/

/* 

Названия переменных должны быть понятными

*/

/* Обьявление перменных:
let , const , var

let - можно изменять после обьявления
const - нельзя изменять после обьявления
var - старое обьявление, не рекомендуется использовать
*/

let a
a = 10
console.log(a) /* 10 */

const c = 10
console.log(c) /* 10 */

a = true
console.log(a) /* true */

let n
console.log(n) /* undefined */
n = 60
console.log(n) /* 60 */

// console.log(myName) /* myName is not defined */
let myName
console.log(myName) /* undefined */
myName = 'Dima'
console.log(myName) /* Dima */

/* Тип переменной определяется типом присвоенного ей значения */
const s = 10
console.log(typeof s) /* number */

/* переменная => имеет значение => значение имеет тип */
/* 
Примитивные типы:

string (строка)
number (число)
boolean (логический)
null (отсутствие)
undefined (неопределенное значение)
symbol (символ) 

*/

/* Ссылочный тип один - обьект */
/* создание ссылки на обьект, значение этого обьекта можно изменять в любом месте приложения даже если обьект присвоен const */
const me = {
	name: 'Dima',
	age: 25,
}
me.age = 30
console.log(me) /* { name: 'Dima', age: 30 } */

/* Присвоение одной и той же ссылки на обьект разным переменным */
const ex1 = me
const ex2 = me

/* При изменении значения обьекта через какую то переменную это значение изменяется во всех других ссылках (переменных) на этот обьект */
ex1.age = 35
console.log(ex2.age) /* 35 */

/* Можно создавать новые свойства в обьекте обращаясь к нему из разных ссылок( переменных) */
ex1.city = 'Pavlodar'
console.log(me.city) /* Pavlodar */

/*                         Динамическая типизация                  */
let p = 'Dima'
console.log(typeof p) /* String */
p = 10
console.log(typeof p) /* number */
/* JS - динамически типизируемый язык */

function fxA() {
	console.log('yo')
}
fxA()
fxA = 35
// fxA() /* TypeError: fxA is not a function */

/* Чтобы избежать таких ошибок нужно всегда использовать const */

/* Правила работы с переменными :
1.Всегда обьявлять переменные перед их использованием
2.Стараться использовать const везде где это можно */

const exampleParse = parseInt('10')

/* Переменные обьявленные с помощью VAR и FUNCTION автоматически поднимаются вверх в ГЛОБАЛЬНОЙ ЗОНЕ ВИДИМОСТИ в коде на стадии компиляции (compilation) и всегда работают даже если мы используем переменные до их обьявления */

varVar = 5
console.log(varVar) // 5
var varVar

justFive() // 5
function justFive() {
	console.log(5)
}
