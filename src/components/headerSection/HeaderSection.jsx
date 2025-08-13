import { FaRegPlusSquare } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import './HeaderSection.css'

const HeaderSection = () => {
	return (
		<div className='header-section display-flex'>
			<FaRegPlusSquare className='header-icon' />
			<div className='search display-flex'>
				<input type='search' placeholder='Qidirish' />
				<IoSearch className='search-icon header-icon' />
			</div>
		</div>
	)
}

export default HeaderSection
