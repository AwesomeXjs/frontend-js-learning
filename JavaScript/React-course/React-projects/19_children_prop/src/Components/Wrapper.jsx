const Wrapper = props => {
	const style = {
		backgroundColor: props.backGroundColor,
		color: props.textColor,
		padding: '20px',
		margin: '20px',
	}

	console.log(props)
	return <div style={style}>{props.children}</div>
}

export default Wrapper
