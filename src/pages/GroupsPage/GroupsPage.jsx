const GroupsPage = ({ collapsed, hideModal }) => {
	return (
		<div
			className={`home-page ${collapsed ? 'expanded' : ''}`}
			onClick={hideModal}
		>
			<h1>Groups Page</h1>
		</div>
	)
}

export default GroupsPage
