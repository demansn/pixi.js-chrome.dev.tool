import React from 'react';

import NumberValueEditor from './NumberValueEditor.jsx';

class PointEditor extends React.Component {
	constructor (props) {
		super(props);

		this.state = {x: this.props.x, y: this.props.y};
	}
	onChangeValue(name, value)
	{
		var state = name == 'x' ? {x: this.state.x, y: value} : {x: value, y: this.state.y};

		this.setState(state);
		this.props.onChange(this.props.title, state);
	}
	render () {
		return (
			<div className='property-group-point'>
				<div className='title'>{this.props.title}</div>
				<div className='properties'>
					<NumberValueEditor name='x' step={1} value={this.state.x} onChange={this.onChangeValue.bind(this)} />
					<NumberValueEditor name='y' step={1} value={this.state.y} onChange={this.onChangeValue.bind(this)}/>
				</div>
			</div>
		);
	}
}

export default PointEditor;
