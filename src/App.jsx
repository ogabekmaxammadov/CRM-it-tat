import { Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderSection from './components/headerSection/HeaderSection'
import MenuSection from './components/MenuSection/MenuSection'
import HomePage from './pages/HomePage/HomePage'

function App() {
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
