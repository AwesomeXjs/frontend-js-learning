import './App.css'
import MyComponent from './components/MyComponents'
import AnotherComponent from './components/AnotherComponent'

const user = {
	name: 'Dima',
	id: 2,
}
function App() {
	return (
		<div className='App'>
			<MyComponent />
			<AnotherComponent user={user} />
		</div>
	)
}

export default App
