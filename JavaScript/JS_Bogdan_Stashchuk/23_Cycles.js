/* Циклы */

/* Цикл for */
/* for(начальное значение, условие, иттерационное действие) {
	блок кода выполняемый на каждой итеррации
} */
/* Все циклы - это инструкции */
for (let i = 0; i < 5; i++) {
	console.log(i)
}
/* перед каждой иттерацией выполняется иттерационное действие */
/* Цикл for можно использовать для массивов но это делать не рекомендуется. нужно использовать функции высшего порядка forEach, map, reduce */
const array = [1, 'avc', true]
array.forEach((e, i) => console.log(`у элемента ${e} индекс ${i}`))

/* Цикл WHILE */
/* while(условие) {
	выполняемый блок кода пока условие правдиво
} */
let p = 0
while (p < 5) {
	console.log(p)
	p++
}

/* Цикл do..while */
/* В отличии от цикла while где блок кода может не выполнится ниразу потому что условие ложно, do while выполнит блок кода как минимум 1 раз  */
/* do {
  блок кода который выполнится как минимум 1 раз
} while (условие) */
let i = 6
do {
	console.log(`i = ${i}`)
	i++
} while (i < 5) // мы увидим 1 иттерацию i = 6, так как условие ложно и код выполнился только 1 раз

/* Цикл for..in */
/* используется для переборв свойств обьекта */
/* for(key in Object) {
	//Действие с каждым свойством обьекта
	//Значение свойства = Object[key]
} */
const person = {
	name: 'Dima',
	years: 25,
}
for (key in person) {
	console.log(`${key} : ${person[key]}`)
}
/* for in также работает для массивов, но делать так не рекомендуется */
const myArray = [12, true]
for (key in myArray) {
	console.log(myArray[key])
}

/* Цикл for of */
/* for(Element of Iterable) {
	// Действия с определенным элементом
} */
const myStr = 'Dmitriy'
for (const e of myStr) {
	console.log(e) // вывел в консоль каждый элемент строки
}
const myArray2 = ['Dima', 45, true]
for (const e of myArray2) {
	console.log(e) // вывел в консоль каждый обьект массива
}
/* For of нельзя использовать для обьектов потому что он не иттерируемый элемент, так как порядок свойств в обьекта не имеет значения */
/* Превратил ключи обьекта в массив, запушил ключ + свойство в новый массив и вывел через for of все свойства в консоль. Так делать не рекомендуется. Нужно использовать forEach */
const person2 = {
	name: 'Dima',
	years: 35,
}
const myArrayPush = []
Object.keys(person2).forEach(key => {
	myArrayPush.push(`${key} : ${person2[key]}`)
})
for (const e of myArrayPush) {
	console.log(e)
}

/* методы keys и values */
/* Object.keys(object) - превращает свойства обьекта в массив */
Object.keys(person).forEach(key => console.log(key, person[key]))
const exMap = Object.keys(person).map(key => `${key} : ${person[key]}`)
console.log(exMap) // [ 'name : Dima', 'years : 25' ]

/* Object.values(object) - превращение значений свойств обьекта в массив */
Object.values(person).forEach(val => console.log(val))
