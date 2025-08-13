import { Route, Routes } from 'react-router-dom'
import './App.css'
import MenuSection from './components/MenuSection/MenuSection'
import HomePage from './pages/HomePage/HomePage'

function App() {
	return (
		<div className='container'>
			<MenuSection />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
	)
}

export default App
