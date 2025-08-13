import { FaLayerGroup } from 'react-icons/fa'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { MdOutlineDashboard } from 'react-icons/md'
import { PiStudentBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import './MenuSection.css'

const MenuSection = () => {
	return (
		<div className='menu-section'>
			<div className='logo display-flex'>
				<img src='https://api.modme.uz/uploads/LvLfAQ0LVVjHTsLH.png' alt='' />
				<h2>IT TAT Academy</h2>
			</div>
			<nav>
				<ul>
					<NavLink to='/'>
						<MdOutlineDashboard className='nav-icon' />
						<h2>Dashboard</h2>
					</NavLink>
					<NavLink to='/teachers'>
						<LiaChalkboardTeacherSolid className='nav-icon' />
						<h2>O'qituvchilar</h2>
					</NavLink>
					<NavLink to='/groups'>
						<FaLayerGroup className='nav-icon' />
						<h2>Guruxlar</h2>
					</NavLink>
					<NavLink to='/students'>
						<PiStudentBold className='nav-icon' />
						<h2>Talabalar</h2>
					</NavLink>
				</ul>
			</nav>
		</div>
	)
}

export default MenuSection
