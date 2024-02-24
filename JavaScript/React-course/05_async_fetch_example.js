/* fetch('https://jsonplaceholder.tyicode.com/posts/1')
	.then(response => response.json())
	.then(result => {
		console.log(`у юзера айди ${result.userId}`)
	})
	.catch(error => console.error(`какая то ошибка с запросом`))
 */
const asyncTest = async url => {
	try {
		const response = await fetch(url)
		return response.json()
	} catch (error) {
		console.log(error)
	}
}
const url = `https://jsonplaceholder.typicode.com/posts/1`
asyncTest(url)
	.then(result => console.log(result))
	.catch(error => console.log(error))
