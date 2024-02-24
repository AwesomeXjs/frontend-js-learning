const App = ({ initialButtonText, btnStyle }) => {
	const [buttonText, setButtonText] = React.useState(initialButtonText)
	const [style, setStyle] = React.useState(btnStyle)

	const styles = {
		green: 'green-btn',
		black: 'black-btn',
	}

	const onBtnClick = () => {
		setButtonText(`Hello from react`)
		setStyle(!style)
	}

	return (
		<div className='app'>
			<button
				className={style ? styles.green : styles.black}
				onClick={onBtnClick}
			>
				{buttonText}
			</button>
		</div>
	)
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText='Click me' btnStyle={true} />)
