import React from 'react'

import Socials from './Socials'
import MyImage from '../MyImage.jpg'

const Bio = () => {
    return (
        <div className = "bio">
            <Socials />
            <img src={MyImage} alt="" className="bioImage"></img>
            <h1>
                Hello, I'm Hafez.<span class="wave">👋</span>
            </h1>
            <h2 style={discriptionStyle}>Software Engineer, Open-Source Advocate, Code Fanatic</h2>
        </div>
    )
}


const discriptionStyle = {
    fontFamily: 'Poppins',
    fontWeight:'100',
    color: "#ccc",
    paddingBottom: '2vh',
    paddingTop: '2vh',
    justifyContent: 'center'
}

const codeStyle = {
    color: "#777",
    fontSize: "2rem",
}


export default Bio
