const TeachersPage = ({ collapsed, hideModal }) => {
	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			onClick={hideModal}
		>
			<h1>Teachers Page</h1>
		</div>
	)
}

export default TeachersPage
