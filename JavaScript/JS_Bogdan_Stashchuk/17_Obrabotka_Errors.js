/* обработка ошибок */
const newError = () => {
	throw new Error('Some Error')
}
/* newError()
console.log('Continue...') */

/* Try {} catch (error) {}  нужен чтобы ловить ошибки. В блоке try потенциальная ошибка, в блоке catch - код который будет выполняться в случае возникновения ошибки в блоке try*/
try {
	newError()
} catch (error) {
	console.log(error) // Error: Some Error
	console.log(error.massage)
}

console.log('continue')
/* Если мы ловим ошибку используя try catch , то выполнение кода не останавливается на ошибке */
