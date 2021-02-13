import React from 'react'
import GitHub from '../GitHub-Mark-Light-64px.png'
import Instagram from "../instagram-4-64.png"
import Twitter from "../twitter-64.png"
const Socials = () => {
    return (
        <div style={socialsStyle}>
            <a href="https://github.com/hafezus" target="_blank" alt="GitHub">
                <img src={GitHub} class="socialHandles"></img>
            </a>
            <a href="https://www.instagram.com/hafzus/?hl=en" target="_blank" alt="Instagram">
                <img src={Instagram} class="socialHandles"></img>
            </a>
            <a href="https://twitter.com/hasminosmin" target="_blank" alt="Twitter">
                <img src={Twitter} class="socialHandles"></img>
            </a>
        </div>
    )
}

const socialsStyle={
    position: 'absolute',
    display: 'flex',
    left: '88.3vw',
    top:"2vw",
    flexDirection: 'row',
    borderRadius:"50%"
}

export default Socials
