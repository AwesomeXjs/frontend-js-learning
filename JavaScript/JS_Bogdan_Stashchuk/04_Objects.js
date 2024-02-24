/* Все сущности в JS - это обьекты */
/* Обьект - это набор свойств ИМЯ:Значение */
/* Обьект - это ссылочный тип переменных */

const myCity = {
	city: 'Pavlodar',
	popular: true,
	country: 'KZ',
}

/* Порядок свойств не имеет значения */
/* Доступ к значениям можно получить через точечную запись (Dot notation) */
console.log(myCity.popular) /* true */
console.log(myCity.city) /* Pavlodar */
console.log(myCity.country) /* KZ */
/* Используя точечную запись можно изменять значения или добавлять новые */
myCity.city = 'Astana'
console.log(myCity.city) /* Astana */
myCity.years = 15
console.log(myCity) /* {city:'Astana',popular:true,country:'KZ',years:15} */

const iAM = {
	name: 'Dima',
	years: 28,
	city: 'Pvl',
}
iAM.popular = false
delete iAM.name /* Удаление свойств */
console.log(iAM.name) /* undefined */

const yearsFunction = e => {
	if (e.years == 30) {
		console.log(`${e.name} уже 30 лет!`)
	} else if (e.years > 30) {
		console.log(`${e.name} больше 30 лет! `)
	} else {
		console.log(`${e.name} еще нет 30 лет`)
	}
}

const exObj = {
	name: 'Dima',
	years: 31,
}
yearsFunction(exObj)

const exampleMen = {
	name: 'Dima',
	male: true,
	jeans: 'Blue',
	years: 30,
	skirt: 'yes',
	girlfriends: 'yes',
	boyfriends: 'yes',
}
const exFemale = {
	name: 'Dima',
	male: false,
	jeans: 'Blue',
	years: 30,
	skirt: 'yes',
	girlfriends: 'yes',
	boyfriends: 'yes',
}

const deleteFunction = obj => {
	if (obj.male == true) {
		delete obj.skirt
		delete obj.boyfriends
		console.log(obj)
	} else if (obj.male == false) {
		delete obj.jeans
		delete obj.girlfriends
		console.log(obj)
	}
}

deleteFunction(exampleMen)
deleteFunction(exFemale)

/* Кроме точечной записи можно получать доступ к свойствам через квадратные скобки */

const yourCity = {
	city: 'Astana',
}

console.log(yourCity['city']) /* Astana */
/* Квадратные скобки используюся если название свойства используется в виде переменной */
const myCountry = 'country'
yourCity[myCountry] = 'Kazakhstan'
console.log(yourCity) /* { city: 'Astana', country: 'Kazakhstan' } */

delete yourCity[myCountry]
console.log(yourCity) /* { city: 'Astana' } */

/* Вложенные обьекты */
const exampleCity = {
	city: 'Pavlodar',
	info: {
		popular: true,
		years: 50,
		country: 'USA',
	},
}
console.log(exampleCity.info.popular) /* true */
console.log(exampleCity.info['years']) /* 50 */

/* Использование переменных внутри обьекта */
const herName = 'Diana'
const postQty = 23

const userProfile = {
	herName,
	postQty,
	hasSignAggriment: false,
}
console.log(
	userProfile
) /* { herName: 'Diana', postQty: 23, hasSignAggriment: false } */

/* Глобальные обьекты: Window , Global */
/* Window - глобальный обьект любого браузера */
/* Global - глобальный обьект NodeJS */
/* globalThis - унифицированный глобальный обьект для обоих */
/* console - это метод обьекта window (работает только в браузере) 	*/
/* window.console.log('345') */

/* Метод - свойства обьекта значение которого - функция */
const exCity1 = {
	city: 'New York',
	cityGreeting() {
		console.log('New York is greeting you')
	},
}

exCity1.cityGreeting() /* New York is greeting you */
