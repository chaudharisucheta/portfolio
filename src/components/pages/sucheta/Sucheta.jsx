import React, { useEffect } from "react";
import VWD from "./images/profile5.jpg";
import "./sucheta.scss";
import { Grid } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

const Sucheta = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div className="sucheta-container">
			<Grid container>
				<Grid item xs={12} sm={12} md={6}>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						className="headings"
					>
						<span>Hello, I am </span>
						<h1>Sucheta Chaudhari</h1>
						<div className="info-block">
							<p>
								I am a Front End developer and have 2 years of 
								experience building <b>Web</b> applications with
								HTML,CSS,JavaScript(ES6),Bootstrap and React JS with willingness 
								to learn and master Backend technologies. 
								
							</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div data-aos="zoom-in" className="devImg">
						<img src={VWD} alt="developerimage" />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Sucheta;
