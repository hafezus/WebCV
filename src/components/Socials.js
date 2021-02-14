import React from 'react'
import GitHub from '../GitHub-Mark-Light-64px.png'
import Instagram from "../instagram-4-64.png"
import Twitter from "../twitter-64.png"
const Socials = () => {
    return (
        <div className="socialsDiv">
            <a href="https://github.com/hafezus" target="_blank" alt="GitHub" rel="noreferrer">
                <img src={GitHub} className="socialHandles" alt=""></img>
            </a>
            <a href="https://www.instagram.com/hafzus/?hl=en" target="_blank" alt="Instagram" rel="noreferrer">
                <img src={Instagram} className="socialHandles" alt=""></img>
            </a>
            <a href="https://twitter.com/hasminosmin" target="_blank" alt="Twitter" rel="noreferrer">
                <img src={Twitter} className="socialHandles" alt=""></img>
            </a>
        </div>
    )
}

export default Socials
