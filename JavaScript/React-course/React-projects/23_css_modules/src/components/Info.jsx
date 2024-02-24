import './Info.css'
import styles from './Info.module.css'

const Info = () => {
	console.log(styles)
	return (
		<>
			<h1 className={styles.info}>Hello from the Info Component</h1>
			<button className={styles.myOtherButton}>Click me</button>
		</>
	)
}

export default Info
