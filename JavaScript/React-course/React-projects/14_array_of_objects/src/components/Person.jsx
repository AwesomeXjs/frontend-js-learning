const Person = ({ id, image, firstName, lastName, email }) => {
	return (
		<div>
			<img src={image} alt='image' />
			<h3>
				{firstName} {lastName}
			</h3>
			<h4>{email}</h4>
		</div>
	)
}

export default Person
