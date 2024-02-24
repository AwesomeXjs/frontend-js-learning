import './App.css'
import PetInfo from './components/PerInfo'

function App() {
	return (
		<div className='App'>
			<PetInfo animal='cat' years={5} pet={true} />
			<PetInfo animal='dog' years={3} pet={false} />
		</div>
	)
}

export default App
