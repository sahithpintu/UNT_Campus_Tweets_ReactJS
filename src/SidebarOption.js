// This component is used to define an option in the sidebar component

import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active, text, Icon, handler}) {

    return (
        <div className={`sidebarOption ${active && `sidebarOption--active`}`} onClick={handler}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
