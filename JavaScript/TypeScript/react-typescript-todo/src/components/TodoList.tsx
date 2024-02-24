import { FC } from 'react'
import ToDoItem from './ToDoItem'
import { ITodo } from '../types/data'

interface ITodoListProps {
	items: ITodo[]
	toggleTodo: (id: number) => void
	deleteTodo: (id: number) => void
}

const TodoList: FC<ITodoListProps> = ({ items, toggleTodo, deleteTodo }) => {
	return (
		<div>
			{items.map(el => (
				<ToDoItem
					key={el.id}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
					{...el}
				/>
			))}
		</div>
	)
}

export default TodoList
