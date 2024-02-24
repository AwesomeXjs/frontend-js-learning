import React, { useState } from 'react'
import randomzier from '../utils/generateNumbers'

const RandomNumber = ({ minNum, maxNum }) => {
	const [num, setNum] = useState(0)
	const changeNum = () => {
		setNum(randomzier(minNum, maxNum))
	}
	return (
		<div>
			<h1>{num}</h1>
			<button onClick={changeNum}>Random number generate</button>
		</div>
	)
}

export default RandomNumber
