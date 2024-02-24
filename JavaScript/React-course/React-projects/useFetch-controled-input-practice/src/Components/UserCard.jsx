const UserCard = ({ dataApi }) => {
	const { id, title, completed } = dataApi.todos
	const { postId, name } = dataApi.user
	const style = {
		backgroundColor: 'green',
		color: 'black',
		margin: 'auto',
		maxWidth: '500px',
	}
	return (
		<>
			{!!id && (
				<div
					style={style}
				>{`Тут тудушка с айди ${id}, названием ${title} и он ${
					completed ? 'выполнен' : 'не выполнен'
				}`}</div>
			)}
			{!!postId && <div>{`Тут коммент с айди ${postId} и именем ${name}`}</div>}
		</>
	)
}

export default UserCard
