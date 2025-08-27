import { useState } from 'react'
import { FaRegFlag } from 'react-icons/fa'
import { LuPencil } from 'react-icons/lu'
import './Editsection1.css'

const EditSection1 = ({ teacher, onEditClick }) => {
	const [showNote, setShowNote] = useState(false)
	const [showEdit, setShowEdit] = useState(false)

	if (!teacher) return <p>O'qituvchi tanlanmagan</p>

	return (
		<div className='edit-section display-flex'>
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
							onClick={onEditClick} // <-- bosilganda modalni ochadi
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
		</div>
	)
}

export default EditSection1
