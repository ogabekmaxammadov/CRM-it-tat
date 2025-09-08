import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoImg from '../../assets/blue-logo.jpeg'
import './LoginPage.css'

const LoginPage = ({ onLogin }) => {
	const navigate = useNavigate()
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const togglePassword = () => {
		setShowPassword(prev => !prev)
	}

	// Agar foydalanuvchi allaqachon login bo'lgan bo'lsa, login sahifasini ko'rsatmaymiz
	useEffect(() => {
		if (localStorage.getItem('isAuthenticated') === 'true') {
			navigate('/', { replace: true })
		}
	}, [navigate])

	const handleLogin = e => {
		e.preventDefault()

		if (phone === '1234' && password === '1234') {
			onLogin()
			navigate('/', { replace: true })
		} else {
			alert('Telefon raqam yoki parol noto‘g‘ri!')
		}
	}

	return (
		<div className='login-page '>
			<div className='login display-flex'>
				<div className='login-img'>
					<img src={logoImg} alt='' />
				</div>
				<div className='form-sec'>
					<h2>Login</h2>
					<form className='form' onSubmit={handleLogin}>
						<div className='tel-input'>
							<label htmlFor='tel'>Telefon</label>
							<input
								type='tel'
								placeholder='1234  ni terib kiring'
								value={phone}
								onChange={e => setPhone(e.target.value)}
								name='tel'
							/>
						</div>
						<div className='pass-input '>
							<label htmlFor='password'>Parol</label>
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder='parol: 1234'
								// value={password}
								onChange={e => setPassword(e.target.value)}
								name='password'
							/>
							<h3 onClick={togglePassword}>{showPassword ? '🙈' : '🐵'}</h3>
						</div>
						<button type='submit'>Kirish</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
