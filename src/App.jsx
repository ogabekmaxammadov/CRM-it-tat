import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import HeaderSection from './components/headerSection/HeaderSection'
import MenuSection from './components/MenuSection/MenuSection'
import GroupsPage from './pages/GroupsPage/GroupsPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import StudentsPage from './pages/StudentsPage/StudentsPage'
import TeachersPage from './pages/TeachersPage/TeachersPage'

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
							onLogout={handleLogout}
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
						<Route
							path='/teachers'
							element={
								isAuthenticated ? (
									<TeachersPage onLogout='handleLogout' collapsed={collapsed} />
								) : (
									<Navigate to='/login' replace />
								)
							}
						/>
						<Route
							path='/students'
							element={
								isAuthenticated ? (
									<StudentsPage onLogout='handleLogout' collapsed={collapsed} />
								) : (
									<Navigate to='/login' replace />
								)
							}
						/>
						<Route
							path='/groups'
							element={
								isAuthenticated ? (
									<GroupsPage onLogout='handleLogout' collapsed={collapsed} />
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
