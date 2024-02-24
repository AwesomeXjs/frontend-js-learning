import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data/Courses'

const SingleCourse = () => {
	const { slug } = useParams()
	//useNavigate возвращает функцию которая ожидает 2 параметра - первый говорит куда мы хотим переадресовать пользователя, второй - опции (replace / state)
	const navigate = useNavigate()

	const course = courses.find(e => e.slug === slug)

	/* useNavigate хорош если нужно сделать запрос на сервер и по итогам запроса переадресовать пользователя куда то, в useEffect'e */
	useEffect(() => {
		if (!course) {
			/* если нужна переадресация на предыдущую страницу - в параметрах указать просто -1 (цифра указывает на сколько назад по истории переадресовать) */
			navigate('..', { relative: 'path' })
		}
	}, [course, navigate])

	return (
		<>
			<div>{`Вас приветстует курс ${course?.title}`} </div>
			<Link to='..' relative='path'>
				Вернуться
			</Link>
		</>
	)
}

export default SingleCourse
