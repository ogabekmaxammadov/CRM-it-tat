import { useState } from 'react'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import { CiCirclePlus } from 'react-icons/ci'
import { FaBell, FaRegPlusSquare } from 'react-icons/fa'
import { GiShinyPurse } from 'react-icons/gi'
import { IoSearch } from 'react-icons/io5'
import { LuClock5 } from 'react-icons/lu'
import { SlPicture } from 'react-icons/sl'
import './HeaderSection.css'

const HeaderSection = ({ collapsed, className, onLogout }) => {
	const [isFull, setIsFull] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [showAccountModal, setShowAccountModal] = useState(false)

	const handleAccountModal = () => {
		setShowAccountModal(!showAccountModal)
	}

	const handleModal = () => {
		setShowModal(!showModal)
	}

	const hideModal = () => {
		setShowModal(false)
	}

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
		>
			<FaRegPlusSquare
				className='header-icon'
				onClick={() => {
					handleModal()
					setShowAccountModal(false)
				}}
			/>
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

				<SlPicture
					className='account-icon'
					onClick={() => {
						handleAccountModal()
						setShowModal(false)
					}}
				/>
			</div>
			{showModal && (
				<div
					className={`plus-modal header-modals ${
						showModal ? 'showModal' : 'hideModal'
					} ${collapsed ? 'collapsed' : ''}`}
				>
					<h2 className='display-flex'>
						<CiCirclePlus />

						<span>Yangi Talaba</span>
					</h2>
					<h2 className='display-flex'>
						<GiShinyPurse />

						<span>To'lov</span>
					</h2>
				</div>
			)}
			{showAccountModal && (
				<div
					className={`account-modal header-modals ${
						showAccountModal ? 'showModal' : 'hideModal'
					} `}
				>
					<h2 className='display-flex'>
						<span>Hisob qaydnomasi</span>
					</h2>
					<hr />
					<h2 className='display-flex' onClick={onLogout}>
						<span>Chiqish</span>
					</h2>
				</div>
			)}
		</div>
	)
}

export default HeaderSection
