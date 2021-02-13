import React from 'react'
import MyImage from '../MyImage.jpg'
import SocialHandles from '../SocialHandles.png'
import AdditionalInfo from '../AdditionalInfo.png'

const Bio = () => {
    return (
        <div className = "bio">
            <img src={MyImage} style={imgStyle} alt=""></img>
            <h1 style={bioTitle}>
                Hello, I'm <span style={nameStyle}>Hafez.</span>
            </h1>
            <h2 style={discriptionStyle}><code style={codeStyle}>&lt;code&gt;</code> Software Engineer, Open-Source Advocate, Code Fanatic <code style={codeStyle}>&lt;/code&gt;</code></h2>
        </div>
    )
}

const bioTitle={
    fontFamily: 'Consolas',
    fontWeight:'100',
    color: "#fff",
    fontSize: '4em',
    padding: '20px',
    marginTop: "100px"
}

const discriptionStyle = {
    fontFamily: 'Consolas',
    fontWeight:'100',
    color: "#ccc",
    paddingBottom: '10px',
}

const imgStyle = {
    borderRadius: "50%",
    position: "absolute",
    top: "100px"
}

const nameStyle ={
    fontWeight: '100',
}

const codeStyle = {
    fontSize: "32px",
    color: "#777",
    fontSize: "18px",
}


export default Bio
