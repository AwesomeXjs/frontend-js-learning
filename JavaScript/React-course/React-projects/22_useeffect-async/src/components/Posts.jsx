import { useEffect, useState } from 'react'
import Post from './Post'
import { useFetchData } from '../custom/CustomApi'

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	const API_URL = 'https://jsonplaceholder.typicode.com/posts'

	//Первая функция должна возвращать либо undefined либо другую функцию
	//async всегда возвращает промис, так делать нельзя

	/* useEffect(async () => {
		try {
			const res = await fetch(API_URL)
			const posts = await res.json()
			setPosts(posts)
		} catch (error) {
			setError(error.massage)
		}
		setLoading(false)
	}, []) */
	/* 	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(result => {
				setPosts(result)
			})
			.catch(error => setError(error.massage))
			.finally(() => setLoading(false))
	}, []) */

	// useFetchData(API_URL, setPosts, setError, setLoading)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(API_URL)
				const posts = await res.json()
				setPosts(posts)
			} catch (error) {
				setError(error.massage)
			}
			setLoading(false)
		}
		fetchData()
	}, [])
	const style = {
		maxWidth: '1300px',
		margin: 'auto',
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
