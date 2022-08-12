import React from "react";
import Certificate from "./images/icons/certificate.png";
import Udemy from "./images/Udemy.jpg";

function Certification() {
	return (
		<section id="certification">
			<h2 className="title">
				<img  className="icon" src={Certificate} alt="achievements-img" />
				Certification
			</h2>
			<div className="certificatez">
					<div className="memo">
						<div className="contentz">
							<p className="heading">
								The Complete 2022 Web Development Bootcamp 
							</p>
							<p>July 2022</p>
							<p><i>( Udemy.com )</i></p>
						</div>
						<img className="portfolio" src={Udemy} alt="Udemy-img" />
					</div>
				</div>
		</section>
	);
}

export default Certification;