import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { clearError, selectErrorMassage } from '../../redux/slices/errorSlice'
import { useEffect } from 'react'

const Error = () => {
	const errorMassage = useSelector(selectErrorMassage)
	const dispatch = useDispatch()

	useEffect(() => {
		if (errorMassage) {
			toast.warning(errorMassage)
			dispatch(clearError())
		}
	}, [errorMassage, dispatch])
	return <ToastContainer theme='dark' position='top-right' autoClose={2000} />
}

export default Error
