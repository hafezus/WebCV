import React from 'react'

import Socials from './Socials'
import MyImage from '../MyImage.jpg'
import SocialHandles from '../SocialHandles.png'
import AdditionalInfo from '../AdditionalInfo.png'

const Bio = () => {
    return (
        <div className = "bio">
            <Socials />
            <img src={MyImage} style={imgStyle} alt=""></img>
            <h1 style={bioTitle}>
                Hello, I'm Hafez.
            </h1>
            <h2 style={discriptionStyle}><code style={codeStyle}>&lt;code&gt;</code> Software Engineer, Open-Source Advocate, Code Fanatic <code style={codeStyle}>&lt;/code&gt;</code></h2>
        </div>
    )
}

const bioTitle={
    fontFamily: 'Consolas',
    fontWeight:'100',
    color: "#fff",
    fontSize: '4rem',
    padding: '2vw',
    marginTop: "10vh",
    wordBreak: "break-word"
}

const discriptionStyle = {
    fontFamily: 'Consolas',
    fontWeight:'100',
    color: "#ccc",
    paddingBottom: '2vh',
    paddingTop: '2vh',
    justifyContent: 'center'
}

const imgStyle = {
    borderRadius: "50%",
    position: "absolute",
    top: "10vh"
}

const codeStyle = {
    fontSize: "3.2rem",
    color: "#777",
    fontSize: "2rem",
}


export default Bio
