import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Count from './components/Count'

const titles = [1, 2, 3, 4]
function App() {
	const [count, setCount] = useState(0)
	const changerButton = () => {
		setCount(count + 1)
	}

	return (
		<div className='App'>
			<Count count={count} />
			{/* {[
				<Button title={`Button ${1}`} changerButton={changerButton} />,
				<Button title={`Button ${2}`} changerButton={changerButton} />,
				<Button title={`Button ${3}`} changerButton={changerButton} />,
				<Button title={`Button ${4}`} changerButton={changerButton} />,
			]} */}
			{titles.map((title, index) => (
				<Button
					title={`Button ${title}`}
					changerButton={changerButton}
					//не рекомендуется делать ключем индекс !
					key={index}
				/>
			))}
		</div>
	)
}

export default App
