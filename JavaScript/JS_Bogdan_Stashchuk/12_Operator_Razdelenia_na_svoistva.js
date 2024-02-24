/* Оператор разделения на свойства позволяет копировать свойства обьекта для создания нового обьекта */

const button = {
	width: 300,
	text: 'buy',
}

const redButton = {
	...button,
	color: 'red',
}
/* Если у обьекта button уже есть свойство color то оно будет перезаписано */
console.log(redButton)

const buttonInfo = {
	text: 'buy',
}
const buttonStyle = {
	color: 'red',
	width: 500,
}
const buttonMain = {
	...buttonInfo,
	...buttonStyle,
}
console.log(buttonMain) //{ text: 'buy', color: 'red', width: 500 }
