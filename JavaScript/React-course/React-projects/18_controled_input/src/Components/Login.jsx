import React, { useState } from 'react'

const Login = () => {
	/* 	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
 */
	// Чтобы не вызывать 10 раз useState можно передать в 1 useState обьект с нужными свойствами
	const [data, setData] = useState({ username: '', password: '' })
	const handleFromSubmit = event => {
		event.preventDefault()
		console.log(data)
		alert(JSON.stringify(data))
	}
	const handleInputValue = (e, name) => {
		setData({ ...data, [name]: e.target.value })
	}
	return (
		<>
			<h1>Login Form</h1>
			<form onSubmit={handleFromSubmit}>
				<label>
					UserName:
					<input
						type='text'
						onChange={e => handleInputValue(e, 'username')}
						/* onChange={e => setData({ ...data, username: e.target.value })} */
						value={data.username}
					/>
				</label>
				<label>
					Password:
					<input
						type='password'
						onChange={e => handleInputValue(e, 'password')}
						/* onChange={e => setData({ ...data, password: e.target.value })} */
						value={data.password}
					/>
				</label>
				<button type='submit'>Login</button>
			</form>
		</>
	)
}

export default Login
