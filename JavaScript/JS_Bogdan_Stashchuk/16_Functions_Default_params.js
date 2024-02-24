/* Значения параметров по умолчанию */
/* Если мы хотим запускать функцию только с 1 параметром а второй будет опционален то мы указываем дефолтное значение для второго параметра */
const multi = (value, multiplier = 2) => {
	return value * multiplier
}
console.log(multi(3)) // 6

const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt,
})
/* Равносильно */
const newPostX = (post, addedAt = Date()) => {
	return { ...post, addedAt }
}

const post = {
	title: 'New Post',
	id: 1,
}

console.log(newPost(post))
