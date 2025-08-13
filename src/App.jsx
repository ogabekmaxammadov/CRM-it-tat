import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import MenuSection from './components/MenuSection/MenuSection'

function App() {
	return (
		<>
			<div className='container'>
				<MenuSection />
				<BrowserRouter>
					<Routes></Routes>
				</BrowserRouter>
			</div>
		</>
	)
}

export default App
