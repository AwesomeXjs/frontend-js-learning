import { FC } from 'react'
import { ITodo } from '../types/data'

interface ITodoItem extends ITodo {
	toggleTodo: (id: number) => void
	deleteTodo: (id: number) => void
}

const ToDoItem: FC<ITodoItem> = props => {
	const { id, title, complete, toggleTodo, deleteTodo } = props
	return (
		<div>
			<input
				type='checkbox'
				checked={complete}
				onChange={() => toggleTodo(id)}
			/>
			{title}
			<button onClick={() => deleteTodo(id)}>X</button>
		</div>
	)
}

export default ToDoItem
