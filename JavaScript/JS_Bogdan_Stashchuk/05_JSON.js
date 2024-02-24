/* JSON - Javascript Object Notation */
/* JSON - формат обмена данными между компьютерами */

/*
 {
	"userid" : 1,
	"id" : 2,
	"title": "my title"
	"status": {
		"completed" : false
	}
} 
*/
/* Передача JSON осуществляется в виде строки */
/* Конвертация */

// JSON.parse() /* конвертация JSON в обьект JS */

const exampleForJSON = {
	name: 'Dima',
	years: 30,
}
const JSONex = JSON.stringify(exampleForJSON) // конвертация обьекта в JSON
console.log(JSONex) // {"name":"Dima","years":30}
const reverseJSON = JSON.parse(JSONex) // конвертация JSON в JS обьект
console.log(reverseJSON) // { name: 'Dima', years: 30 }
