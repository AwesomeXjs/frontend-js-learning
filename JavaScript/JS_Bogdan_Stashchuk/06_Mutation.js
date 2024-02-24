/* При копировании переменных не ссылочного типа происходит копирование по значению (copy by value) */
const a = 10
let b = a
b = 30
console.log(a) // 10
console.log(b) // 30

/* Копирование обьекта */
const person = {
	age: 25,
	name: 'Bob',
	living: {
		city: 'Pavlodar',
		country: 'Kazah',
	},
}
person.age = 22
person.isAdult = true

/* Обьект изменился даже при const так как обьект это ссылочный тип */

const person2 = person
console.log(person2) // { age: 22, name: 'Bob', isAdult: true }
person2.age = 35
console.log(person.age) // 35 Обьект мутировался с другой переменной

/* Как избежать мутаций. Вариант 1: */
const person3 = JSON.parse(JSON.stringify(person)) // метод копирования чтобы потом не мутировать обьект
//Копирует вложенные обьекты
console.log(person3)
person3.age = 59
person3.living.city = 'Astana'
console.log(person.living.city) // Pavlodar
console.log(person3.living.city) // Astana
console.log(person3.age) // 59
console.log(person.age) // 35

/* Вариант 2  */
const person4 = Object.assign({}, person)
//не копирует вложенные обьекты
person4.age = 60
console.log(person4.age) // 60
console.log(person.age) // 35

/* Вариант 3  */
const person5 = { ...person }
person5.age = 70
// Не копирует вложенные обьекты
console.log(person5.age) // 70
console.log(person.age) // 35
