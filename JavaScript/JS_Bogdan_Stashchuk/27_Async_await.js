/* async/await - специальный синтаксис для упрощения работы с промисами */

async function asyncFn() {
	//Всегда возвращает промис
}

const asyncFnx = async () => {
	//Всегда возвращает промис
	return 'Success!'
}
console.log(asyncFnx())

asyncFnx().then(value => console.log(value))

/* AWAIT */
/* Await ставится только перед ПРОМИСАМИ так как он ожидает результат ПРОМИСА */
const timerPromise = () =>
	new Promise((resolve, reject) => setTimeout(() => resolve(), 2000))

const asyncFn2 = async () => {
	console.log('Timer start')
	const startTime = performance.now()
	await timerPromise()
	const endTime = performance.now()
	console.log('Timer ended', endTime - startTime)
}

asyncFn2()

/* Переход с промисов на async/await */
const getData = async url => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}
getData('https://jsonplaceholder.typicode.com/users/1')
	.then(value => console.log(value))
	.catch(error => console.log(error.message))

/* Для обработки ошибок можно использовать try..catch блок */

/* Ключевые принципы async/await :
1. Async/await - это синтаксическая надстройка над промисами
2. await синтаксис возможен только внутри async функции
3. async функция всегда возвращает промис 
4. async функция ожидает результата иструкции await и не выполняет последующие действия*/

const asyncFn3 = async url => {
	console.log('Ждем')
	const res = await fetch(url).then(res => res.json())
	console.log(res)
}

asyncFn3('https://jsonplaceholder.typicode.com/users/1')
	.then(value => console.log(value))
	.catch(error => console.log(error.massage))
