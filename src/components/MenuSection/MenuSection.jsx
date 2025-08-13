import { FaLayerGroup } from 'react-icons/fa'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { MdOutlineDashboard } from 'react-icons/md'
import { PiStudentBold } from 'react-icons/pi'
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
					<li>
						<MdOutlineDashboard className='nav-icon' />
						<a href=''>Dashboard</a>
					</li>
					<li>
						<LiaChalkboardTeacherSolid className='nav-icon' />
						<a href=''>O'qituvchilar</a>
					</li>
					<li>
						<FaLayerGroup className='nav-icon' />
						<a href=''>Guruxlar</a>
					</li>
					<li>
						<PiStudentBold className='nav-icon' />
						<a href=''>Talabalar</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default MenuSection
