import { createContext } from 'react'

//При желании можно установить дефолтный контекст в виде аргумента при вызове функции createContext('Bogdan')
//Тогда можно обращаться к нему черех хук useContext даже без context.Provider
const userContext = createContext({
	userName: '',
	setUserName: () => {},
})

export default userContext
