import React from "react";

import Socials from "./Socials";
import MyImage from "../MyImage.jpg";
import { AiOutlineCode } from "react-icons/ai";

const Bio = () => {
	return (
		<div className="bio">
			<Socials />
			<img src={MyImage} alt="" className="bioImage"></img>
			<h1>
				Hello, I'm Hafez.<span className="wave">👋</span>
			</h1>
			<h2 style={discriptionStyle}>
				Aspiring Software Engineer, Open-Source Advocate, Code Fanatic{" "}
				<AiOutlineCode
					style={{ transform: "translateY(4px)", color: "#F17767" }}
				/>
			</h2>
		</div>
	);
};

const discriptionStyle = {
	fontFamily: "Poppins",
	fontWeight: "100",
	color: "#ccc",
	paddingBottom: "2vh",
	paddingTop: "2vh",
	justifyContent: "center",
};

export default Bio;
