//Дефолтные типы
const age: number[] = [20, 5, 3]
const names: string[] = ['Dima', 'yo']
const fine: boolean = true
const o6: null = null
const o7: undefined = undefined
const o8: any = 'yo'

console.log(o8[0])

//Типизация функции
function functionExample(a: number, b: string, c: boolean = false): string[] {
	return [`${a}`]
}

//Типизация обьекта
const o9: { name: string; age: number; car: { color: string } } = {
	name: 'Dima',
	age: 25,
	car: { color: 'red' },
}

type User = {
	name: string
	age: number
	car: {
		color: string
	}
}
interface User2 {
	name: string
	age: number
	car?: {
		color: string
	}
}
const o10: User2 = { name: 'Dima', age: 25 }
const o11: Array<number> = [1, 2]

//Пример типизации
type User3_status = {
	status: string
}
type User3_data = {
	data: number
}
type User3 = {
	name: string
	age: number
	hasJob: boolean
	getMoreInfo?: (config: User3_status) => User3_data
}

const o13: User3[] = [
	{
		name: 'Alex',
		age: 25,
		hasJob: true,
		getMoreInfo: config => {
			return { data: 1234 }
		},
	},
	{
		name: 'Alex',
		age: 25,
		hasJob: true,
		getMoreInfo: config => {
			return { data: 1234 }
		},
	},
]
