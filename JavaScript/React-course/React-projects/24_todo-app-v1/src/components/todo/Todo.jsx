import styles from './Todo.module.css'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'

const Todo = ({ textTodo, doubleClickClear, index }) => {
	return (
		<div onDoubleClick={() => doubleClickClear(index)} className={styles.todo}>
			<PlaylistAddCheckIcon className={styles.iconMain} />
			<p>{textTodo}</p>
		</div>
	)
}

export default Todo
