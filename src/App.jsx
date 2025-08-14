import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderSection from './components/headerSection/HeaderSection'
import MenuSection from './components/MenuSection/MenuSection'
import HomePage from './pages/HomePage/HomePage'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		})
	}, [])

	return (
		<div className='container'>
			<MenuSection />
			<HeaderSection />
			<div className='pages'>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
