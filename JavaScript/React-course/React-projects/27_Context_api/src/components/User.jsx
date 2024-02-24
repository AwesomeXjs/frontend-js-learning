import UserInfo from './UserInfo'
import userContext from '../context/UserContext'

const User = () => {
	return (
		//Можно создавать много контекст провайдеров в одном проекте, но при попытке чтения контекста выберется тот кто ближе по иерархии компонентов (снизу вверх)

		<UserInfo />
	)
}

export default User
