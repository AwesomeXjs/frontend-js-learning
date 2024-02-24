function getCurrentTime() {
	const now = new Date()
	const hours = now.getHours().toString().padStart('0')
	const monutes = now.getMinutes().toString().padStart('0')
	const seconds = now.getSeconds().toString().padStart('0')
	return `${hours}:${monutes}:${seconds}`
}

export default getCurrentTime
