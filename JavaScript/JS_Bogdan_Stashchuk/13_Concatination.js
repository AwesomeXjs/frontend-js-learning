/* Конкатенация строк */
'Hello' + ' World'
const hello = 'Hello'
const world = 'World'
const greetings = hello + ' ' + world
console.log(greetings) // Hello World

/* Шаблонные строки */
console.log(`${hello} ${world}`) // Hello World

const myInfo = {
	name: 'Dima',
	years: 28,
	living: {
		city: 'Pavlodar',
		country: 'Kazakhstan',
	},
}

const myInfoText = `Привет, меня зовут ${myInfo.name}, мне ${myInfo.years} лет, я живу в городе ${myInfo.living.city} в стране ${myInfo.living.country}`
console.log(myInfoText)
