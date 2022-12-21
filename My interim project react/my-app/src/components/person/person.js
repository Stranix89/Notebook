import {Component} from 'react'

class Person extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: this.props.name,
			phone: this.props.phone,
			career: this.props.career,
			email: this.props.email,
			meeting: this.props.meeting,
		}
	}

onChangeValue = (e) => {
	this.setState({
		meeting: e.target.value
	})
	this.props.onValueChange(this.props.id, e.target.value)
}

changeName = (e) => {
	this.setState({
		name: e.target.value
	})
	this.props.onValueChange(this.props.id, e.target.value)
}

changePhone = (e) => {
	this.setState({
		phone: e.target.value
	})
	this.props.onValueChange(this.props.id, e.target.value)
}

changeCareer = (e) => {
	this.setState({
		career: e.target.value
	})
	this.props.onValueChange(this.props.id, e.target.value)
}

changeEmail = (e) => {
	this.setState({
		email: e.target.value
	})
	this.props.onValueChange(this.props.id, e.target.value)
}

	render() {
		const {name, phone, career, email, meeting} = this.state;
		const classMeeting = 'active';
		const classNam = 'no-name';
		const classTd = 'no-info';
		return (
		<tr className={meeting.length > 0 ? classMeeting : null}>
			<td className={name.length > 0 ? null : classNam}><input type="text" value={name.length > 0 ? name : 'Name'} onChange={e => this.changeName(e)} /></td>
			<td className={phone.length > 0 ? null : classTd}><input type="text" value={phone.length > 0 ? phone : 'No phone'} onChange={e => this.changePhone(e)} /></td>
			<td className={career.length > 0 ? null : classTd}><input type="text" value={career.length > 0 ? career : 'No career'} onChange={e => this.changeCareer(e)} /></td>
			<td className={email.length > 0 ? null : classTd}><input type="text" value={email.length > 0 ? email : 'No email'} onChange={e => this.changeEmail(e)} /></td>
			<td><input type="text" value={meeting.length > 0 ? meeting : 'No meeting'} onChange={e => this.onChangeValue(e)} /></td>
		</tr>
			);
	}
}

export default Person;
