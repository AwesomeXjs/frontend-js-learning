/* Тернарный оператор */
/* Конструкция с тернарным оператором - это выражение и оно возвращает всегда значение */
/* Условие? Выражение 1: Выражение 2 
Если условие истинно то возвращает результат выражения 1
Если условие ложно то возвращается результат выражения 2
*/

!undefined ? console.log('true') : console.log('not true') // true

const value = 0

value ? console.log(`true`) : console.log(`false`)

const person1 = {
	name: 'Dima',
	years: 27,
	city: 'Pavlodar',
}
const person2 = {
	name: 'Vlad',
	years: 28,
	city: 'Pavlodar',
}

const greetings = ({ name, years, city }) => {
	console.log(
		`Привет меня зовут ${name}, я из города ${city}, мне ${years} лет`
	)
}
const vlad = 0
const dima = 1
const listOfPersons = []
vlad ? listOfPersons.push(person1) : listOfPersons.push(person2)
listOfPersons[0] === person1 ? greetings(person1) : greetings(person2)
