import React, {useState} from 'react'

import './Header.css'
import Mobile from './Mobile/Mobile'
import Web from './Web/Web'

import {GrAppsRounded} from 'react-icons/gr';

function Header() {

    const [ isOpen, setIsOpen] = useState(false);


    return (
        <div className="header">
            <div className="logo">
                Michael Bartek
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                    
                </div>
                <div className="mobile-menu">
                    {/* this will make the the icon clickable and open the mobile sidebar */}
                    <GrAppsRounded onClick={() => setIsOpen(!isOpen)}/>
                </div>
                {/* when is open is true, the sidebar will be open */}
                {/* since i want to close it later from the sidebar, i need to pass the state and function into the mobile component as a prop  */}
                {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
            </div>
                
        </div>
    )
}

export default Header
