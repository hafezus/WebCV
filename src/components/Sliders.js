import PropTypes from "prop-types";
import React from "react";
import Slider from "./Slider";

const tabData = [
	{
		id: 1,
		title: "About",
		body: `Passionate and hardworking programmer. 
		<br/>
		<br/>
		
		My goal is to make the web a cleaner place where clean, 
		easy to use, responsive and blazing fast websites that are developed with new technologies, 
		due to the fact that currently there are many websites hosted by big companies that are just ugly, unresponsive and 
		difficult to use (even from personal experience). 
		<br/>
		<br/>
		
		My goal is to make the web a cleaner place where clean, secure,
		easy to use, responsive and blazing fast using latest technologies, especially in the field of E-commerce, which is in my
		opinion, is very much lacking here in the UAE.
		<br/>
		<br/>
		`,

		leftMargin: 3 + 12 * 0 + "vw",
		bgColor: "#397367",
	},
	{
		id: 2,
		title: "Education",
		body: `
		<ul>
		<li> - American University of Sharjah (AUS), BSc. Computer
        Science, Fall 2020</li>
        <br/>
		<li> - Our Own High School (OOHS), Physics, Chemistry,
        Mathematics, Computer Science (PCMC),
        2014-2016</li>
		</ul>
        `,

		leftMargin: (4 + 12) * 1 + "vw",
		bgColor: "#1E5C5B",
	},
	{
		id: 3,
		title: "Work Experience",
		body: `Beta IT internship <br/> - Explored cloud security and
        IaaS services in Google Cloud Platform under the
        mentorship of Mr. Mohamed Elayyan`,

		leftMargin: 5 + 12 * 2 + "vw",
		bgColor: "#5DA399",
	},
	{
		id: 4,
		title: "Skills",
		body: `Proficient with:
		<br/>
		- JavaScript (ES6)
        - Node.js/Express
		- React.js
        - HTML/CSS
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

		leftMargin: 6 + 12 * 3 + "vw",
		bgColor: "#42858C",
	},
	{
		id: 5,
		title: "Additional Info",
		body: `
		- I hold a valid automatic UAE license.
		<br/>
		- I have a residency visa and require no employment sponsorship.
		<br/>

		`,

		leftMargin: 7 + 12 * 4 + "vw",
		bgColor: "#3C5F64",
	},
];

const Sliders = () => {
	return (
		<div className="sliders" style={{ position: "absolute", bottom: "-80vh" }}>
			{tabData.map((sliderData, idx) => (
				<Slider {...sliderData} />
			))}
		</div>
	);
};

{
	/*
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis viverra ipsum, in porta nisl posuere vitae. Nam in arcu non magna aliquet consectetur et eu justo. Sed euismod magna et feugiat vulputate. Maecenas nec lorem id lectus gravida faucibus ac vitae turpis. Pellentesque dapibus pulvinar neque vel elementum. Vivamus nibh nisl, luctus id dictum in, scelerisque eget ligula. Aliquam in ante in dui aliquam imperdiet. Quisque euismod pharetra est sed feugiat. Vestibulum ac nulla non tortor lacinia mollis. Vivamus massa tortor, bibendum condimentum nisl vel, vehicula sollicitudin elit. In non eros sed sem vulputate varius vitae vel libero. In facilisis lobortis neque, in vulputate neque.

		Integer vulputate accumsan velit vestibulum consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ut mi ac mauris congue ullamcorper. Vestibulum est ligula, commodo et ante rhoncus, faucibus varius nunc. Sed vitae magna dui. Morbi sit amet volutpat turpis, sit amet aliquam nunc. Nam sagittis, lectus suscipit rhoncus condimentum, erat sapien pellentesque purus, non dapibus tortor ligula quis erat. Vivamus et hendrerit lorem, vel eleifend eros. Proin at lacus vel urna cursus scelerisque dapibus a lectus.
		
		Integer dictum rutrum luctus. Nullam consequat dignissim quam eget tempor. Vivamus congue, leo at pharetra accumsan, orci neque volutpat ante, quis lacinia purus elit in risus. Praesent fringilla sodales enim eget ornare. Ut sed malesuada purus, lobortis elementum lectus. In dictum sapien et lorem luctus dapibus. Vivamus et nisl et sem auctor convallis vitae non sapien. Praesent aliquet erat ipsum, ac porttitor nisl dapibus ut. Curabitur ante nibh, volutpat sagittis lacus ullamcorper, dapibus finibus leo.
		
		Vestibulum lectus turpis, mollis ac sagittis id, imperdiet id diam. Duis vehicula, dui quis varius venenatis, dui velit tempor libero, efficitur posuere purus justo eu diam. Sed aliquam facilisis nibh malesuada sollicitudin. Curabitur sit amet est quis lectus euismod tempus id eu erat. Morbi condimentum metus eget sem rutrum sodales. Maecenas sit amet venenatis est. Praesent tincidunt augue tellus, vitae porttitor ligula eleifend id. Integer tempus nulla felis, id pellentesque augue ultrices semper. Integer gravida placerat tincidunt. Sed et nunc in odio mollis tempus. Sed volutpat faucibus lectus, sed blandit dui interdum id. Integer volutpat at odio vitae pulvinar. Curabitur eu turpis nulla. Sed sed lacus non justo rutrum iaculis sit amet sit amet nulla. Phasellus est lectus, varius non ligula eu, tincidunt semper magna.
		
		Phasellus mattis tempus sodales. Morbi ex lorem, dignissim ac orci vel, gravida ultricies neque. Curabitur sodales urna turpis, a elementum purus commodo ac. Ut ut lectus imperdiet, malesuada mi id, hendrerit arcu. Nulla luctus bibendum dapibus. Proin congue, lectus sed cursus tempor, nunc urna iaculis orci, eu lacinia metus dui eget nisi. Aenean ornare finibus dignissim. Proin aliquet diam vel urna dapibus, in interdum ipsum mollis. Donec dictum urna leo, id feugiat sapien vulputate dignissim. Integer consequat dolor lectus, vitae molestie lorem vulputate ut. Nullam et arcu posuere, scelerisque orci ut, maximus quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
		
		Duis sollicitudin nulla enim, ut rhoncus nisl tincidunt quis. Mauris pretium turpis ut dui convallis, eget egestas tortor laoreet. Proin ullamcorper arcu elit, vitae molestie urna congue id. Mauris laoreet dui in dolor mattis eleifend in id mauris. Etiam urna elit, luctus eget neque nec, consectetur imperdiet felis. Cras volutpat mauris sed felis pulvinar, a tempor sapien congue. Duis tempus ligula congue nunc maximus, vulputate rhoncus mi porttitor. Praesent dignissim odio vel mollis hendrerit. Pellentesque convallis enim mauris, vel dapibus massa posuere facilisis. Nullam iaculis ultrices nisi, vulputate pretium ex tempus ut.
		
		Maecenas non dui suscipit, aliquet ante eget, porttitor est. Integer at ante ac velit fringilla viverra eget in nibh. Phasellus nibh justo, volutpat ac ex at, porta tempor sapien. In hac habitasse platea dictumst. Sed interdum eros magna, eget interdum est laoreet id. Nullam finibus sit amet tellus nec aliquet. Morbi imperdiet molestie sem at fringilla. Morbi at elementum sem, ac molestie erat.
		
		Duis lobortis tristique tellus, et convallis nulla malesuada eget. Proin scelerisque turpis neque, vel porttitor nulla fringilla facilisis. Integer sagittis nisi eu ex elementum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis urna eu neque varius finibus eu eu justo. Proin fermentum odio ac nisl lobortis facilisis. Aenean efficitur fringilla justo, finibus pharetra magna iaculis eget. Sed suscipit lobortis tempor. Pellentesque lobortis porttitor tortor non iaculis. Fusce eget tellus dapibus, viverra justo vitae, finibus turpis. Quisque tincidunt risus vel felis feugiat lacinia. Mauris efficitur ex eu lorem vulputate mollis a vitae felis. Cras sed mauris enim. Nunc lacinia sit amet mauris vitae rhoncus. Sed eu felis nec nibh vestibulum fermentum id non magna. Nunc molestie tempor orci eget porttitor.
		
		Interdum et malesuada fames ac ante ipsum primis in faucibus. In luctus malesuada tortor, non vestibulum ex convallis sed. Nullam vulputate turpis odio, gravida eleifend urna pretium at. Proin quis nibh auctor, elementum massa nec, varius urna. Aliquam pellentesque ipsum nec odio rhoncus pharetra. Sed mattis massa ut lectus cursus, at facilisis metus interdum. Nulla vel ultricies libero. Sed vel justo ut augue cursus aliquet ut ut est. Maecenas non dui turpis. Vestibulum vitae consectetur tortor. Aenean volutpat, tellus ac rhoncus tincidunt, leo leo dictum mi, eget vehicula nulla mi sed lorem. Integer congue ante dui, nec viverra mauris laoreet non.
		
		Aenean ultricies maximus arcu in ullamcorper. Nulla vel fringilla quam, sed lacinia risus. Sed rhoncus pharetra massa vitae accumsan. Vestibulum viverra justo nec urna ullamcorper, eget mattis ante eleifend. Nulla non commodo massa, id pulvinar nunc. Nunc iaculis vestibulum congue. Vivamus non orci id enim suscipit luctus. Sed ornare, lacus nec consectetur mattis, enim lacus suscipit turpis, non lobortis nisi odio a magna. Morbi imperdiet elit tellus, a tincidunt dolor malesuada id. In ac velit et ligula semper vulputate.
		
		Vivamus feugiat lobortis ligula in tristique. Integer feugiat lectus augue, quis feugiat ex vehicula id. Proin id efficitur felis, vel dignissim ligula. Nulla quis nunc a neque condimentum facilisis vel eu ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

*/
}

Sliders.defaultProps = {
	tabData: {},
};

Sliders.propTypes = {
	tabData: PropTypes.object,
};

export default Sliders;
