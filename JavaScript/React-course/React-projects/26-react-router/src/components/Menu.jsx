import { NavLink } from 'react-router-dom'

const Menu = () => {
	const activeLink = ({ isActive }) =>
		isActive ? 'activeLink' : 'inactiveLink'

	const isStyleArgument = ({ isActive }) => {
		return isActive
			? { color: 'white', textDecoration: 'none' }
			: { color: 'green' }
	}
	return (
		<nav>
			<NavLink
				style={isStyleArgument}
				/* 	className={activeLink}  */
				to='.'
				end
			>
				Home
			</NavLink>
			<NavLink className={activeLink} to='about'>
				About
			</NavLink>
			<NavLink className={activeLink} to='contacts'>
				Contacts
			</NavLink>
			<NavLink className={activeLink} to='courses'>
				Courses
			</NavLink>
		</nav>
	)
}

export default Menu
