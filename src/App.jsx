import 'aos/dist/aos.css'
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import HeaderSection from './components/headerSection/HeaderSection'
import MenuSection from './components/MenuSection/MenuSection'
import NoteFound from './components/notefound/NoteFound'
import GroupsPage from './pages/GroupsPage/GroupsPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import StudentsPage from './pages/StudentsPage/StudentsPage'
import TeacherEditPage from './pages/TeacherEditPage/TeacherEditPage'
import TeachersPage from './pages/TeachersPage/TeachersPage'
import GroupsEditPage from './pages/groupseditpage/GroupsEditPage'

function App() {
	const [collapsed, setCollapsed] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(
		localStorage.getItem('isAuthenticated') === 'true'
	)
	const [showModal, setShowModal] = useState(false)
	const [showAccountModal, setShowAccountModal] = useState(false)

	const handleModal = () => {
		setShowModal(prev => !prev)
		setShowAccountModal(false) // 🔹 bittasi ochilganda boshqasi yopilsin
	}
	const handleAccountModal = () => {
		setShowAccountModal(prev => !prev)
		setShowModal(false) // 🔹 bittasi ochilganda boshqasi yopilsin
	}
	const hideModal = () => {
		setShowModal(false)
		setShowAccountModal(false) // 🔹 ikkalasini birdaniga yopadi
	}
	const toggleCollapse = () => setCollapsed(prev => !prev)

	// useEffect(() => {
	// 	AOS.init({ duration: 1000, once: true })
	// }, [])

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		AOS.refresh()
	// 	}, 50)
	// }, [collapsed])

	const handleLogin = () => {
		localStorage.setItem('isAuthenticated', 'true')
		setIsAuthenticated(true)
	}

	const handleLogout = () => {
		localStorage.removeItem('isAuthenticated')
		setIsAuthenticated(false)
	}

	// 🔹 Protected layout (faqat login bo‘lganda)
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

	return (
		<div className='container'>
			<Routes>
				{/* 🔹 Login bo‘lmagan */}
				<Route path='/login' element={<LoginPage onLogin={handleLogin} />} />

				{/* 🔹 Login qilingan sahifalar */}
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
						<Route
							path='/groups-edit'
							element={
								<ProtectedLayout>
									<GroupsEditPage
										onLogout={handleLogout}
										collapsed={collapsed}
										hideModal={hideModal}
									/>
								</ProtectedLayout>
							}
						/>

							

						{/* 🔹 NotFound sahifasi layoutSIZ chiqadi */}
						<Route path='*' element={<NoteFound />} />
					</>
				) : (
					// 🔹 Login qilinmagan bo‘lsa → faqat login page
					<Route path='*' element={<Navigate to='/login' replace />} />
				)}
			</Routes>
		</div>
	)
}

export default App
