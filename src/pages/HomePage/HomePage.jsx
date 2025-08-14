import 'aos/dist/aos.css'
import './home.css'

// ? swiper
import { FaRegUser, FaUserTimes } from 'react-icons/fa'
import { IoWarningOutline } from 'react-icons/io5'
import { LiaLayerGroupSolid, LiaUserAltSlashSolid } from 'react-icons/lia'
import { MdConnectedTv } from 'react-icons/md'
import { PiStudentBold } from 'react-icons/pi'
import { SiContactlesspayment } from 'react-icons/si'

const HomePage = ({ collapsed }) => {

	const cards = [
		{ title: 'Active lids', icon: <FaRegUser />, number: 113 },
		{ title: 'Faol talabalar', icon: <PiStudentBold />, number: 113 },
		{ title: 'Guruxlar', icon: <LiaLayerGroupSolid />, number: 113 },
		{ title: 'Qarzdorlar', icon: <IoWarningOutline />, number: 113 },
		{ title: 'Sinov darsida', icon: <MdConnectedTv />, number: 113 },
		{
			title: 'Joriy oyda tolaganlar',
			icon: <SiContactlesspayment />,
			number: 113,
		},
		{ title: 'Faol guruxni tark etganlar', icon: <FaUserTimes />, number: 113 },
		{
			title: 'Sinov muddatiddan keyin ketdi',
			icon: <LiaUserAltSlashSolid />,
			number: 113,
		},
	]

	return (
		<div className={`home-page ${collapsed ? 'expanded' : ''}`} data-aos="fade-left">
			<div className='element-card-bar'>
				
				
					{cards.map((card, index) => (
						<div className='dashboard-element-card'>
								<div className='card-icon'>
									<i>{card.icon}</i>
								</div>
								<div>
									<p>{card.title}</p>
								</div>
								<br />
								<div>
									<h1>{card.number}</h1>
								</div>
							</div>
								
					))}
				
			</div>
			<div className='table'>
				<div className='table-prev '>
					<button className='table-btn'>Barchasini ko'rish</button>
					<h3>Jadval</h3>
				</div>
			</div>
		</div>
	)
}

export default HomePage
