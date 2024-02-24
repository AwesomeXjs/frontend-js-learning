/* Деструктуризация позволяет удобно присвоить свойства какого то обьекта переменным */
const userProfile = {
	name: 'Dima',
	years: 25,
	city: 'Astana',
}
const { name, years } = userProfile
const { city } = userProfile
console.log(name) // Dima
console.log(years) // 25
console.log(city) // Astana

/* Деструктуризация массивов: */
const fruits = ['Apple', 'Banana']
const [fruitOne, FruitTwo] = fruits
console.log(fruitOne) // Apple
console.log(FruitTwo) // Banana

/* Деструктуризация параметров функции */
const commentsUser = {
	user: 'Dima',
	commentsQty: 25,
}

const infoOfComments = ({ user, commentsQty }) => {
	if (!commentsQty) {
		return console.log(`${user} не имеет коментариев`)
	}
	return console.log(`${user} имеет ${commentsQty} коментариев`)
}

infoOfComments(commentsUser)
