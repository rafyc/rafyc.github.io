import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="EXPERIENCE"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./dropkickStudio.jpg"
								alt="Dropkick"
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
								src="./Leoo-ADLP-partner.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Leoo - ADLP partner</div>
							<div className="work-subtitle">
								Senior Lead Webmaster
							</div>
							<div className="work-duration">2019 - 2021</div>
                            <div className="work-main">
                            • Production Oversight, Platform Administration and Monitoring
                            • Website Development and Maintenance to ensure optimal performance and functionality.<br />
                            • Usability Testing and Technical Testing for Tool Validation and Enhancement.<br />
                            • Content Management: Efficiently curating and updating website content with new process.<br />
                            • Web Analytics and Reporting: Utilizing advanced tools to monitor website traffic, analyze user interactions, and generate comprehensive reports for evaluating and enhancing website performance.<br />
                            • Search Engine Optimization (SEO): Strategically implementing industry-leading techniques to enhance website visibility and bolster organic search rankings, driving increased online presence.<br />
                            • User Experience (UX) and User Interface (UI) Design: Elevating user satisfaction by crafting user-centric interfaces, optimizing user flows, and refining navigation elements for a seamless digital journey.<br />
                            </div>
						</div>

                        <div className="work">
							<img
								src="./freelance.jpg"
								alt="freelance"
								className="work-image"
							/>
							<div className="work-title">Freelance</div>
							<div className="work-subtitle">Digital Solutions Consultant</div>
							<div className="work-duration">2019 - 2021</div>
                            <div className="work-main">
                            • Domain and Hosting Management: Database Migration, DNS Redirection, Subdomains
                            • Preventive / Predictive Maintenance
                            • Security Audit and Vulnerability Strengthening: XSS, ClickJacking, MIME Fixes
                            • Marketing and Communication Strategy Implementation
                            • E-Commerce and Portfolio Website Design and Deployment
                            • Brand Creation and Content Enhancement, Feature Development
                            </div>
						</div>
                        <div className="work">
							<img
								src="./AirFrance.jpg"
								alt="AirFrance"
								className="work-image"
							/>
							<div className="work-title">Air France</div>
							<div className="work-subtitle">Social Media Content Manager</div>
							<div className="work-duration">2015 - 2018</div>
                            <div className="work-main">
                            • Innovation, POC Launches, and Scaling of New Concepts.
                            • Devlopping new content strategies with Data Asset Management crowdsourcing initiatives.
                            • Marketing and Communication Strategy Implementation
                            • Ensuring Content Consistency with Platform and Communication Objectives
                            • Development of Communication Plans and Content Strategies.
                            • E-Commerce and Website Design and Deployment
                            </div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
