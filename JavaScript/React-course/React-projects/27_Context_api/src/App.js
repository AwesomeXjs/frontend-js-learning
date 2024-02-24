import { useState } from 'react'
import './App.css'
import userContext from './context/UserContext'
import User from './components/User'
import ChangeUser from './components/ChangeUser'

function App() {
	const [user, setUser] = useState('Bogdan')

	return (
		<userContext.Provider value={{ userName: user, setUserName: setUser }}>
			<div className='App'>
				<User />
				<ChangeUser />
			</div>
		</userContext.Provider>
	)
}

export default App
