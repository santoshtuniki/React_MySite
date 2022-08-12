import React from "react";
import Educationz from "./images/icons/education.png";
import IIT from "./images/Education/IIT.jpg";
import chaitanya from "./images/Education/chaitanya.png";
import Manasa from "./images/Education/Manasa.jpg";

function Education() {
	return (
		<section id="education">
			<h2 className="title">
				<img className="icon" src={Educationz} alt="education-img" />
				Education
			</h2>
			<div className="institute">
				<div className="sect">
					<img className="ed" src={IIT} alt="IIT Patna-img" />
					<div className="content">
						<p className="heading">
							Indian Institute of Technology Patna | Bihta, Bihar 
							<span className="years">2018 - 2022</span>
						</p>
						<p>Bachelor of Technology, Chemical Engineering</p>
						<p>CGPA: 7.85 / 10</p>
					</div>
				</div>
				<div className="memo">
					<div className="content">
						<p className="heading">
							Sri Chaitanya Juinor Kalasala | Hyd, Telangana
							<span className="years">2016 - 2018</span>
						</p>
						<p>Senior Secondary, MPC</p>
						<p>Percentage: 98.6%</p>
					</div>
					<img className="ed" src={chaitanya} alt="Sri Chaitanya-img" />
				</div>
				<div className="sect">
					<img className="ed" src={Manasa} alt="Manasa School-img" />
					<div className="content">
						<p className="heading">
							Manasa High School | Jagtial, Telangana
							<span className="years">2015 - 2026</span>
						</p>
						<p>Secondary, X Class</p>
						<p>GPA: 9.7 / 10</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Education;