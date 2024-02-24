import {
	FC,
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
} from 'react'
import { ITodo } from '../types/data'
import TodoList from './TodoList'

const App: FC = () => {
	const [value, setValue] = useState<string>('')
	const [todos, setTodos] = useState<ITodo[]>([])

	const inputRef = useRef<HTMLInputElement | null>(null)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
		setValue(event.target.value)

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addTodo()
		}
	}

	const deleteTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, complete: !todo.complete } : todo
			)
		)
	}

	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					complete: false,
				},
			])
			setValue('')
		}
	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])
	return (
		<div>
			<div>
				<input
					onKeyDown={handleKeyDown}
					type='text'
					value={value}
					onChange={handleChange}
					ref={inputRef}
				/>
				<button onClick={addTodo}>Added</button>
			</div>
			<TodoList items={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
		</div>
	)
}

export default App
