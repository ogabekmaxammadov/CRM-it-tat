import { useState } from 'react'
import { FaRegFlag } from 'react-icons/fa'
import { LuPencil } from 'react-icons/lu'
import './Editsection1.css'

const EditSection1 = ({ teacher, onEditClick }) => {
	const [showNote, setShowNote] = useState(false)
	const [showEdit, setShowEdit] = useState(false)

	if (!teacher) return <p>O'qituvchi tanlanmagan</p>

	const teacherGrups = [
		{
			id: 1,
			name: 'Frontend',
			groupName: 'Frontend Sentabr 16:00',
			startDate: '2023-09-16',
			endDate: '2023-09-16',
			time: '16:00',
			students: 10,
		},
		{
			id: 1,
			name: 'Frontend',
			groupName: 'Frontend Sentabr 10:00',
			startDate: '2023-09-16',
			endDate: '2023-09-16',
			time: '10:00',
			students: 17,
		},
	]

	return (
		<div className='edit-section '>
			<div className='teacher-inform'>
				<div className='teacher-info'>
					<img src={teacher.img} alt='' />
					<h2>{teacher.name}</h2>
					<div className='edit'>
						<FaRegFlag
							className='edit-icon'
							onMouseEnter={() => setShowNote(true)}
							onMouseLeave={() => setShowNote(false)}
						/>
						<LuPencil
							className='edit-icon'
							onMouseEnter={() => setShowEdit(true)}
							onMouseLeave={() => setShowEdit(false)}
							onClick={onEditClick}
						/>
						{showNote && (
							<h2 className={`note ${showNote ? 'show' : ''}`}>Eslatma</h2>
						)}
						{showEdit && (
							<h2 className={`edit-item ${showEdit ? 'show' : ''}`}>
								Tahrirlash
							</h2>
						)}
					</div>
				</div>
				<div className='teacher-data'>
					<div className='data display-flex'>
						<h4 className='grey'>Telefon: </h4>
						<p>{teacher.phone}</p>
					</div>
					<div className='data display-flex'>
						<h4 className='grey'>Tug‘ilgan kun:</h4>
						<p>{teacher.date}</p>
					</div>
					<div className='data1'>
						<h4 className='grey'>Yo‘nalish:</h4>
						<h3>{teacher.subject}</h3>
					</div>
				</div>
			</div>

			<div className='teacher-groups'>
				<h2>Guruhlar</h2>

				<div className='groupss'>
					{teacherGrups.length > 0 &&
						teacherGrups.map(group => (
							<div className='group-item display-flex'>
								<div className='group-name'>
									<h4>{group.groupName}</h4>
									<h3>{group.name}</h3>
								</div>
								<div className='group-date'>
									<h4>
										{group.startDate}
										<br />
										{group.endDate}
									</h4>
									<h4>{group.time}</h4>
								</div>
								<div className='students-gr'>
									<h4>{group.students}</h4>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default EditSection1
