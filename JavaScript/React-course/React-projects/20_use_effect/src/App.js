import './App.css'
import { useEffect, useState } from 'react'

function App() {
	const [todo, setTodo] = useState(null)
	console.log('app render')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => response.json())
			.then(json => setTodo(json))
	}, [])
	// [] - массив зависимости, если он пустой то реакт делает только 1 раз колбэк функцию
	console.log(todo)
	return <div className='App'>{todo && <h1>{todo.id}</h1>}</div>
}

export default App
