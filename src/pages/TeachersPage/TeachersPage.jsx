import { useEffect, useRef, useState } from 'react'
import { CiCircleRemove } from 'react-icons/ci'
import { FaEllipsisH, FaPhone } from 'react-icons/fa'
import { MdLocalPostOffice } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './TeachersPage.css'

const TeachersPage = ({ collapsed, hideModal }) => {
	const [showAddTeacher, setShowAddTeacher] = useState(false)
	const [fileName, setFileName] = useState('Hech narsa tanlanmagan')
	const [openMenuIndex, setOpenMenuIndex] = useState(null)
	const [selectedPhone, setSelectedPhone] = useState(null)
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
			<div className='teachers-inform display-flex'>
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
								<Link to='/teacher-edit' onClick={e => e.stopPropagation()}>
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
				<div className='add-teacher'>
					<div className='none-content' onClick={toggleAddTeacher}></div>
					<div className='add-form'>
						<div className='add-header display-flex'>
							<h2>O'qituvchi qo'shish</h2>
							<CiCircleRemove
								className='close-icon'
								onClick={toggleAddTeacher}
							/>
						</div>
						<hr />
						<form onSubmit={handleSubmit}>
							<div className='inp'>
								<label htmlFor='phone'>Telefon</label>
								<input
									type='tel'
									name='phone'
									className='input'
									value={formData.phone}
									onChange={handleChange}
								/>
							</div>
							<div className='inp'>
								<label htmlFor='name'>Ism</label>
								<input
									type='text'
									name='name'
									className='input'
									value={formData.name}
									onChange={handleChange}
								/>
							</div>
							<div className='inp'>
								<label htmlFor='subject'>Yo'nalishi</label>
								<input
									type='text'
									name='subject'
									className='input'
									value={formData.subject}
									onChange={handleChange}
								/>
							</div>
							<div className='inp'>
								<label htmlFor='date'>Tug'ilgan sana</label>
								<input
									type='date'
									name='date'
									className='input'
									value={formData.date}
									onChange={handleChange}
								/>
							</div>
							<div className='inp'>
								<label>Jinsi</label>
								<div className='jeans'>
									<input
										type='radio'
										name='jeans'
										value='Erkak'
										checked={formData.jeans === 'Erkak'}
										onChange={handleChange}
									/>
									<label>Erkak</label>
									<input
										type='radio'
										name='jeans'
										value='Ayol'
										checked={formData.jeans === 'Ayol'}
										onChange={handleChange}
									/>
									<label>Ayol</label>
								</div>
							</div>
							<div className='foto'>
								<label htmlFor='foto' className='foto-label'>
									Rasm
								</label>
								<input
									type='file'
									name='foto'
									className='file-inp'
									onChange={handleChange}
								/>
								<p>{fileName}</p>
							</div>
							<button
								type='submit'
								className='add-teacher-btn'
								disabled={
									!formData.phone ||
									!formData.name ||
									!formData.subject ||
									!formData.date ||
									!formData.jeans
								}
							>
								Qo'shish
							</button>
						</form>
					</div>
				</div>
			)}

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
		</div>
	)
}

export default TeachersPage
