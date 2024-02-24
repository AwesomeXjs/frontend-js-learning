/* Классы и прототипы */
/* Синтаксис классов появился в ES6 (2015) */
/*  class ...  */
/* Классы позволяют создавать прототипы для обьектов */
/* На основании прототипоы можно создавать экземпляры классов */
/* Экземпляры могут иметь свои свойтсва и методы */
/* Также экземпляры наследуют свойства и методы прототипа */

class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}
	upvote() {
		this.votesQty += 1
	}
}

const newComment = new Comment('First commentary')
newComment.upvote()
console.log(newComment.votesQty) // 1

/* newComment наследует все методы и свойства Comment.
  Comment наследует все методы и свойства класса Object
	 это называется наследование по цепочке (цепочка прототипов) */

/* Проверка принадлежности к классу: */
console.log(newComment instanceof Comment) // true
console.log(newComment instanceof Object) // true
console.log(Object instanceof Comment) // false

// prettier-ignore
class Auto {
	constructor(title) {
		  this.title = title,
			this.size = 0,
			this.dvigatel = 0,
			this.salon = 0,
			this.price = 0
	}
	upgradeDvig(name) {
		if (this.dvigatel === 0) {
			this.dvigatel = name
			this.price += 2000
			this.size += 10
			return console.log(
				`двигатель под названием ${name} установлен в машину, вес повышен на 10кг, цена повышена на 2000$`
			)
		}
		return console.log(`Двигатель уже установлен`)
	}
	deleteDvig(name) {
		if (this.dvigatel !== 0) {
			this.dvigatel = 0, 
			this.price -= 2000, 
			this.size -= 10
			return console.log(
				`Двигатель под названием ${name} успешно удален, вес понижен на 10 и цена понижена на 2000$`
			)
		}
		return console.log(`Двигателя нет`)
	}
	static mergeComments(first, second) {
		return console.log(`${first} ${second}`);
	}
}

const audi = new Auto('Audi')
audi.upgradeDvig('Michlen')
audi.deleteDvig('Michlen')
console.log(audi)

/* Проверка принадлежности свойств экземпляру обьекта */
const proverka = audi.hasOwnProperty('price')
console.log(proverka) // true
/* Метод установленный на уровне прототипа будет наследуемым методом, он не принадлежит экземпляру */
console.log(audi.hasOwnProperty('deleteDvig')) // false

/* Статические методы.
Эти методы доступны как свойство класса и НЕ НАСЛЕДУЕТСЯ экземплярами класса */
Auto.mergeComments(1, 2)
/* Такие методы как keys, values, assign и тд являются статическими методами обьекта */

// prettier-ignore
class Post {
	constructor(title) {
		this.title = title,
		this.likes = 0
	}
	likesUp(e){
		this.likes = this.likes + e
	}
	static viewers(first, second) {
		console.log(`У одного поста ${first} лайков, у второго ${second} лайков`);
	}
}
const defaultPost = new Post('Дефолт пост')
console.log(defaultPost)
defaultPost.likesUp(5)
console.log(defaultPost)
Post.viewers(6, 7)

/* Расширение классов */
class otherPost extends Post {
	//Таким синтаксисом мы создаем новый класс на основе копируемого и добавляем нужное нам свойство
	sumLikes() {
		console.log(`Этот пост имеет ${this.likes} лайков`)
	}
}

const anotherPost = new otherPost('Another Post')
console.log(anotherPost)
anotherPost.likesUp(3)
anotherPost.sumLikes()

const myArray = [3, 6, 7, 10, 45, 23]
console.log(myArray.reduce((el, acc) => (acc += el), 0))

/* Прототип: */
const prot = Post.prototype === defaultPost.__proto__
console.log(prot) // true
