const StudentsPage = ({ collapsed }) => {
	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			data-aos='fade-left'
		>
			<h1>Student Page</h1>
		</div>
	)
}

export default StudentsPage
