import { useNavigate } from 'react-router-dom'
import './notefound.css'

const NotFound = () => {
	const navigate = useNavigate() // Initialize useNavigate hook

	const handleClick = () => {
		navigate('/login') // Use navigate function to redirect
	}

	return (
		<div className='notefound'>
			<h1>404</h1>
			<p>Bunday sahifa mavjud emas</p>
			<button onClick={handleClick}>Go to Login Page</button>
		</div>
	)
}

export default NotFound
