import PropTypes from 'prop-types'
import React from "react";
import Slider from "./Slider";

const tabData = [
	{
        id: 1,
        title: 'Job Description',
        body: `Passionate and hardworking Computer Science graduate
        from The American University of Sharjah (AUS), seeking an
        entry-level Software Engineering job, specifically full-stack
        web development & mobile application development.`,

        leftMargin: "0vw",
        bgColor: "#638C71"
	},
	{
        id: 2,
        title: 'Education',
        body: `American University of Sharjah (AUS), BSc. Computer
        Science, Fall 2020
        Our Own High School (OOHS), Physics, Chemistry,
        Mathematics, Computer Science (PCMC),
        2014-2016
        `,

        leftMargin: "11vw",
        bgColor: "#489E8F"
	},
	{
        id: 3,
        title: 'Work Experience',
        body: `Beta IT internship – explored cloud security and
        IaaS services in Google Cloud Platform under the
        mentorship of Mr. Mohamed Elayyan`,
        
        leftMargin: "22vw",
        bgColor: "#97AF77"
	},
	{
        id: 4,
        title: 'Skills',
        body: `Proficient with:
        ▪ JavaScript (ES6)
        ▪ Node.js/Express
        ▪ HTML/CSS
        ▪ Java
        ▪ Kotlin
        ▪ Python 3
        ▪ Django Framework
        ▪ Linux/Windows CLI
        ▪ Git & GitHub
        ▪ Google Cloud Platform Services
        ▪ Cloud Computing
        ▪ External APIs
        ▪ Firebase Firestore DB
        ▪ Figma (UX/UI Design)
        ▪ Mongoose DB
        ▪ MySQL Relational DB
        ▪ C++
        Some exposure to:
        ▪ MATLAB: Applied Numerical Methods in my
        Numerical Analysis course at AUS.
        ▪ Minitab: Applied statistical methods for sampled
        data to generate data trends of AUS students for
        my Statistics course project.
        ▪ Microsoft Office Suite – Used in academic
        assignments and projects.
        ▪ Software Engineering Lifecycles – Agile
        Development
        `,

        leftMargin: "33vw",
        bgColor: "#549F65"
    },
    {
        id: 5,
        title: 'Additional Info',
        body: "I hold a valid UAE Driving License & a personal car.",

        leftMargin: "44vw",
        bgColor: "#79D192"
	}
];

const Sliders = () => {
	return (
		<div
			className="sliders"
			style={{ position: "absolute", bottom: "-80vh", backgroundColor: "red" }}
		>
            
			<Slider {...tabData[0]} />
			<Slider {...tabData[1]} />
			<Slider {...tabData[2]} />
			<Slider {...tabData[3]} />
			<Slider {...tabData[4]} />
			{/* <button style={tabStyle}>About</button>
            <button style={tabStyle}>Education</button>
            <button style={tabStyle}>Work Experience</button>
            <button style={tabStyle}>Skills</button>
            <button style={tabStyle}>Additional Information</button> */}
			{/* Replace buttons with a slider component */}
            
		</div>
	);
};

Sliders.defaultProps = {
    tabData: {}
}

Sliders.propTypes = {
    tabData: PropTypes.object
}

export default Sliders;
