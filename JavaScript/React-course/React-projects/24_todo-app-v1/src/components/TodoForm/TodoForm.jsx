import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

const TodoForm = ({ todoList, setTodoList }) => {
	const [value, setValue] = useState('')
	const preventDefault = event => {
		event.preventDefault()
		if (value.length > 0) {
			setTodoList([...todoList, value])
		}
		setValue('')
	}

	return (
		<form onSubmit={preventDefault} className={styles.formMain}>
			<label>
				<input
					className={styles.inputForm}
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder='Enter new todo'
				/>
			</label>
			<Button />
		</form>
	)
}

export default TodoForm
