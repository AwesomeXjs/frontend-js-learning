import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

function App() {
	const [todoList, setTodoList] = useState([])

	return (
		<div className='App'>
			<h1 className='title-main'>Todo App</h1>
			<TodoForm todoList={todoList} setTodoList={setTodoList} />
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</div>
	)
}

export default App
