import React from "react";

import Topbar from "./Navbar/Navbar";
import About_me from "./About-me";
import Skills from "./Skills";
import Projects from "./Projects";
import Education  from "./Education";
import Achievements from "./Achievements";
import Footer from "./Footer";

import "../styles.css";

function App() {
	return (
		<div>
			<Topbar />
			<About_me />
			<Skills />
			<Projects />
			<Education />
			<Achievements />
			<Footer />
		</div>
	);
}

export default App;
