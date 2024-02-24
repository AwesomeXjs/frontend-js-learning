import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Count from './components/Count'

function App() {
	const [count, setCount] = useState(0)
	const changerButton = () => {
		setCount(count + 1)
	}
	return (
		<div className='App'>
			<Count count={count} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
			<Button changerButton={changerButton} />
		</div>
	)
}

export default App
