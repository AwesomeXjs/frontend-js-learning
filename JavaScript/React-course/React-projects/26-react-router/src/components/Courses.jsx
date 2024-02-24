import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { courses } from '../data/Courses'

const SORT_KEYS = ['title', 'slug', 'id']
function sortByKey(array, key) {
	return [...array].sort((a, b) => {
		if (typeof a[key] === 'number') {
			return a[key] - b[key]
		} else if (typeof a[key] === 'string') {
			return a[key].toLowerCase() > b[key].toLowerCase() ? 1 : -1
		}
		return undefined
	})
}
const Courses = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const parsed = queryString.parse(location.search)
	const [sortCoures, setSortCourses] = useState([])
	const [sortKey, setSortKey] = useState(parsed.sort)

	useEffect(() => {
		if (!SORT_KEYS.includes(sortKey)) {
			navigate('.')
			setSortKey(undefined)
			setSortCourses([...courses])
		}
		setSortCourses(sortByKey(courses, sortKey))
	}, [sortKey, navigate])

	return (
		<div className='courses-wrapper'>
			<h1>Courses sorted by {sortKey}</h1>
			<div>
				<NavLink onClick={() => setSortKey('id')} to='?sort=id'>
					<button>Сортировка по айди</button>
				</NavLink>
				<NavLink onClick={() => setSortKey('title')} to='?sort=title'>
					<button>Сортировка по заголовку</button>
				</NavLink>
				<NavLink onClick={() => setSortKey('slug')} to='?sort=slug'>
					<button>Сортировка по категории</button>
				</NavLink>
			</div>
			{!!sortCoures.length &&
				sortCoures.map(e => (
					<Link key={e.id} to={e.slug}>
						{e.title} id:{e.id}
					</Link>
				))}
		</div>
	)
}

export default Courses
