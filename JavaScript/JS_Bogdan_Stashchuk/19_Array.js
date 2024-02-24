/* Массив - это обьект с цифровыми именами свойств */

const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2) //[ 1, 2, 3 ]
console.log(myArray2.length)

const myArray3 = myArray
myArray === myArray3 // true
/* Массив - это обьект а значит у него ссылочный тип */

/* Читать значения массива можно через синтаксис квадратных скобок */
const meArray = [25, 'Dima', 'Pavlodar', 5]
console.log(meArray[0]) // 25
console.log(meArray[0] + meArray[3]) // 30
console.log(meArray.length + meArray[0]) // 29
console.log(meArray['length']) // 4

/* Порядок элементов в массиве ВАЖЕН */
/* Добавлять элементы в массив с помощью квадратных скобок также как через точку в обьектах */
meArray[4] = 'abc'
console.log(meArray) // [ 25, 'Dima', 'Pavlodar', 5, 'abc' ]

/* Методы массивов
push, pop, shift, unshift, forEach, map */
/* Методы - это функции высшего порядка в массивах */

/* PUSH */
const anotherArray = [1, 2, 3]
anotherArray.push(4) // добавление елемента в конец массива (запушить)
console.log(anotherArray) // [ 1, 2, 3, 4 ]
anotherArray.push(45)
console.log(anotherArray) // [ 1, 2, 3, 4, 45 ]

/* POP */
const removed = anotherArray.pop() // аргумент не нужен, удаляет последний элемент в массиве а также ВОЗВРАЩАЕТ УДАЛЕННЫЙ ЭЛЕМЕНТ
console.log(removed) // 45
console.log(anotherArray) // [ 1, 2, 3, 4 ]

/* UNSHIFT */
anotherArray.unshift(true) // добавляет элемент в начало массива
console.log(anotherArray) // [ true, 1, 2, 3, 4 ]

/* SHIFT */
const removedShift = anotherArray.shift() // удаляет первый элемент массива а также ВОЗВРАЩАЕТ УДАЛЕННЫЙ ЭЛЕМЕНТ
console.log(removedShift) // true
console.log(anotherArray) // [ 1, 2, 3, 4 ]

/* ВСЕ ЭТИ ЭЛЕМЕНТЫ МУТИРУЮТ ИЗНАЧАЛЬНЫЙ МАССИВ */

/* Метод forEach */
anotherArray.forEach(el => console.log(el * 2))

const myInfo = {
	name: 'Dima',
	city: 'Astana',
}
anotherArray.forEach(el => {
	console.log(
		`Меня зовут ${myInfo.name} я живу в городе ${myInfo.city} мне ${el} лет`
	)
})

/* Метод MAP */
/* Также как и forEach перебирает каждый элемент и выполняет с ним какое то действие, но еще и возвращает новый массив с результатами */
const newArrayExample = anotherArray.map(el => `${el}`)
console.log(newArrayExample) // [ '1', '2', '3', '4' ]

/* MAP НЕ МУТИРУЕТ ИЗНАЧАЛЬНЫЙ МАССИВ */
console.log(anotherArray) // [ 1, 2, 3, 4 ]

/* Каждый результат который возвращает функция map будет записан в свой слот в новом массиве который возращает метод map */
/* Развернутый пример map: */
const exampleMapArray = anotherArray.map(el => {
	let c
	c = el * 3
	return c
})
console.log(exampleMapArray) // [ 3, 6, 9, 12 ]

/* INCLUDES */
/* Позволяет проверить есть ли в массиве заданный обьект */
const newArrayForInc = [3, 6, 8]
const includesOne = newArrayForInc.includes(6)
console.log(includesOne) // true

/* FIND */
/* Позволяет найти нужный элемент в массиве, возвращает елемент */
const findPostById = (id, array) => {
	return array.find(post => post.postId === id)
}
const posts = [
	{ postId: 1355, commentsQuantity: 5 },
	{ postId: 5131, commentsQuantity: 13 },
	{ postId: 6134, commentsQuantity: 2 },
]
console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }

/* FINDINDEX - работает также как FIND но вместо елемента возвращает его индекс */
const postIndex = posts.findIndex(e => e.postId === 1355)
console.log(postIndex) // 0

/* SOME */
/* Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции. */
/* возвращает булевое значение */
const someArray = [1, 2, 'abc']
const resultSome = someArray.some(e => typeof e !== 'number')
console.log(resultSome) // true

const carOne = {
	speed: 270,
	Name: 'Audi',
	price: 6000,
}
const carTwo = {
	speed: 370,
	Name: 'Toyota',
	price: 2000,
}
const carThree = {
	speed: 470,
	Name: 'Nissan',
	price: 5000,
}
const anotherSomeArray = [carOne, carTwo, carThree]
const someFnx = array => {
	array.some(element => element.price < 3000)
		? console.log(`Есть автомобиль ниже 3000$`)
		: console.log(`Все автомобили выше 3000$`)
}

someFnx(anotherSomeArray) // Есть автомобиль ниже 3000$

/* EVERY */
/* Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. */
/* Возвращает булевое значение */

const everyArray = [1, 2, 3]
console.log(everyArray.every(e => typeof e === 'number')) // true

/* Чтобы сравнить 2 массива по элементно можно превратить их в строки используя JSON.stringify */
const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

const areArraysEqual = (firstArray, secondArray) => {
	return JSON.stringify(firstArray) === JSON.stringify(secondArray)
}

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false

/* Для поиска обьекта в массивах можно привести каждый елемент к строке */
const isElementInArray = (searchElement, inputArray) => {
	if (typeof searchElement !== 'object') {
		return inputArray.includes(searchElement)
	}
	return inputArray
		.map(e => JSON.stringify(e))
		.includes(JSON.stringify(searchElement))
}

const tags = [
	['javascript', 'es6'],
	['css', 'flexbox'],
	['html', 'web-browser'],
]

const fruits = [
	{ title: 'Orange', quantity: 10 },
	{ title: 'Banana', quantity: 5 },
	{ title: 'Apple', quantity: 25 },
]

const primitiveTypesArray = [25, 'x', true, undefined, null]
console.log(isElementInArray(['css', 'flexbox'], tags)) // true
console.log(isElementInArray(['flexbox', 'css'], tags)) // false
console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true
console.log(isElementInArray({ title: 'Banana' }, fruits)) // false
console.log(isElementInArray(25, primitiveTypesArray)) // true

/* FILTER */
/* Возвращает отфильтрованый массив , где элементы удовлетворяют условиям в колбэк функции */

const peoples = [
	{
		name: 'Oxana',
		age: 25,
		budget: 2000,
	},
	{
		name: 'Dima',
		age: 17,
		budget: 5000,
	},
	{
		name: 'Vlad',
		age: 19,
		budget: 45000,
	},
]
/* нужно вернуть true из колбэк функции чтобы отфильтрованный элемент попал в новый массив */
const drunkPeoples = peoples.filter(person => person.age >= 18)
console.log(drunkPeoples)

/* REDUCE */
/* Позволяет вернуть одно требуемое значение из массива (например сумма всех чисел в массиве, или сумма бюджета людей в массиве (обьектов)) */
const resiltReduce = peoples.reduce((acc, ele) => {
	//acc - аккумулятор который аккумулирует в себя каждый вывод из итеррируемой функции
	return acc + ele.budget
}, 0) // 0 - начальное значение аккумулятора
console.log(resiltReduce)

const reduceArray = ['abc', true, 3, undefined, 9, 10, 6, false, 4, null, {}]
const resultReduce = reduceArray.reduce(
	(acc, ele) => (typeof ele === 'number' ? acc + ele : acc),
	0
)
console.log(resultReduce)

/* Concat позвоялет соединять массивы
array.concat([]) */
const arrayOne = [1, 3, 5]
const arrayTwo = [6, 7, 8]
const arrayThree = arrayOne.concat(arrayTwo)
console.log(arrayThree)

/* SORT */
//Сортирует массив, по заданным условиям, не возвращает новый массив, мутирует старый
/* Если результат внутри колбэк функции меньше нуля то a и b не будут меняться местами внутри массива, если результат больше то JS изменит порядос следования и a будет за b */
const sortProductsByPrice = products => {
	return products.map(e => e).sort((a, b) => a.price - b.price)
}

const inputProducts = [
	{
		title: 'Phone case',
		price: 23,
		quantity: 2,
		category: 'Accessories',
	},
	{
		title: 'Android phone',
		price: 150,
		quantity: 1,
		category: 'Phones',
	},
	{
		title: 'Headphones',
		price: 78,
		quantity: 1,
		category: 'Accessories',
	},
	{
		title: 'Sport Watch',
		price: 55,
		quantity: 2,
		category: 'Watches',
	},
]

const sortedProducts = sortProductsByPrice(inputProducts)

console.log(sortedProducts) // Массив отсортированных товаров

const sortArrayOne = [4, 6, 7, 8, 3, 1, 100]
console.log(sortArrayOne.sort((a, b) => b - a))

/* Деструктуризация массива в аргументе функции  */

const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
	console.log(minQty) // 8
	console.log(maxQty) // 29
	console.log(defaultQty) // 10 в первом вызове, 0 во втором вызове
	return defaultQty + maxQty - minQty
}

const inputQuantities1 = [8, 29, 10]
console.log(processQuantities(inputQuantities1)) // 31

const inputQuantities2 = [8, 29]
console.log(processQuantities(inputQuantities2)) // 21

/* Поиск минимального и максимального числа в массиве */
/* ...nums в аргументе - rest оператор, который собирает все значения в массив */
/* ...nums в теле функции - spread оператор который разделяет массив на обьекты */
function minMax(...nums) {
	return [Math.min(...nums), Math.max(...nums)]
}

let min,
	max
	/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
;[min, max] = minMax(24, 5, 34, 10)
console.log(min, max) // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
;[min, max] = minMax(18, 23, 103, 70, 80, 25)
console.log(min, max) // 18, 103

/* SPLIT */
/* Метод строки. Используется чтобы превратить строку в массив с учетом условия( например разделить строку на слова через пробел)  */
const s = 'My home is Pavlodar'
const splitS = s.split(' ')
console.log(splitS)
/* Можно заменить каждое слово в строке через превращение в массив слов и замену каждого */
const difString = s
	.split(' ')
	.map(e => (e = 'dima'))
	.join(' ') //превращает массив в строку и разделяет пробелом
console.log(difString)

/* JOIN - превращает массив в строку по дефолту с запятой между каждым обьектом, ' ' - если будет 2 ковычки и пробел посередине то разделит все пробелом */
