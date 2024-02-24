import { useEffect } from 'react'

export const useFetchData = (
	API_URL,
	setUseState,
	setUseStateError,
	setUseStateIsLoading
) => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(API_URL)
				const posts = await res.json()
				setUseState(posts)
			} catch (error) {
				setUseStateError(error.massage)
			}
			setUseStateIsLoading(false)
		}
		fetchData()
	}, [])
}
