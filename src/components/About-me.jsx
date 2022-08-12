import React from "react";
import profile from "./images/profile.jpeg";
import user from "./images/icons/profile-user.png";

function About_me() {
  return (
	<section id="about_me">
		<div className="about">
				<img className="profile-img" src={profile} alt="santosh-img" />
				<div>
					<h2>
						<img className="icon" src={user} alt="user-img" />
						About me
					</h2>
					<p>I am Saisantoshkumar Tuniki, I am a fresher and had completed my graduation in Chemical Engineering in 2022 from IIT Patna.</p>
					<p>I am currently learning Web Development and is an Intern at Edureka and aiming to be a full stack web developer in the industry.</p>
					<p>I love to play chess and have fun with my brother and sister. I am an optimist who believes that hardwork always pays off.</p>
				</div>
			</div>
	</section>
  );
}

export default About_me;
