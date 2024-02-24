import './App.css'
import RandomNumber from './components/RandomNumber.jsx'

function App() {
	return (
		<div className='App'>
			<RandomNumber minNum={10} maxNum={1000} />
		</div>
	)
}

export default App
