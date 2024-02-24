/* Функции - это блок кода который можно повторять многократно */
let a = 5
let b = 3

let c
c = a + b
console.log(c) // 8

function sum2(a, b) {
	let c
	c = a + b
	console.log(c)
	return c
}
const sum = (a, b) => {
	let c = a + b
	console.log(c)
	return c
}

sum(5, 3) // 8
sum(10, 2) // 12
sum2(60, 2) // 62
console.log(sum(10, 3))

/* Функция может быть:
1. Именнованной
2. Анонимной
3. Присвоена переменной
4. аргументом при вызове других функции (коллбек)
5. значением свойства обьекта (метод) 
*/

function myFn(a, b) {
	let c
	a = a + 1
	c = a + b
	return c
}
/* После return функция возвращает результат и завершает работу */
/* Функция всегда возращает значение, если нет Return то возвращает undefined */

const final = myFn(5, 3)
console.log(final) // 9. Без return получили бы undefined

const person = {
	name: 'Dima',
	age: 25,
}

const increasedAge = person => {
	person.age += 1
	return person
}
increasedAge(person)
console.log(person.age) // 26
/* внутри функции не рекомендуется мутировать внешние обьекты */

/* чтобы этого избежать нужно создавать копии обьектов внутри функции */
const withoutMutFx = person => {
	const copyOfPerson = JSON.parse(JSON.stringify(person))
	copyOfPerson.age += 1
	return copyOfPerson
}
const newPerson = withoutMutFx(person)
console.log(newPerson.age) // 27
console.log(person.age) // 26

/* Правила работы с функциями
1. Называть функции исходя из выполняемый задач
2. Одна функция должна выполнять одну задачу
3. Не рекомендуется изменять внешние относительно функции переменные
 */
