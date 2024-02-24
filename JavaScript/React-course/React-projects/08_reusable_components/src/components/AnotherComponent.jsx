function AnotherComponent({ user }) {
	return (
		<div>
			<h1>Здесь импортированный юзер с именем {user.name}</h1>
			<p>у него айди {user.id}</p>
		</div>
	)
}

export default AnotherComponent
