class BaseModal extends React.Component {
	state = {
		visible: false
	}
	showModal = e => {
		e.preventDefault()
		this.setState({ visible: true })
	}
	handleCancel = () => {
		this.setState({ visible: false })
	}
	handleOK = () => {
		this.setState({ visible: false })
	}
	renderAnchor = () => {
		if (this.props.type === 'button') {
			return (
				<Button type="primary" onClick={this.showModal}>
					{this.props.hint}
				</Button>
			)
		}
		return (
			<span style={{ color: 'blue' }} onClick={this.showModal}>
				{this.props.hint}
			</span>
		)
	}
	render() {
		const Component = this.props.form

		return (
			<span>
				{this.renderAnchor()}
				<Modal
					title={this.props.title}
					visible={this.state.visible}
					footer={null}
					onOk={this.handleOK}
					onCancel={this.handleCancel}
				>
					<Component onSubmit={this.handleOK} />
				</Modal>
			</span>
		)
	}
}
