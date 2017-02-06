import React from 'react';

import PointEditor from './PointEditor.jsx';
import NumberValueEditor from './NumberValueEditor.jsx';
import BoolValueEditor from './BoolValueEditor.jsx';

class Panel extends React.Component {
	onChangePropertyPoint(name, property) {
		sprite[name].set(property.x, property.y);
	}
	onChangeProperty(name, property) {
		sprite[name] = property;
	}
	onChangeBoolProperty(name, property) {

	}
	render() {
		return (
			<div className='panel'>
				<h1 className='title'>{this.props.title}</h1>
				<div className='properties-conatainer'>
					<PointEditor title={'position'} x={sprite.position.x}	y={sprite.position.y} onChange={this.onChangePropertyPoint.bind(this)} />
					<PointEditor title={'scale'} 	x={sprite.scale.x}		y={sprite.scale.y} onChange={this.onChangePropertyPoint.bind(this)} />
					<NumberValueEditor name={'alpha'} 	 	step={0.1} value={sprite.alpha} onChange={this.onChangeProperty.bind(this)} />
					<NumberValueEditor name={'rotation'}	step={0.1} value={sprite.rotation} onChange={this.onChangeProperty.bind(this)} />
					<BoolValueEditor title={'visible'} onChange={this.onChangeBoolProperty.bind(this)}/>
				</div>
			</div>
		);
	}
}

export default Panel;
