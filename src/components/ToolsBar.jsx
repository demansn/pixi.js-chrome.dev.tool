import React from 'react';
import Button from './Button.jsx';


class ToolsBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {selectedTool: 'select'};
    }
    handleClick(buttonId) {
        this.setState({selectedTool: buttonId});
    }
    render(){
        return (
            <div className='tools-bar'>
                <Button id='select' selected={this.state.selectedTool == 'select'} onClick={this.handleClick.bind(this)} type='' icon='mdi mdi-cursor-default' />
                <Button id='translate' selected={this.state.selectedTool == 'translate'} onClick={this.handleClick.bind(this)} type='' icon='mdi mdi-cursor-move' />
                <Button id='transform' selected={this.state.selectedTool == 'transform'} onClick={this.handleClick.bind(this)} type='' icon='mdi mdi-crop-free' />
                <Button id='rotate' selected={this.state.selectedTool == 'rotate'} onClick={this.handleClick.bind(this)} type='' icon='mdi mdi-rotate-3d' />
            </div>
        );
    }
}

export default ToolsBar;