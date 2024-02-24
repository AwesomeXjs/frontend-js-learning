import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImSpinner } from 'react-icons/im'
import {
	addBook,
	fetchBook,
	selectIsLoading,
} from '../../redux/slices/booksSlice.js'
import createBookWithID from '../../custom/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'
import { setError } from '../../redux/slices/errorSlice.js'

const BookForm = () => {
	const [data, setData] = useState(createBookWithID({ title: '', author: '' }))
	const isLoading = useSelector(selectIsLoading)
	const dispatch = useDispatch()

	const handleSubmit = event => {
		event.preventDefault()
		if (data.author && data.title) {
			//dispatch action
			dispatch(addBook(createBookWithID(data, 'manual')))
			setData(createBookWithID({ title: '', author: '' }))
		} else {
			dispatch(setError('Поля пустые!'))
		}
	}
	const handleAddRandomBook = () => {
		const randomIndex = Math.floor(Math.random() * booksData.length)
		dispatch(addBook(createBookWithID(booksData[randomIndex], 'random')))
	}

	const handleAddRandomBookViaApi = () => {
		dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
	}

	return (
		<div className='app-block book-form'>
			<h2>Add new book</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='title'>
						Title:
						<input
							type='text'
							id='title'
							value={data.title}
							onChange={e => setData({ ...data, title: e.target.value })}
						/>
					</label>
				</div>
				<div>
					<label htmlFor='author'>
						Author:
						<input
							type='text'
							id='author'
							value={data.author}
							onChange={e => setData({ ...data, author: e.target.value })}
						/>
					</label>
				</div>
				<button type='submit'>Add book</button>
				<button type='button' onClick={handleAddRandomBook}>
					Add random
				</button>
				<button
					disabled={isLoading}
					type='button'
					onClick={handleAddRandomBookViaApi}
				>
					{isLoading ? (
						<>
							<span>Loading book...</span>
							<ImSpinner className='spinner' />
						</>
					) : (
						`Add Random via API`
					)}
				</button>
			</form>
		</div>
	)
}

export default BookForm
