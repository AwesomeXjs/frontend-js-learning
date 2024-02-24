//Union (соединение типов с помощью | (или этот тип или этот))
function o14(config: User3_status): { data: number } | null | undefined {
	if (config.status === 'ok') {
		return { data: 1234 }
	} else if (config.status === 'false') {
		return undefined
	}
	return null
}

let year: string | number = 5
year = ''

type Year_type = {
	status: string
}
const years: Year_type = {
	status: 'ok',
}

/* const o16 = o14()
console.log(o16) */

//Разница между type и interface
/* type не даст нам создавать 2 типа с одинаковыми названиями, interface соединяет типы если 2 типа имеют одинаковые названия */
//2 склееных интерфейса могут создать ошибки в большом приложении, поэтому лучше использовать type
interface Test1 {
	name: string
}
interface Test1 {
	age: number
}

const myUser: Test1 = {
	name: 'Dima',
	age: 23,
}

//Соединение типов через амперсант &
type Car_15 = {
	color: string
	speed: number
	left: boolean
}

type User_15 = {
	name: string
	age: number
}
type AmperExapmle = Car_15 & User_15

function renderUser(user: User_15) {}
function renderCar(car: Car_15) {}
function renderUserAndCar(userAndcar: Car_15 & User_15) {}

//Пример через интерфейс: (bad practice)
interface AmperInterfaceExample extends User_15, Car_15 {}

//literal types
//Более строго типизирует, до указания определенного требуемого значения (сужаем тип)
function o18(a: 'status') {}
o18('status')

const o20 = (status: 'ok' | 'false' | number = 'ok') => {
	if (status === 'ok') {
		console.log(status)
	} else if (status === 'false') {
		console.log(status)
	} else if (typeof status === 'number') {
		console.log(status)
	}
	return null
}
o20('false') // false
