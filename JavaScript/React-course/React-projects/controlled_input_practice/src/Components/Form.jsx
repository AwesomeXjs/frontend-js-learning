import { useState } from 'react'

const Form = () => {
	const [data, setData] = useState({ username: '', password: '' })
	const handleSubmit = e => {
		e.preventDefault()
	}
	const handleInputChange = (event, name) => {
		setData({ ...data, [name]: event.target.value })
	}
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Login:
				<input
					type='text'
					value={data.username}
					onChange={e => handleInputChange(e, 'username')}
				/>
			</label>
			<label>
				Password:
				<input
					type='password'
					value={data.password}
					onChange={e => handleInputChange(e, 'password')}
				/>
			</label>
			<button>Login</button>
		</form>
	)
}

export default Form
