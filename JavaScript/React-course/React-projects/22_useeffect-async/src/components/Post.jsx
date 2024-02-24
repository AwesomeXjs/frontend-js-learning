const Post = ({ userId, id, title, body }) => {
	const style = {
		backgroundColor: 'aquamarine',
		color: 'black',
		margin: '10px',
		border: '1px solid black',
		padding: '10px',
	}
	return (
		<div style={style}>
			<h1>{title}</h1>
			<p>{body}</p>
			<h3>User ID: {userId}</h3>
			<h3>ID: {id}</h3>
		</div>
	)
}

export default Post
