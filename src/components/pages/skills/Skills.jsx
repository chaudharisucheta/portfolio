import React from "react";

//-----> SCSS
import "./skills.scss";

const Skills = () => {
	return (
		<div className="skills_main">
			<h2>Skills</h2>
			<div className="skills" data-aos="fade-up" data-aos-duration="1500">
				<ul>
					<li>
						Capable of working in multiple projects and handling
						both frontend and backend
					</li>
					<li>Creating secure RESTful-based web services JSON.</li>
					<li>
						Understanding the project requirements and give new
						ideas/features for project
					</li>
					<li>Good at R&D on project requirements</li>
					<li>
						Strong knowledge on Dockerizing Frontend and Backend
						applications.
					</li>
					<li>
						Setup k8s cluster on AWS for production and manage
						cluster.
					</li>
					<li>
						Setup master/slave Replica set with MongoDB for disaster
						recovery
					</li>
					<li>Self-motivated, good team player and Quick learner.</li>
					<li>Setup CI/CD in github.</li>
					<li>Setup serverless for production server in AWS</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
