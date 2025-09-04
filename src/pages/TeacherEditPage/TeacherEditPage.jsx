import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import EditTeacherModal from '../TeachersPage/EditTeacherModal'
import EditSection1 from './EditSection1/EditSection1'
import './TeacherEditPage.css'

const TeacherEditPage = ({ collapsed, hideModal }) => {
	const location = useLocation()
	const teacherData = location.state?.teacher

	const [teacher, setTeacher] = useState(teacherData)
	const [showModal, setShowModal] = useState(false)

	const handleChange = e => {
		const { name, value, files } = e.target
		setTeacher(prev => ({
			...prev,
			[name]: files ? files[0] : value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setShowModal(false)
		console.log(' o‘qituvchi ma’lumotlari:', teacher)
	}

	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			onClick={hideModal}
		>
			<div className='teacher-name'>
				<h1>{teacher?.name}</h1>
			</div>

			<div className='edit-teacher'>
				<div className='edit-elements display-flex'>
					<h2>Profile</h2>
					<h2>Tarix</h2>
					<h2>Ish haqi</h2>
				</div>
				<hr />
			</div>

			<div className='edit-teacher-page'>
				<EditSection1
					teacher={teacher}
					onEditClick={() => setShowModal(true)}
				/>
			</div>

			<EditTeacherModal
				teacher={teacher}
				index={0}
				show={showModal}
				onClose={() => setShowModal(false)}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
		</div>
	)
}

export default TeacherEditPage
