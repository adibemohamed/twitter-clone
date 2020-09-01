import React from 'react';
import './Sidebar.css';

function SidebarOption({text, Icon}) {
    return (
        <div className="sidbarOption">
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
