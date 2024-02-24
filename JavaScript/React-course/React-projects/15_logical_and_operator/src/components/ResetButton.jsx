import React from 'react'

const ResetButton = ({ count, resetter }) => {
	return (
		<>
			{!!count && (
				<div>
					<button
						onClick={resetter}
						style={{
							backgroundColor: 'black',
							color: 'white',
							border: '1px solid white',
						}}
					>
						Reset
					</button>
				</div>
			)}
		</>
	)
}

export default ResetButton
