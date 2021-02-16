import PropTypes from "prop-types";
import React from "react";
import Slider from "./Slider";

const tabData = [
	{
		id: 1,
		title: "About",
		body: `Passionate and hardworking programmer. I love what I do and I do
		it with full dedication. 
		
		<br/>
		<br/>
		
		My goal is to make the web a cleaner place where clean, 
		easy to use, responsive and blazing fast websites that are developed with new technologies, 
		due to the fact that currently there are many websites hosted by big companies that are just ugly, unresponsive and 
		difficult to use (even from personal experience). 
		<br/>
		<br/>
		E-commerce is heavily lacking in the Middle-East, despite the growing demand of online means of 
		purchasing goods increasing hundredfold, especially in the light of COVID-19. I believe old web 
		practices and languages, such as Java, PHP and ASP NET frameworks and frontend libraries such as 
		JQuery, JSP/JSFs, overusage of Relational Databases are very outdated and companies are simply hesitant 
		to embrace newer technologies. But I want to fix that. The web is changing every day and it is time to
		accept these changes with open arms.`,

		leftMargin: 3 + (12)*0 + "vw",
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

		leftMargin: (4 + 12)*1 + "vw",
		bgColor: "#63A599",
	},
	{
		id: 3,
		title: "Work Experience",
		body: `Beta IT internship <br/> - Explored cloud security and
        IaaS services in Google Cloud Platform under the
        mentorship of Mr. Mohamed Elayyan`,

		leftMargin: 5 + (12)*2 + "vw",
		bgColor: "#879576",
	},
	{
		id: 4,
		title: "Skills",
		body: `Proficient with:
		<br/>
		- JavaScript (ES6)
        - Node.js/Express
        - HTML/CSS<
        - Java
        - Kotlin
        - Python 3
        - C++
        - Django Framework
        - Linux/Windows CLI
        - Git & GitHub
        - Google Cloud Platform Services
        - Cloud Computing
        - External APIs
        - Firebase Firestore DB
        - Mongoose DB
		- Figma (UX/UI Design)
		<br/>
		<br/>
        Experience with:
		<br/>
		- MATLAB: Applied Numerical Methods in my
        Numerical Analysis course at AUS
		<br/>
        - Minitab: Applied statistical methods for sampled
        data to generate data trends of AUS students for
        my Statistics course project.
        - Microsoft Office Suite – Used in academic
        assignments and projects.
        - Software Engineering Lifecycles – Agile
        Development
        `,

		leftMargin: 6 + (12)*3  + "vw",
		bgColor: "#7FA187",
	},
	{
		id: 5,
		title: "Additional Info",
		body: "I like to cook",

		leftMargin: 7+ (12)*4 + "vw",
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
