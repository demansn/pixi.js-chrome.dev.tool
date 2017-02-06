import React from 'react';

class NumberValueEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {value: this.props.value};
	}
	onChange() {
		this.props.onChange(this.props.name, this.state.value);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.onChange();
	}
	handleChange(e) {
		let value = Number(e.target.value);
		this.setState({value: value}, this.onChange.bind(this));
	}
	render() {
		return (
			<div className='property'>
				<div className='name'>{this.props.name}</div>
				<form className='value' onSubmit={this.handleSubmit.bind(this)}>
					<input type="number" step={this.props.step} value={this.state.value} onChange={this.handleChange.bind(this)}/>
				</form>
			</div>
		);
	}
}

export default NumberValueEditor;
