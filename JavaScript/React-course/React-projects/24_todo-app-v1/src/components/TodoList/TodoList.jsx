import Todo from '../todo/Todo'

const TodoList = ({ todoList, setTodoList }) => {
	const doubleClickClear = index => {
		setTodoList(todoList.filter((e, i) => i !== index))
	}
	return (
		<div>
			{!!todoList.length ? (
				todoList.map((e, i) => (
					<Todo
						textTodo={e}
						key={i}
						index={i}
						doubleClickClear={doubleClickClear}
					/>
				))
			) : (
				<h2>задачи отсутствуют</h2>
			)}
		</div>
	)
}

export default TodoList
