import { useState } from 'react'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { FaRegPlusSquare } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import './HeaderSection.css'

const HeaderSection = () => {
	const [isFull, setIsFull] = useState(false)

	const toggleFullScreen = () => {
		if (!isFull) {
			// Fullscreen yoqish
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen()
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen()
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen()
			}
			setIsFull(true)
		} else {
			// Fullscreen dan chiqish
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
	return (
		<div className='header-section display-flex'>
			<FaRegPlusSquare className='header-icon' />
			<div className='search display-flex'>
				<input type='search' placeholder='Qidirish' />
				<IoSearch className='search-icon header-icon' />
			</div>

			<div className='lngs'>
				<h2>uz</h2>
			</div>

			<div className='full-ekran'>
				<button
					onClick={toggleFullScreen}
					style={{
						background: isFull ? 'transparent' : 'transparent',
						cursor: 'pointer',
						fontSize: '18px',
					}}
				>
					{isFull ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
				</button>
			</div>
		</div>
	)
}

export default HeaderSection
