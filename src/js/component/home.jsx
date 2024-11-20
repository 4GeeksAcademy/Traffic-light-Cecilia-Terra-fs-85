import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red")

	const Color = (color) => {
		setSelectedColor(color)
	}
	return (
		<><div className="stick"></div>
			<div className="Traficlight">
				<div className="container">
					<div className={`light red ${selectedColor === "red" ? "glow" : ""}`}
						onClick={() => Color("red")}
					></div>
					<div className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}
						onClick={() => Color("yellow")}
					></div>
					<div className={`light green ${selectedColor === "green" ? "glow" : ""}`}
						onClick={() => Color("green")}
					></div>
				</div>
			</div></>

	);
};

export default Home;
