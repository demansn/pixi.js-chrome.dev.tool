import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        this.props.onClick(this.props.id);
    }
    render(){
        return (
            <button className='tool-icon button' onClick={this.handleClick.bind(this)}>
                <i className={'mdi ' + this.props.icon + (this.props.selected ? ' selected' : '')}></i>
            </button>
        );
    }
}

export default Button;
