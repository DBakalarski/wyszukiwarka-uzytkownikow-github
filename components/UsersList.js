class UsersList extends React.Component {
	get users() {
		return this.props.users.map(user => <User key={user.id} user={user}/>);
	}
	render() {
		return (
			<div className ={'userList'} >
				{this.users}
			</div>
		);
	}
}