import { CiCircleRemove } from 'react-icons/ci'

const AddTeacherModal = ({
	show,
	onClose,
	formData,
	onChange,
	onSubmit,
	fileName,
}) => {
	if (!show) return null

	return (
		<div className='add-teacher'>
			<div className='none-content' onClick={onClose}></div>
			<div className='add-form'>
				<div className='add-header display-flex'>
					<h2>O'qituvchi qo'shish</h2>
					<CiCircleRemove className='close-icon' onClick={onClose} />
				</div>
				<hr />
				<form onSubmit={onSubmit}>
					<div className='inp'>
						<label>Telefon</label>
						<input
							type='tel'
							name='phone'
							className='input'
							value={formData.phone}
							onChange={onChange}
						/>
					</div>
					<div className='inp'>
						<label>Ism</label>
						<input
							type='text'
							name='name'
							className='input'
							value={formData.name}
							onChange={onChange}
						/>
					</div>
					<div className='inp'>
						<label>Yo'nalishi</label>
						<input
							type='text'
							name='subject'
							className='input'
							value={formData.subject}
							onChange={onChange}
						/>
					</div>
					<div className='inp'>
						<label>Tug'ilgan sana</label>
						<input
							type='date'
							name='date'
							className='input'
							value={formData.date}
							onChange={onChange}
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
								onChange={onChange}
							/>
							<label>Erkak</label>
							<input
								type='radio'
								name='jeans'
								value='Ayol'
								checked={formData.jeans === 'Ayol'}
								onChange={onChange}
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
							onChange={onChange}
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
	)
}

export default AddTeacherModal
