/* Смысл колбек функции в том что она вызывается внутри другой функции  */

const callbackExample = () => {
	console.log('Ya Callback')
}

const fxWithCallback = e => {
	e()
}
fxWithCallback(callbackExample) // Ya Callback

const printName = () => {
	console.log('Dima')
}
setTimeout(printName, 2000)
