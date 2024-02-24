import './App.css'
import Wrapper from './Components/Wrapper.jsx'

function App() {
	return (
		<div className='App'>
			<Wrapper backGroundColor='aquamarine' textColor='black'>
				<h1>Hello from inside Wrapper</h1>
				<button>Hello</button>
			</Wrapper>
			<Wrapper backGroundColor='green' textColor='black'>
				<h1>Another text</h1>
				<button>Hello</button>
			</Wrapper>
		</div>
	)
}

export default App
