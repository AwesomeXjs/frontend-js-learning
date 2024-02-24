/* Типизация компонентов. Примеры. */

/* const [state, setState] = useState<boolean | null>(false) */
/* const [state, setState] = useState<boolean>(true) */

/* props 
import { FC } from 'react'

type AdultOrNotProps = {
	setIsAdult: (value:boolean) => any
}

const example: FC<AdultOrNotProps> = ({ setIsAdult } ) => {

	return <div onClick = {() => setIsAdult()}></div>
}
*/

/* 
export type Game = {
	id:number,
	name:string,
	description?:string,
	price?number,
	forKids:boolean
}
const [state, setState] = useState<Game[]>([]) 

export const GAMES: Game[] = [
	{
		id: 2,
		name : '123,
		discription: '435345',
		forKids: true,

	},
	{
		id: 3,
		name : '123,
		price: 1000,
		forKids: false,
	},
	{
		id:4,
		name : '123,
		discription: '435345',
		price: 1000,
		forKids: true,
	},
]


*/

/* 
Promise:


export function getGamesFromServer(): Promise<Game[]> {
	return new Promise((resolve) => {
		setTimeout(()=> {
			resolve(GAMES);
		}, 1000)
	})
}

useEffect(() => {
	getGamesFromServer().then((gamesFromServer) => {
		setLoading(false)
		setGames(gamesFromServer)
	})
}, [])
*/

/*
const renderTags = (tags: Game['description']): JSX.Element | undefined => {
	return tags?map((tag, index) => (
		<span></span>
	))
}) 
 */

/* 
Another components:

//Oprion 1
type GamerProps = Pick<Game, 'name' | 'description' } 'price'>


//Option 2
type GamerProps = {
	name: Game['name],
	description: Game['description'],
	price: Game['price']
}

const Gamer:FC<GamerProps> = ((name, description, price)) => {
 return <div></div>
}

*/

/* 
Change Event:
import {ChangeEvent, MouseEvent} from 'react'

const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
	console.log(event.target.value)
}

const clickHandler = (event:MouseEvent<HTMLButtonElement>) => {
	console.log(event.target);
	
}
*/
