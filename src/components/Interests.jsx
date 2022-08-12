import React from "react";
import interestz from "./images/icons/interests.png";
import chess from "./images/interests/chess.jpg";
import books from "./images/interests/books.jpg";
import carrom from "./images/interests/carrom.jpg";

function Interests() {
	return (
		<section id="interests">
			<h2 className="title">
				<img  className="icon" src={interestz} alt="achievements-img" />
				Interests
			</h2>
			<div>
				<img className="games" src={chess} alt="chess" />
				<img className="games" src={books} alt="books" />
				<img className="games" src={carrom} alt="carrom" />
			</div>
			<hr />
		</section>
	);
}

export default Interests;