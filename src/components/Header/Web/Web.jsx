import React from 'react'
import './Web.css'

import {FcEditImage} from 'react-icons/fc';
import {AiOutlineLaptop, AiOutlineUser} from 'react-icons/ai';
import {BsFillBriefcaseFill} from 'react-icons/bs';



function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project"> <FcEditImage/> Projects </a>
            </div>
            <div className="web-option">
                <a href="#skills"><AiOutlineLaptop/>Skills</a>
            </div>
            <div className="web-option">
                <a href="#About"><BsFillBriefcaseFill/>Work</a>
            </div>
            <div className="web-option">
                <a href="#filler"><AiOutlineUser/>Contact</a>
            </div>
        </div>
    )
}

export default Web
