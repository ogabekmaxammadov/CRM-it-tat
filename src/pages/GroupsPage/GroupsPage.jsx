import { useEffect, useRef, useState } from 'react'
import './grouppage.css'
import { Link } from 'react-router-dom'
import { FaEllipsisH, FaPhone } from 'react-icons/fa'
import { MdLocalPostOffice } from 'react-icons/md'

const GroupsPage = ({ collapsed, hideModal }) => {
	const [showAddTeacher, setShowAddTeacher] = useState(false)
	const [fileName, setFileName] = useState('Hech narsa tanlanmagan')
	const [openMenuIndex, setOpenMenuIndex] = useState(null)
	const [selectedPhone, setSelectedPhone] = useState(null)

	const [groups, setGroups] = useState([
		{
			guruh: 'guruh',
			kurslar: 'kurslar',
			oqituvchilar: 'oqituvchilar',
			kunlar: 'kunlar',
			mashgulotlarSanasi: 'mashgulotlarSanasi',
			otilganMuddat: 'otilganMuddat',
			xonalar: 'xonalar',
			yaqindaTugatadiganlar: 'yaqindaTugatadiganlar',
			talabalar: 'Talabalar',
			tugatganlar: 'Tugatganlar'
		},
	])

	const [formData, setFormData] = useState({
		phone: '',
		name: '',
		subject: '',
		date: '',
		guruh: '',
		foto: '',
	})

	const cardRefs = useRef([])

	const toggleAddTeacher = () => setShowAddTeacher(prev => !prev)

	const handleChange = e => {
		const { name, value, type, files } = e.target
		if (type === 'file') {
			setFormData({ ...formData, foto: URL.createObjectURL(files[0]) })
			setFileName(files[0] ? files[0].name : 'Hech narsa tanlanmagan')
		} else {
			setFormData({ ...formData, [name]: value })
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		const newGroup = {
			img: formData.foto || 'https://via.placeholder.com/150',
			name: formData.name,
			subject: formData.subject || 'Fan kiritilmagan',
			phone: formData.phone || 'Telefon kiritilmagan',
			date: formData.date,
			guruh: formData.guruh,
		}
		setGroups(prev => [...prev, newGroup])
		setShowAddTeacher(false)
		setFormData({
			phone: '',
			name: '',
			subject: '',
			date: '',
			guruh: '',
			foto: '',
		})
		setFileName('Hech narsa tanlanmagan')
	}

	const toggleMenu = index => {
		setOpenMenuIndex(prev => (prev === index ? null : index))
	}

	const handleDelete = index => {
		setGroups(prev => prev.filter((_, i) => i !== index))
		setOpenMenuIndex(null)
	}

	useEffect(() => {
		const handleClickOutside = e => {
			if (
				openMenuIndex !== null &&
				cardRefs.current[openMenuIndex] &&
				!cardRefs.current[openMenuIndex].contains(e.target)
			) {
				setOpenMenuIndex(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [openMenuIndex])


	// Filter qiymatlarini boshqarish uchun state
  const [statusFilter, setStatusFilter] = useState('faol')
  const [mentorFilter, setMentorFilter] = useState('')
  const [subjectFilter, setSubjectFilter] = useState('')
  const [genderFilter, setGenderFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')


	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			onClick={hideModal}
		>
			<div className='pages-inform groups-top-inform display-flex'>
				<div className='pages-num display-flex'>
					<h2>Guruhlar</h2>
					<h4>
						Miqdor - <span>{groups.length}</span>
					</h4>
				</div>
				<button className='add-btn' onClick={toggleAddTeacher}>
					Yangisini qo'shish
				</button>
			</div>
			<br />
		 <div className="inp-bar" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {/* Guruh holati */}
      <select
        className="select-filter"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="faol">Faol guruhlar</option>
        <option value="arxiv">Arxivlangan guruhlar</option>
        <option value="yakunlangan">Yakunlangan guruhlar</option>
      </select>

      {/* Mentor tanlash */}
      <select
        className="select-filter"
        value={mentorFilter}
        onChange={(e) => setMentorFilter(e.target.value)}
      >
        <option value="">Mentor</option>
        <option value="mentor1">Sayyorbek Khalikov</option>
        <option value="mentor2">Shahnoza To‘xtaeva</option>
        <option value="mentor3">Abdulloh Karimov</option>
      </select>

      {/* Fan tanlash */}
      <select
        className="select-filter"
        value={subjectFilter}
        onChange={(e) => setSubjectFilter(e.target.value)}
      >
        <option value="">Fan</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="design">Design</option>
      </select>

      {/* Jinsi bo‘yicha filtr */}
      <select
        className="select-filter"
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="">Jinsi</option>
        <option value="Erkak">Erkak</option>
        <option value="Ayol">Ayol</option>
      </select>

      {/* Sana bo‘yicha filtr */}
      <select
        className="select-filter"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <option value="">Boshlanish sanasi</option>
        <option value="2025-01-01">2025-01-01</option>
        <option value="2025-06-01">2025-06-01</option>
        <option value="2025-08-01">2025-08-01</option>
      </select>

	  {/* ? tug`ilgan kun bo`yicha */}
	   <select
        className="select-filter"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <option value="">Boshlanish sanasi</option>
        <option value="2025-01-01">2025-01-01</option>
        <option value="2025-06-01">2025-06-01</option>
        <option value="2025-08-01">2025-08-01</option>
      </select>
    </div>
	{/* ? navbar groups */}

		<div className="title-groups">
			<p>| Guruh</p>
			<p>| Kurslar</p>
			<p>| O`qituvchilar</p>
			<p>| Kunlar</p>
			<p>| Mashg`ulotlar sanasi</p>
			<p>| O`tilgan muddat</p>
			<p>| Xonalar</p>
			<p>| Yaqinda tugatadiganlar</p>
			<p>| Talabalar</p>
			<p>| Tugatganlar</p>
		</div>



			<div className='groups-table'>
				{groups.map((t, index) => (
					<div
						className='groups'
						key={index}
						ref={el => (cardRefs.current[index] = el)}
					>
						
						<Link to='/groups-edit' onClick={e => e.stopPropagation()}>
							<p>{t.guruh}</p>
						</Link>
						<p>{t.kurslar}</p>
						<p>{t.oqituvchilar}</p>
						<p>{t.kunlar}</p>
						<p>{t.mashgulotlarSanasi}</p>
						<p>{t.otilganMuddat}</p>
						<p>{t.xonalar}</p>
						<p>{t.yaqindaTugatadiganlar}</p>
						<p>{t.talabalar}</p>
						<p>{t.tugatganlar}</p>
						

						
						{openMenuIndex === index && (
							<div className='editGroups'>
								<Link to='/groups-edit' onClick={e => e.stopPropagation()}>
									<h2>Tahrirlash</h2>
								</Link>
								<h2>SMS</h2>
								<h2
									onClick={() => handleDelete(index)}
									style={{ color: 'red', cursor: 'pointer' }}
								>
									O'chirish
								</h2>
							</div>
						)}
					</div>
				))}
			</div>

			{showAddTeacher && (
				<form
					className='add-groups-form'
					onSubmit={handleSubmit}
					onClick={e => e.stopPropagation()}
				>
					
					<select
						name='guruh'
						value={formData.guruh}
						onChange={handleChange}
						placeholder='guruh'
					>
						<option value='Frontend'>Frontend</option>
						<option value='Backend'>Backend</option>
						<option value='Foundation'>Foundation</option>
						<option value='Grafik dizayn'>Grafik dizayn</option>
						<option value='SMM'>SMM</option>
						<option value='Kompiuter savotxonligi'>Kompiuter savotxonligi</option>
						<option value='Robotexnika'>Robotexnika</option>
					</select>
					

					<span>{fileName}</span>
					<button type='submit'>Qo'shish</button>
					<button type='button' onClick={toggleAddTeacher}>
						Bekor qilish
					</button>
				</form>
			)}
		</div>
	)
}

export default GroupsPage
