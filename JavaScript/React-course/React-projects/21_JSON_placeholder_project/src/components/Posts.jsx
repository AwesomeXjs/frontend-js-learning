import { useEffect, useState } from 'react'
import Post from './Post'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(result => {
				setPosts(result)
			})
			.catch(error => setError(error.massage))
			.finally(() => setLoading(false))
	}, [])
	const style = {
		maxWidth: '1300px',
		margin: 'auto',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	}

	if (error) {
		return <h1>Error: {error}</h1>
	}
	return (
		<div style={style}>
			<h1>Posts</h1>
			<hr />
			{loading ? (
				<h1>Loading...</h1>
			) : (
				posts.map(e => <Post key={e.id} {...e} />)
			)}
		</div>
	)
}

export default Posts
