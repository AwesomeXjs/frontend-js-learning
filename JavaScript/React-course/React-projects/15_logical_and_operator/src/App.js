import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Count from './components/Count'
import ResetButton from './components/ResetButton.jsx'

function App() {
	const [count, setCount] = useState(0)
	const changerButton = () => {
		setCount(count + 1)
	}
	const resetter = () => {
		setCount(0)
	}
	return (
		<div className='App'>
			<Count count={count} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<ResetButton resetter={resetter} count={count} />
		</div>
	)
}

export default App
