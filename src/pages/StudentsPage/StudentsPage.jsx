const StudentsPage = ({ collapsed, hideModal }) => {
	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			onClick={hideModal}
		>
			<h1>Student Page</h1>
		</div>
	)
}

export default StudentsPage
