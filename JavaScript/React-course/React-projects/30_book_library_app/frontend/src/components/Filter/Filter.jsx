import { useDispatch, useSelector } from 'react-redux'
import {
	resetFilters,
	selectTitleFilter,
	setAuthorFilter,
	setTitleFilter,
	setIsFavorite,
	selectAuthorFilter,
	selectIsFavorites,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
	const dispatch = useDispatch()
	const titleFilter = useSelector(selectTitleFilter)
	const authorFilter = useSelector(selectAuthorFilter)
	const favoriteCheck = useSelector(selectIsFavorites)

	const handleTitleFilterChanger = e => {
		dispatch(setTitleFilter(e.target.value))
	}
	const handleAuthorFilterChanger = e => {
		dispatch(setAuthorFilter(e.target.value))
	}

	const handleFavoriteFilter = () => {
		dispatch(setIsFavorite())
	}
	const deleteFilters = () => {
		dispatch(resetFilters())
	}

	return (
		<div>
			<div className='app-block filter'>
				<div className='filter-row'>
					<div className='filter-group'>
						<input
							value={titleFilter}
							onChange={handleTitleFilterChanger}
							type='text'
							placeholder='Filter by title...'
						/>
					</div>
					<div className='filter-group'>
						<input
							value={authorFilter}
							onChange={handleAuthorFilterChanger}
							type='text'
							placeholder='Filter by author...'
						/>
					</div>
					<div className='filter-group'>
						<input
							type='checkbox'
							value={favoriteCheck}
							onChange={handleFavoriteFilter}
						/>
						Only Favorite
					</div>
					<button type='button' onClick={deleteFilters}>
						Reset Filters
					</button>
				</div>
			</div>
		</div>
	)
}

export default Filter
