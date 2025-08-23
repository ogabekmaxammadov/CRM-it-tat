import { CiCircleRemove } from 'react-icons/ci'

const EditTeacherModal = ({
	teacher,
	index,
	show,
	onClose,
	onChange,
	onSubmit,
}) => {
	if (!show) return null

	return (
		<div className='add-teacher'>
			<div className='none-content' onClick={onClose}></div>
			<div className='add-form'>
				<div className='add-header display-flex'>
					<h2>O'qituvchi tahrirlash</h2>
					<CiCircleRemove className='close-icon' onClick={onClose} />
				</div>
				<hr />
				<form onSubmit={e => onSubmit(e, index)}>
					<div className='inp'>
						<label>Telefon</label>
						<input
							type='tel'
							name='phone'
							className='input'
							value={teacher.phone}
							onChange={e => onChange(e, index)}
						/>
					</div>
					<div className='inp'>
						<label>Ism</label>
						<input
							type='text'
							name='name'
							className='input'
							value={teacher.name}
							onChange={e => onChange(e, index)}
						/>
					</div>
					<div className='inp'>
						<label>Yo'nalishi</label>
						<input
							type='text'
							name='subject'
							className='input'
							value={teacher.subject}
							onChange={e => onChange(e, index)}
						/>
					</div>
					<div className='inp'>
						<label>Tug'ilgan sana</label>
						<input
							type='date'
							name='date'
							className='input'
							value={teacher.date}
							onChange={e => onChange(e, index)}
						/>
					</div>
					<div className='inp'>
						<label>Jinsi</label>
						<div className='jeans'>
							<input
								type='radio'
								name='jeans'
								value='Erkak'
								checked={teacher.jeans === 'Erkak'}
								onChange={e => onChange(e, index)}
							/>
							<label>Erkak</label>
							<input
								type='radio'
								name='jeans'
								value='Ayol'
								checked={teacher.jeans === 'Ayol'}
								onChange={e => onChange(e, index)}
							/>
							<label>Ayol</label>
						</div>
					</div>
					<div className='foto'>
						<label className='foto-label'>Rasm</label>
						<input
							type='file'
							name='foto'
							className='file-inp'
							onChange={e => onChange(e, index)}
						/>
						<p>{teacher.img ? 'Rasm tanlandi' : 'Hech narsa tanlanmagan'}</p>
					</div>
					<button type='submit' className='add-teacher-btn'>
						Saqlash
					</button>
				</form>
			</div>
		</div>
	)
}

export default EditTeacherModal
