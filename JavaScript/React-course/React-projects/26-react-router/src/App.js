import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import About from './components/About'
import Contacs from './components/Contacs'
import MainLayout from './layouts/MainLayout'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'

function App() {
	return (
		/* BrowserRouter дает доступ к обьекту location во всех компонентах а также дает доступ к использованию react-router */
		<BrowserRouter>
			<div className='App'>
				{/* Route работает только внутри Routes */}
				<Routes>
					{/* все пути внутри лайаута читаются относительно пути лайаута ("/" + 'about') */}
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='*' element={<NotFound />} />
						<Route path='about' element={<About />} />
						<Route path='contacts' element={<Contacs />} />
						<Route path='courses' element={<Courses />} />
						{/* использование Navigate для переадресации: 
						replace - заменяет в истории, чтобы не сохранять переадресованную страницу*/}
						<Route
							path='courses-as'
							element={<Navigate to={'courses'} replace />}
						/>
						<Route path='courses/:slug' element={<SingleCourse />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
