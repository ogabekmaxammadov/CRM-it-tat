import { FaLayerGroup } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { PiStudentBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/footer_logo.png'
import './MenuSection.css'

const MenuSection = ({ collapsed, toggleCollapse }) => {
	return (
		<div data-aos='fade-right'>
			<div className={`menu-section ${collapsed ? 'collapsed' : ''}`}>
				<div className='logo display-flex'>
					<img src={logo} alt='Logo' />
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
							<IoSettingsOutline className='nav-icon sozlamalar' />
							<h2>Sozlamalar</h2>
						</NavLink>
					</ul>

					<HiOutlineMenuAlt1
						className='close-side-bar'
						onClick={toggleCollapse}
					/>
				</nav>
			</div>
		</div>
	)
}

export default MenuSection
