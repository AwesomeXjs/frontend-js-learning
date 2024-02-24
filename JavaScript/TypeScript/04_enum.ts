//enum - перечисление

const user5: { name: string; age: number; car?: boolean } = {
	name: 'Alex',
	age: 25,
}

user5.car = true

//в enum может быть либо строка либо число
//в enum нельзя перезаписать значение свойства в отличии от обьекта
//в enum нельзя создавать новые свойства
enum Alex {
	name = 'Alex',
	age = 25,
}

// во что конвертируется enum Alex :
/* var Alex;
(function (Alex) {
    Alex["name"] = "Alex";
    Alex[Alex["age"] = 25] = "age";
})(Alex || (Alex = {})); */

//Обычный enum нет смысла использовать, нужно использовать const enum:
//При обьявлении enum через const он исчезает при конвертации если его свойства нигде не используются
//Если где то значения используются - он подставляет их но обьект enum при этом не появляется (оптимизирует код)

const enum alex2 {
	name = 'Alex',
	age = 20,
}

if (alex2.name) {
	console.log(alex2.name)
}
//if ("Alex" /* alex2.name */) {
//    console.log("Alex" /* alex2.name */);}

//хороший пример const enum: (работа с апи когда на выходе нам нужно только одно значение)
const enum error2 {
	NOT_FOUND = 404,
	SUCCESS = 200,
	ERROR = 500,
}

//Если тип переменной состоит из нескольких типов (обьединенные) - можно использовать const enum который потом можно заменить вместо перечисления типов

const enum StatusEnum {
	OK = 'ok',
	FALSE = 'false',
	TRUE = 'true',
}
type Status1 = {
	status: StatusEnum
}

const infoStatus: Status1 = {
	status: StatusEnum.OK,
}

function exampleStatus(info: Status1) {
	if (info.status === 'ok') {
		console.log(info.status)
	}
}
exampleStatus(infoStatus)
