/* Промисы */
/* Промисы позволяют обрабатывать отложенные во времени события */
/* Промис - это обещания предоставить результат позже */
/* Промис может вернуть ошибку если предоставить результат невозможно */

/* У промиса есть 3 состояния: ожидание, исполнен, отклонен */
const myPromise = new Promise((resolve, reject) => {
	/* выполнение асинхронных действий */
	/* внутри этой функции нужно в резуотаие вызвать одну из функций resolve или reject */
	/* изначально промис находится в состоянии pending */
})

myPromise
	.then(value => {
		/* Действия выполняемые в случае успешного исполнения Промиса
    значние value - это значение, переданное в вызове resolve внутри промиса */
	})
	.catch(error => {
		/* действия в случае отклонения Промиса 
		  Значение error - это значение, переданное в вызове функции reject внутри промиса*/
	})

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json()) //берем ответ от сервера и выдираем из него json и ковертируем его в JS обьект. Для этого нужно время а значит resonce.json() возвращает промис
	.then(json => console.log(json)) // действия с сконвертированным ответом
	.catch(error => console.log(error.message)) // действия в случае ошибки

/* Использование fetch внутри промиса */
const getData = url =>
	new Promise((resolve, reject) =>
		fetch(url)
			.then(responce => responce.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)

getData('https://jsonplaceholder.typicode.com/users/1')
	.then(data => console.log(data.name))
	.catch(error => console.log(error.message))
