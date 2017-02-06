import React from 'react';
import ReactDOM from 'react-dom';

import Panel from './Panel.jsx';

class Editor extends React.Component {
	render () {
		return (
			<Panel title="Panel"/>
		)
	}
}

ReactDOM.render(<Editor />, document.getElementById('root'));
