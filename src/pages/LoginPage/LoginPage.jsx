import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ onLogin }) => {
	const navigate = useNavigate()
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')

	// Agar foydalanuvchi allaqachon login bo'lgan bo'lsa, login sahifasini ko'rsatmaymiz
	useEffect(() => {
		if (localStorage.getItem('isAuthenticated') === 'true') {
			navigate('/', { replace: true })
		}
	}, [navigate])

	const handleLogin = e => {
		e.preventDefault()

		if (
			phone === '1234 ni terib kiring' &&
			password === '1234 ni terib kiring'
		) {
			onLogin()
			navigate('/', { replace: true })
		} else {
			alert('Telefon raqam yoki parol noto‘g‘ri!')
		}
	}

	return (
		<div>
			<form className='form' onSubmit={handleLogin}>
				<input
					type='tel'
					placeholder='Telefon raqam'
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Parol'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button type='submit'>Kirish</button>
			</form>
		</div>
	)
}

export default LoginPage
