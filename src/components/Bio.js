import React from 'react'
import MyImage from '../MyImage.jpg'

const Bio = () => {
    return (
        <div className = "bio">
            <img src={MyImage} style={imgStyle} alt=""></img>
            <h1 style={bioTitle}>
                Hello, I'm <span style={nameStyle}>Hafez.</span>
            </h1>

            <h2 style={discriptionStyle}>I'm a <code>Software Engineer</code>. My interests specifically lie in Fullstack Web Development.</h2>
            <h2 style={discriptionStyle}>Below you can find more information about me, under each of the colored tabs. </h2>
            <h2 style={discriptionStyle}>You can also find my Socials on the top-right corner of this screen. </h2>
            {/* <p>
                Passionate, hardworking, dedicated Fullstack Developer
                <br/>
                AUS Graduate - Fall 2016-2020 
            </p> */}
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
    fontFamily: 'Courier New',
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

export default Bio
