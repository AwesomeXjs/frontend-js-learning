import { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {
	const [dataApi, setDataApi] = useState({ todos: {}, user: {} })
	const [buttonData, setButtonData] = useState({
		todoID: '',
		userID: '',
	})

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${buttonData.todoID}`)
			.then(response => response.json())
			.then(result => {
				setDataApi({
					...dataApi,
					todos: result,
				})
			})
		fetch(`https://jsonplaceholder.typicode.com/comments/${buttonData.userID}`)
			.then(response => response.json())
			.then(result => {
				setDataApi({
					...dataApi,
					user: result,
				})
			})
	}, [buttonData])
	console.log(dataApi)
	return (
		<div className='App'>
			<Form
				dataApi={dataApi}
				setButtonData={setButtonData}
				buttonData={buttonData}
			/>
		</div>
	)
}

export default App
