import React from 'react';

import ToolsBar from './components/ToolsBar.jsx';

function Panel(){
    return (
        <div className='head'>
            <ToolsBar />
            <div className='separate'></div>
            <div className='tabs'>
                <div>Инспектор</div>
            </div>
        </div>
    );
}

export default Panel;