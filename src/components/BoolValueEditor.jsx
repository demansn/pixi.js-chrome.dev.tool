import React from 'react';

function BoolValueEditor(props){
	return (
		<div className='property'>
			<div className='name'>{props.title}</div>
			<i className='chackbox'></i>
		</div>
	);
}

export default BoolValueEditor;
