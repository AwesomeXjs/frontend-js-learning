const PetInfo = ({ animal, years, pet }) => {
	/* const text = pet ? `My ${animal} is ${years} years old` : `I dont have pet`
	return <h1>{text}</h1> */
	return (
		<h1>{pet ? `My ${animal} is ${years} years old` : `I dont have pet`}</h1>
	)
}

export default PetInfo
