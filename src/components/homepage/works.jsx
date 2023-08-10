import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">DropKick studio Montréal - Canada</div>
							<div className="work-subtitle">
								React Native Mobile developer
							</div>
							<div className="work-duration">2022 - 2023</div>
                            <div className="work-main">
                            • Developing and implementing mobile applications using React Native framework.<br />
                            • Collaborating with cross-functional teams (designers, backend developers, QA) to deliver high-quality solutions<br />
                            • Integrating APIs and third-party services into the mobile application.<br />
                            • Conducting code reviews and providing constructive feedback to team members.<br />
                            • Optimizing performance and improving user experience through code optimizations and UI enhancements.<br />
                            </div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
