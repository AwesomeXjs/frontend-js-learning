import React from 'react'
import { useState } from 'react'
import UserCard from './UserCard'

const Form = ({ setButtonData, dataApi, buttonData }) => {
	const [data, setData] = useState({ userID: '', booleanInput: '' })
	const onChangeHandler = (event, name) => {
		setData({ ...data, [name]: event.target.value })
	}
	const submitHandler = event => {
		event.preventDefault()
		setButtonData({
			...buttonData,
			todoID: data.userID,
			userID: data.booleanInput,
		})
	}
	return (
		<div>
			<h1>Выбери статы</h1>
			<form onSubmit={submitHandler}>
				<label>
					Введи ID тудушки
					<input
						type='text'
						value={data.userID}
						onChange={e => onChangeHandler(e, 'userID')}
					/>
				</label>
				<label>
					ID поста
					<input
						type='text'
						value={data.booleanInput}
						onChange={e => onChangeHandler(e, 'booleanInput')}
					/>
				</label>
				<button type='submit'>Отправить...</button>
			</form>
			<UserCard dataApi={dataApi} />
		</div>
	)
}

export default Form
