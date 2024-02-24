import { useDispatch, useSelector } from 'react-redux'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import './BookList.css'
import {
	addFavoriteBook,
	deleteBook,
	selectBooks,
} from '../../redux/slices/booksSlice.js'
import {
	selectAuthorFilter,
	selectIsFavorites,
	selectTitleFilter,
} from '../../redux/slices/filterSlice'

const BookList = () => {
	const books = useSelector(selectBooks)
	const titleFilter = useSelector(selectTitleFilter)
	const authorFilter = useSelector(selectAuthorFilter)
	const isFavorites = useSelector(selectIsFavorites)
	const dispatch = useDispatch()

	const addFavoriteHandler = id => {
		dispatch(addFavoriteBook(id))
	}

	const filteredBooks = books.filter(book => {
		const matchesTitles = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase())
		const matchesAuthor = book.author
			.toLowerCase()
			.includes(authorFilter.toLowerCase())
		const matchesFavorite = isFavorites ? book.isFavorite : true
		return matchesTitles && matchesAuthor && matchesFavorite
	})

	const highlightMatch = (text, filter) => {
		if (!filter) return text
		const regex = new RegExp(`(${filter})`, 'gi')
		return text.split(regex).map((subsctring, i) => {
			if (subsctring.toLowerCase() === filter.toLowerCase()) {
				return (
					<span key={i} className='highlight'>
						{subsctring}
					</span>
				)
			}
			return subsctring
		})
	}
	return (
		<div className='app-block book-list'>
			<h2>Book List</h2>
			{filteredBooks.length === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{filteredBooks.map((book, i) => (
						<li key={book.id}>
							<div className='book-info'>
								{++i}.{highlightMatch(book.title, titleFilter)} by{' '}
								<strong>{highlightMatch(book.author, authorFilter)}</strong> (
								{book.source})
							</div>
							<div className='book-actions'>
								<BsFillBookmarkStarFill
									onClick={() => addFavoriteHandler(book.id)}
									className={
										book.isFavorite
											? 'favorite-icon favorite-active'
											: 'favorite-icon'
									}
								/>
								<button onClick={() => dispatch(deleteBook(book.id))}>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default BookList
