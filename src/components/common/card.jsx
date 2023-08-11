import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles/button.css"
import "./styles/card.css";

const Card = (props) => {
	const { icon, title, body } = props;
	return (
		<div className="card">
			<div className="card-container">
				<div className="card-header">
                    <div className="button-container">
					    <div className="card-icon">
						    <FontAwesomeIcon icon={icon} />
					    </div>
					    <div className="card-title">{title}</div>
                    </div>
                    <a href="../../../../public/Raphaël-Chemouni-Full-Stack-2023.pdf" target="_blank" download>
                    <button type="button" className="download_button btn-98">Download resume</button>
                    </a>
				</div>
				<div className="card-body">
					<div className="card-text">{body}</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
