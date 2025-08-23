import { useEffect, useRef, useState } from 'react'
import { FaEllipsisH, FaPhone } from 'react-icons/fa'
import { MdLocalPostOffice } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AddTeacherModal from './AddTeacherModal'
import EditTeacherModal from './EditTeacherModal'
import './TeachersPage.css'

const TeachersPage = ({ collapsed, hideModal }) => {
	const [showAddTeacher, setShowAddTeacher] = useState(false)
	const [fileName, setFileName] = useState('Hech narsa tanlanmagan')
	const [openMenuIndex, setOpenMenuIndex] = useState(null)
	const [selectedPhone, setSelectedPhone] = useState(null)
	const [editTeacherIndex, setEditTeacherIndex] = useState(null)

	const [teachers, setTeachers] = useState([
		{
			img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg',
			name: 'Khalikov Sayyorbek',
			subject: 'Frontend',
			phone: '998 99 999 99 99',
			date: '2021-01-01',
			jeans: 'Erkak',
		},
	])

	const [formData, setFormData] = useState({
		phone: '',
		name: '',
		subject: '',
		date: '',
		jeans: '',
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
		const newTeacher = {
			img: formData.foto || 'https://via.placeholder.com/150',
			name: formData.name,
			subject: formData.subject || 'Fan kiritilmagan',
			phone: formData.phone || 'Telefon kiritilmagan',
			date: formData.date,
			jeans: formData.jeans,
		}
		setTeachers(prev => [...prev, newTeacher])
		setShowAddTeacher(false)
		setFormData({
			phone: '',
			name: '',
			subject: '',
			date: '',
			jeans: '',
			foto: '',
		})
		setFileName('Hech narsa tanlanmagan')
	}

	const toggleMenu = index =>
		setOpenMenuIndex(prev => (prev === index ? null : index))

	const handleDelete = index => {
		setTeachers(prev => prev.filter((_, i) => i !== index))
		setOpenMenuIndex(null)
	}

	const editTeacherShow = index => {
		setEditTeacherIndex(index)
		setOpenMenuIndex(null)
	}
	const closeEditTeacher = () => setEditTeacherIndex(null)

	const handleEditChange = (e, index) => {
		const { name, value, type, files } = e.target
		setTeachers(prev => {
			const updated = [...prev]
			if (type === 'file') {
				updated[index].img = URL.createObjectURL(files[0])
			} else {
				updated[index][name] = value
			}
			return updated
		})
	}

	const handleEditSubmit = (e, index) => {
		e.preventDefault()
		closeEditTeacher()
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

	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			onClick={hideModal}
		>
			<div className='teachers-inform pages-inform display-flex'>
				<div className='pages-num display-flex'>
					<h2>O'qituvchilar</h2>
					<h4>
						Miqdor - <span>{teachers.length}</span>
					</h4>
				</div>
				<button className='add-btn' onClick={toggleAddTeacher}>
					Yangisini qo'shish
				</button>
			</div>

			<div className='teachers-table'>
				{teachers.map((t, index) => (
					<div
						className='teacher'
						key={index}
						ref={el => (cardRefs.current[index] = el)}
					>
						<img src={t.img} alt='' />
						<Link to='/teacher-edit' onClick={e => e.stopPropagation()}>
							<h2>{t.name}</h2>
						</Link>
						<h3>{t.subject}</h3>
						<div className='teacher-web display-flex'>
							<FaPhone
								className='teacher-icon'
								onClick={e => {
									e.stopPropagation()
									setSelectedPhone(t.phone)
								}}
							/>
							<MdLocalPostOffice className='teacher-icon' />
						</div>

						<FaEllipsisH
							className='menu-icon'
							onClick={e => {
								e.stopPropagation()
								toggleMenu(index)
							}}
						/>

						{openMenuIndex === index && (
							<div className='editTeacher'>
								<h2 onClick={() => editTeacherShow(index)}>Tahrirlash</h2>
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

			{/* Qo'shish modal */}
			{showAddTeacher && (
				<AddTeacherModal
					show={showAddTeacher}
					onClose={toggleAddTeacher}
					formData={formData}
					onChange={handleChange}
					onSubmit={handleSubmit}
					fileName={fileName}
				/>
			)}

			{/* Telefon modal */}
			{selectedPhone && (
				<div className='phone-modal'>
					<div
						className='none-content'
						onClick={() => setSelectedPhone(null)}
					></div>
					<div className='phone-content'>
						<a href={`tel:${selectedPhone}`}>{selectedPhone}</a>
					</div>
				</div>
			)}

			{editTeacherIndex !== null && (
				<EditTeacherModal
					show={editTeacherIndex !== null}
					onClose={closeEditTeacher}
					teacher={teachers[editTeacherIndex]}
					index={editTeacherIndex}
					onChange={handleEditChange}
					onSubmit={handleEditSubmit}
				/>
			)}
		</div>
	)
}

export default TeachersPage
