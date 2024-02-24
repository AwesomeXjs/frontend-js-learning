import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const MainLayout = () => {
	return (
		<>
			<Menu />
			{/* На месте Outlet будут отображаться все компоненты с рутами по ссылкам */}
			<Outlet />
		</>
	)
}

export default MainLayout
