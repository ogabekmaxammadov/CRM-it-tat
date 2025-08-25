import React, { useEffect, useRef, useState } from 'react'
import './grouppage.css'
import { Link } from 'react-router-dom'
import { Select } from 'antd'
import { CiEdit } from "react-icons/ci";


const GroupsPage = ({ collapsed, hideModal }) => {
	const [showAddTeacher, setShowAddTeacher] = useState(false)
	const [fileName, setFileName] = useState('Hech narsa tanlanmagan')
	const [openMenuIndex, setOpenMenuIndex] = useState(null)
	const [editIndex, setEditIndex] = useState(null)
	const [groups, setGroups] = useState([])
	const [statusFilter, setStatusFilter] = useState('faol')
	const [mentorFilter, setMentorFilter] = useState('')
	const [subjectFilter, setSubjectFilter] = useState('')
	const [genderFilter, setGenderFilter] = useState('')
	const [dateFilter, setDateFilter] = useState('')

	const [formData, setFormData] = useState({
		guruh: '',
		kurslar: '',
		oqituvchilar: '',
		kunlar: '',
		mashgulotlarSanasi: '',
		otilganMuddat: '',
		xonalar: '',
		yaqindaTugatadiganlar: '',
		talabalar: '',
		tugatganlar: '',
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

	const handleEdit = index => {
		setEditIndex(index)
		setFormData(groups[index])
		setShowAddTeacher(true)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (editIndex !== null) {
			// Edit mode
			const updatedGroups = [...groups]
			updatedGroups[editIndex] = formData
			setGroups(updatedGroups)
			localStorage.setItem('groupsData', JSON.stringify(updatedGroups))
			setEditIndex(null)
		} else {
			// Add new group
			const newGroup = { ...formData }
			const updatedGroups = [...groups, newGroup]
			setGroups(updatedGroups)
			localStorage.setItem('groupsData', JSON.stringify(updatedGroups))
		}

		setShowAddTeacher(false)
		setFormData({
			guruh: '',
			kurslar: '',
			oqituvchilar: '',
			kunlar: '',
			mashgulotlarSanasi: '',
			otilganMuddat: '',
			xonalar: '',
			yaqindaTugatadiganlar: '',
			talabalar: '',
			tugatganlar: '',
		})
		setFileName('Hech narsa tanlanmagan')
	}

	const toggleMenu = index => {
		setOpenMenuIndex(prev => (prev === index ? null : index))
	}

	const handleDelete = index => {
		setGroups(prev => {
			const updatedGroups = prev.filter((_, i) => i !== index)
			localStorage.setItem('groupsData', JSON.stringify(updatedGroups))
			return updatedGroups
		})
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

	useEffect(() => {
		const storedGroups = localStorage.getItem('groupsData')
		if (storedGroups) {
			setGroups(JSON.parse(storedGroups))
		}
	}, [])

	return (
		<div className={`home-page ${collapsed ? 'expanded' : ''}`} onClick={hideModal}>
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
			{/* FILTERLAR */}
			<div className="inp-bar" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
				<select className="select-filter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
					<option value="faol">Faol guruhlar</option>
					<option value="arxiv">Arxivlangan guruhlar</option>
					<option value="yakunlangan">Yakunlangan guruhlar</option>
				</select>
				<select className="select-filter" value={mentorFilter} onChange={(e) => setMentorFilter(e.target.value)}>
					<option value="">Mentor</option>
					<option value="mentor1">Sayyorbek Khalikov</option>
					<option value="mentor2">Shahnoza To‘xtaeva</option>
					<option value="mentor3">Abdulloh Karimov</option>
				</select>
				<select className="select-filter" value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
					<option value="">Fan</option>
					<option value="frontend">Frontend</option>
					<option value="backend">Backend</option>
					<option value="design">Design</option>
				</select>
				<select className="select-filter" value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
					<option value="">Jinsi</option>
					<option value="Erkak">Erkak</option>
					<option value="Ayol">Ayol</option>
				</select>
				<select className="select-filter" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
					<option value="">Boshlanish sanasi</option>
					<option value="2025-01-01">2025-01-01</option>
					<option value="2025-06-01">2025-06-01</option>
					<option value="2025-08-01">2025-08-01</option>
				</select>
			</div>

			{/* Sarlavhalar */}
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

			{/* Guruhlar ro‘yxati */}
			<div className='groups-table'>
				{groups.map((t, index) => (
					<div className='groups' key={index} ref={el => (cardRefs.current[index] = el)}>
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
						<h2 className='edit-icon' onClick={() => toggleMenu(index)}><CiEdit /></h2>

						{openMenuIndex === index && (
							<div className='editGroups'>
								<h2 onClick={() => handleEdit(index)}>Tahrirlash</h2>
								<h2 onClick={() => handleDelete(index)} style={{ color: 'red', cursor: 'pointer' }}>
									O'chirish
								</h2>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Qo‘shish/Tahrirlash paneli */}
			<div className={`slide-form-panel ${showAddTeacher ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
				<form className='add-groups-form' onSubmit={handleSubmit}>
					<h3>{editIndex !== null ? 'Guruhni tahrirlash' : 'Yangi guruh qo‘shish'}</h3>
					<button type='button' className='close-btn' onClick={toggleAddTeacher}>✕</button>

					{[
						'guruh', 'kurslar', 'oqituvchilar', 'kunlar', 'mashgulotlarSanasi',
						'otilganMuddat', 'xonalar', 'yaqindaTugatadiganlar', 'talabalar', 'tugatganlar'
					].map((field, i) => (
						<Select
							key={i}
							showSearch
							style={{ width: '100%', fontSize: '20px', marginBottom: '10px' }}
							placeholder={`${field}ni tanlang`}
							value={formData[field]}
							onChange={(value) => setFormData(prev => ({ ...prev, [field]: value }))}
							options={[
								{ value: '', label: 'Tanlang' },
								{ value: 'Frontend', label: 'Frontend' },
								{ value: 'Backend', label: 'Backend' },
								{ value: 'Foundation', label: 'Foundation' },
								{ value: 'Grafik dizayn', label: 'Grafik dizayn' },
								{ value: 'SMM', label: 'SMM' },
								{ value: 'Kompiuter savotxonligi', label: 'Kompiuter savotxonligi' },
								{ value: 'Robotexnika', label: 'Robotexnika' },
							]}
						/>
					))}

					<span>{fileName}</span>
					<button type='submit'>{editIndex !== null ? "Saqlash" : "Qo'shish"}</button>
				</form>
			</div>
		</div>
	)
}

export default GroupsPage
