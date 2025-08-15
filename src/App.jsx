import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import HeaderSection from './components/headerSection/HeaderSection'
import MenuSection from './components/MenuSection/MenuSection'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
	const [collapsed, setCollapsed] = useState(false)

	const toggleCollapse = () => {
		setCollapsed(prev => !prev)
	}

	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem('isAuthenticated') === 'true'
	)

	const location = useLocation()

	useEffect(() => {
		AOS.init({ duration: 1000, once: true })
	}, [])

	// 🔹 sidebar toggle bo‘lganda AOS qayta hisoblaydi
	useEffect(() => {
		setTimeout(() => {
			AOS.refresh()
		}, 50)
	}, [collapsed])

	const handleLogin = () => {
		localStorage.setItem('isAuthenticated', 'true')
		setIsAuthenticated(true)
	}

	const handleLogout = () => {
		localStorage.removeItem('isAuthenticated')
		setIsAuthenticated(false)
	}

	return (
		<div className='container'>
			{location.pathname !== '/login' && (
				<>
					<MenuSection collapsed={collapsed} toggleCollapse={toggleCollapse} />
				</>
			)}

			<div className='right'>
				{location.pathname !== '/login' && (
					<>
						<HeaderSection
							collapsed={collapsed}
							className={`header-section ${collapsed ? 'collapsed' : ''}`}
						/>
					</>
				)}

				<div className='pages'>
					<Routes>
						<Route
							path='/login'
							element={<LoginPage onLogin={handleLogin} />}
						/>
						<Route
							path='/'
							element={
								isAuthenticated ? (
									<HomePage onLogout={handleLogout} collapsed={collapsed} />
								) : (
									<Navigate to='/login' replace />
								)
							}
						/>
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
