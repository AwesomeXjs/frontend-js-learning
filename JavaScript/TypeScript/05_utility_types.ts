//Utility types

//Partial<>
//Когда не известно что придет с сервера и все свойства опциональны можно использовать тип Partial <>   - он автоматически ставит возле каждого свойства '?'
type User6 = Partial<{
	name: string
	age: number
	car: boolean
}>

//Required<>
//Делает все свойства обязательными даже если они были опциональны
type User7 = Required<{
	name?: string
	age?: number
	car?: boolean
}>

//Readonly<>
//Не позволяет перезаписывать свойства обьекта
const user7: Readonly<{ name: string }> = {
	name: 'Dima',
}

//Record<Keys, Type>
//Записывает какие ключи должны быть у обьекта (имена свойств) и применяет выбранные типы к вложенным обьектам
type Example1 = 'name' | 'age'
type Record1 = {
	name: string
	age: number
}

const myInfoAge: Record<Example1, Record1> = {
	name: { name: 'Dima', age: 25 },
	age: { name: 'Dima', age: 28 },
}

//Pick<Type, Keys>
//Делает деструктуризацию выбранного типа и копирует его выбранные типы
type User8 = Pick<User7, 'name' | 'age'>
const myUser8: User8 = {
	name: 'Dima',
	age: 28,
}

//Omit<Type, Keys>
//Работает обратно Pick<> - удаляет выбранные типы
type User9 = Omit<User7, 'age'>

const myInfo1: User9 = {
	name: 'Dima',
	car: true,
}

//ReturnType<Function>
//Возвращает тип выбранной функции
/* type ExampleFunctionType = ReturnType<User3['getMoreInfo']> */ //type of ExampleFunctionType === number

//NonNullable <Type>
//если в определенном типе есть undefined - он уберет его в конкретном кейсе

type exampleNull = string | undefined

const giveMe = (yo: NonNullable<exampleNull>) => {
	yo = '123'
	return undefined
}
