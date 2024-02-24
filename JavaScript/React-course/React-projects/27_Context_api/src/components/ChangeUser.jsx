import { useContext, useState } from 'react'
import userContext from '../context/UserContext'

const ChangeUser = () => {
	const { userName, setUserName } = useContext(userContext)
	const [inputValue, setInputValue] = useState('')
	return (
		<>
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<button onClick={() => setUserName(inputValue)}>Change user</button>
		</>
	)
}

export default ChangeUser
