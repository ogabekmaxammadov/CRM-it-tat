import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import HeaderSection from './components/headerSection/HeaderSection'
import Loader from './components/Loader/Loader' // 🔹 Loader import
import MenuSection from './components/MenuSection/MenuSection'
import NoteFound from './components/notefound/NoteFound'
import GroupsPage from './pages/GroupsPage/GroupsPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import StudentsPage from './pages/StudentsPage/StudentsPage'
import TeacherEditPage from './pages/TeacherEditPage/TeacherEditPage'
import TeachersPage from './pages/TeachersPage/TeachersPage'

function App() {
	const [collapsed, setCollapsed] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem('isAuthenticated') === 'true'
	)
	const [showModal, setShowModal] = useState(false)
	const [showAccountModal, setShowAccountModal] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 3000)
		return () => clearTimeout(timer)
	}, [])

	const handleModal = () => {
		setShowModal(prev => !prev)
		setShowAccountModal(false)
	}
	const handleAccountModal = () => {
		setShowAccountModal(prev => !prev)
		setShowModal(false)
	}
	const hideModal = () => {
		setShowModal(false)
		setShowAccountModal(false)
	}
	const toggleCollapse = () => setCollapsed(prev => !prev)

	const handleLogin = () => {
		localStorage.setItem('isAuthenticated', 'true')
		setIsAuthenticated(true)
	}

	const handleLogout = () => {
		localStorage.removeItem('isAuthenticated')
		setIsAuthenticated(false)
	}

	const ProtectedLayout = ({ children }) => (
		<>
			<MenuSection
				collapsed={collapsed}
				toggleCollapse={toggleCollapse}
				hideModal={hideModal}
			/>
			<div className='right'>
				<HeaderSection
					collapsed={collapsed}
					className={`header-section ${collapsed ? 'collapsed' : ''}`}
					onLogout={handleLogout}
					showModal={showModal}
					showAccountModal={showAccountModal}
					onToggleModal={handleModal}
					onToggleAccountModal={handleAccountModal}
					onHideModal={hideModal}
				/>
				<div className='pages'>{children}</div>
			</div>
		</>
	)

	if (loading) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					backgroundColor: '#fff',
				}}
			>
				<Loader />
			</div>
		)
	}

	return (
		<div className='container'>
			<Routes>
				<Route path='/login' element={<LoginPage onLogin={handleLogin} />} />

				{isAuthenticated ? (
					<>
						<Route
							path='/'
							element={
								<ProtectedLayout>
									<HomePage
										onLogout={handleLogout}
										collapsed={collapsed}
										hideModal={hideModal}
									/>
								</ProtectedLayout>
							}
						/>
						<Route
							path='/teachers'
							element={
								<ProtectedLayout>
									<TeachersPage
										onLogout={handleLogout}
										collapsed={collapsed}
										hideModal={hideModal}
									/>
								</ProtectedLayout>
							}
						/>
						<Route
							path='/students'
							element={
								<ProtectedLayout>
									<StudentsPage
										onLogout={handleLogout}
										collapsed={collapsed}
										hideModal={hideModal}
									/>
								</ProtectedLayout>
							}
						/>
						<Route
							path='/teacher-edit'
							element={
								<ProtectedLayout>
									<TeacherEditPage
										onLogout={handleLogout}
										collapsed={collapsed}
										hideModal={hideModal}
									/>
								</ProtectedLayout>
							}
						/>
						<Route
							path='/groups'
							element={
								<ProtectedLayout>
									<GroupsPage
										onLogout={handleLogout}
										collapsed={collapsed}
										hideModal={hideModal}
									/>
								</ProtectedLayout>
							}
						/>
						<Route path='*' element={<NoteFound />} />
					</>
				) : (
					<Route path='*' element={<Navigate to='/login' replace />} />
				)}
			</Routes>
		</div>
	)
}

export default App
