import React from "react";
import Achievement from "./images/icons/certificate.png";

function Achievements() {
	return (
		<section id="achievements">
			<h2 className="title">
				<img  className="icon" src={Achievement} alt="achievements-img" />
				Achievements
			</h2>
			<div className="accomplishments">
				<ul>
					<li>
						<span className="heading">GATE 2022 : </span>
						Qualified in GATE.
					</li>
					<li>
						<span className="heading">JEE Advanced 2018 : </span>
						Secured AIR 3354 under OBC-NCL Category.
					</li>
					<li>
						<span className="heading">TS EAMCET 2018: </span>
						Secured a rank of 1244 among 0.15 million candidate.
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Achievements;