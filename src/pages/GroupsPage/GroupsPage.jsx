const GroupsPage = ({ collapsed }) => {
	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			data-aos='fade-left'
		>
			<h1>Groups Page</h1>
		</div>
	)
}

export default GroupsPage
