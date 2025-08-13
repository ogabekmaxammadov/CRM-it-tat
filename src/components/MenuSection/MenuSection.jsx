import { FaLayerGroup } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { PiStudentBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/footer_logo.png'
import './MenuSection.css'

const MenuSection = () => {
	return (
		<div className='menu-section'>
			<div className='logo display-flex'>
				<img src={logo} alt='' />
				{/* <h2>IT TAT Academy</h2> */}
			</div>
			<nav>
				<ul>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'isActive' : '')}
					>
						<FiHome className='nav-icon' />
						<h2>Dashboard</h2>
					</NavLink>
					<NavLink
						to='/teachers'
						className={({ isActive }) => (isActive ? 'isActive' : '')}
					>
						<LiaChalkboardTeacherSolid className='nav-icon' />
						<h2>O'qituvchilar</h2>
					</NavLink>
					<NavLink
						to='/groups'
						className={({ isActive }) => (isActive ? 'isActive' : '')}
					>
						<FaLayerGroup className='nav-icon' />
						<h2>Guruxlar</h2>
					</NavLink>
					<NavLink
						to='/students'
						className={({ isActive }) => (isActive ? 'isActive' : '')}
					>
						<PiStudentBold className='nav-icon' />
						<h2>Talabalar</h2>
					</NavLink>
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'isActive' : '')}
					>
						<IoSettingsOutline className='nav-icon' />
						<h2>Talabalar</h2>
					</NavLink>
				</ul>
			</nav>
		</div>
	)
}

export default MenuSection
