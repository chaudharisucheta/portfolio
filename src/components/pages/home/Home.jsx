import React from "react";

//-----> Components
import Tools from "../tools/Tools";
import Sucheta from "../sucheta/Sucheta";
import Contact from "../contact/Contact";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

export default function Home() {
	return (
		<div>
			<Sucheta />
			<Projects />
			<Tools />
			<Skills />
			<Profile />
			<Contact />
		</div>
	);
}
