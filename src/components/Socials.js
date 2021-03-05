import React from "react";
import GitHub from "../GitHub-Mark-Light-64px.png";
import Instagram from "../instagram-4-64.png";
import Twitter from "../twitter-64.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Socials = () => {
	return (
		<div className="socialsDiv">
			<a href="https://github.com/hafezus" target="_blank" rel="noreferrer">
				<AiFillGithub className="socialHandles" />
			</a>
			<a
				href="https://www.linkedin.com/in/hafezusman/"
				target="_blank"
				rel="noreferrer"
			>
				<AiFillLinkedin className="socialHandles" />
			</a>
			{/* <a href="https://www.instagram.com/hafzus/?hl=en" target="_blank" rel="noreferrer">
                <AiOutlineInstagram className="socialHandles"/>
            </a> */}
			<a
				href="https://twitter.com/hasminosmin"
				target="_blank"
				rel="noreferrer"
			>
				<AiOutlineTwitter className="socialHandles" />
			</a>
		</div>
	);
};

export default Socials;
