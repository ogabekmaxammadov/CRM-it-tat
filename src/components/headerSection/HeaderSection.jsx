import { useEffect, useState } from 'react'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { FaBell, FaRegPlusSquare } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { LuClock5 } from 'react-icons/lu'
import { SlPicture } from 'react-icons/sl'
import './HeaderSection.css'

const HeaderSection = ({ collapsed, className }) => {
	const [isFull, setIsFull] = useState(false)
	const [aosOnce, setAosOnce] = useState(true) // faqat 1 marta ishlash uchun

	useEffect(() => {
		setTimeout(() => setAosOnce(false), 1000) // 1 soniyadan keyin data-aos olib tashlanadi
	}, [])

	const toggleFullScreen = () => {
		if (!isFull) {
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen()
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen()
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen()
			}
			setIsFull(true)
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen()
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen()
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen()
			}
			setIsFull(false)
		}
	}
	const headerStyle = {
		marginLeft: collapsed ? '100px' : '260px',
	}

	return (
		<div
			className={`header-section display-flex ${className} ${
				collapsed ? 'collapsed' : ''
			}`}
			style={headerStyle}
			{...(aosOnce ? { 'data-aos': 'fade-down' } : {})} // faqat birinchi marta qo‘yiladi
		>
			<FaRegPlusSquare className='header-icon' />
			<div className='search display-flex'>
				<input type='search' placeholder='Qidirish' />
				<IoSearch className='search-icon header-icon' />
			</div>

			<div className='right-elements display-flex'>
				<div className='lngs'>
					<h2>uz</h2>
				</div>
				<div className='full-ekran'>
					<button
						onClick={toggleFullScreen}
						style={{
							background: 'transparent',
							cursor: 'pointer',
							fontSize: '18px',
						}}
					>
						{isFull ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
					</button>
				</div>
				<LuClock5 className='header-icon clock' />
				<FaBell className='header-icon clock' />
				<h4>Asliddin Hakimov</h4>
				<div className='account'>
					<SlPicture className='account-icon' />
				</div>
			</div>
		</div>
	)
}

export default HeaderSection
