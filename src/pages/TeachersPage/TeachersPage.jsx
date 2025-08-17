const TeachersPage = ({ collapsed }) => {
	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			data-aos='fade-left'
		>
			<h1>Teachers Page</h1>
		</div>
	)
}

export default TeachersPage
