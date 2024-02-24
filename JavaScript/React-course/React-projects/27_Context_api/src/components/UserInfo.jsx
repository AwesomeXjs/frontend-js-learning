import { useContext } from 'react'
import userContext from '../context/UserContext'

const UserInfo = () => {
	const { userName, setUserName } = useContext(userContext)

	return (
		<>
			<h1>{userName}</h1>
		</>
	)
}

export default UserInfo
