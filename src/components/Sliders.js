import PropTypes from "prop-types";
import React from "react";
import Slider from "./Slider";

const tabData = [
	{
		id: 1,
		title: "Job Description",
		body: `Passionate and hardworking Computer Science graduate
        from The American University of Sharjah (AUS), seeking an
        entry-level Software Engineering job, specifically full-stack
        web development & mobile application development.`,

		leftMargin: "0",
		bgColor: "#638C71",
	},
	{
		id: 2,
		title: "Education",
		body: `
		<ul>
		<li> ▪ American University of Sharjah (AUS), BSc. Computer
        Science, Fall 2020</li>
        <br/>
		<li> ▪ Our Own High School (OOHS), Physics, Chemistry,
        Mathematics, Computer Science (PCMC),
        2014-2016</li>
		</ul>
        `,

		leftMargin: "14.85vw",
		bgColor: "#63A599",
	},
	{
		id: 3,
		title: "Work Experience",
		body: `Beta IT internship <br/> ▪ Explored cloud security and
        IaaS services in Google Cloud Platform under the
        mentorship of Mr. Mohamed Elayyan`,

		leftMargin: "29.7vw",
		bgColor: "#879576",
	},
	{
		id: 4,
		title: "Skills",
		body: `Proficient with:
		<br/>
		▪ JavaScript (ES6)
        ▪ Node.js/Express
        ▪ HTML/CSS<
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
        ▪ Mongoose DB</li>
        ▪ MySQL Relational DB
        ▪ C++
		<br/>
		<br/>
        Some exposure to:
		<br/>
		▪ MATLAB: Applied Numerical Methods in my
        Numerical Analysis course at AUS
		<br/>
        ▪ Minitab: Applied statistical methods for sampled
        data to generate data trends of AUS students for
        my Statistics course project.
        ▪ Microsoft Office Suite – Used in academic
        assignments and projects.
        ▪ Software Engineering Lifecycles – Agile
        Development
        `,

		leftMargin: "44.55vw",
		bgColor: "#7FA187",
	},
	{
		id: 5,
		title: "Additional Info",
		body: "I like to cook",

		leftMargin: "59.4vw",
		bgColor: "#35553E",
	},
];

const Sliders = () => {
	return (
		<div
			className="sliders"
			style={{ position: "absolute", bottom: "-80vh", backgroundColor: "red" }}
		>
			{tabData.map((sliderData, idx) => (
                <Slider {...sliderData} />    
			))}

		</div>
	);
};

Sliders.defaultProps = {
	tabData: {},
};

Sliders.propTypes = {
	tabData: PropTypes.object,
};

export default Sliders;
