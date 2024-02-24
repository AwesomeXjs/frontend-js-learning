/* Условные инструкции */
/* if... , if...else , switch*/

/* if(условие) {
	блок кода который выполняется однократно, если условие истинно
} */

let val = 10

if (val > 5) {
	val += 20
}
console.log(val) // 30

const person = {
	age: 25,
	name: 'Dima',
}

if (!person.name) {
	console.log(`у персоны нет имени`)
} else {
	console.log(`у персоны есть имя ${person.name}`)
}

/* IF...ELSE */
/* 

if(условие) {
	блок кода который будет выполняться однократно если условие истинно
} else {
	блок кода который выполняется если условие ложно
}

одновременно 2 блока выполнится не могут
*/

let vaal = 10

if (vaal < 5) {
	vaal++
} else {
	vaal--
}
console.log(vaal) // -9

/* IF..ELSE IF .. ELSE */

/* IF (условие 1) {
	блок кода который выполнится однократно если условие 1 правдиво
} else (условие 2) {
	блок кода который выполнится однократно если условие 2 правдиво
} else {
	блок кода который выполняется если условие 1 и 2 ложно
}*/

/* Также конструкцию IF...ELSE IF ... ELSE можно писать удобней(более читабельней) в разных строках через IF , но тогда при построении условий нужно учитывать прошлые IF, так как учитываться будут все условия. */

const age = 5

if (age > 18) {
	console.log('is Adult')
} else if (age >= 12) {
	console.log('is teenager')
} else {
	console.log('is child')
}

const sumPos = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return console.log(`this not numbers`)
	}
	return console.log(`eto chisla`)
}
sumPos(3, 3)

/* SWITCH */
/* 

SWITCH (Выражение){
	case A:
		//Действие если выражение === A
		break
	case B: 
	  //Действие если выражение === B
		break
	default: 
	  // Действия по умолчанию		
}
*/

switch (1 + 5) {
	case 6:
		console.log(`case pravilno 6`)
		break
	case 3:
		console.log(`case 3`)
		break
	case 4:
		console.log(`case 6`)
		break
	default:
		console.log(`default case`)
}

const personAge = {
	years: 1,
	name: 'Dima',
}

const { years, name } = personAge

switch (years > 18) {
	case true:
		console.log(`${name} совершенно летний ему ${years} лет`)
		break
	case false:
		console.log(`${name} не совершеннолетний ему меньше 18 лет`)
		break
	default:
		console.log(`у ${name} не указан возраст`)
}
