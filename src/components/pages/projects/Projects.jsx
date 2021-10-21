import React from "react";

//-----> Modules
import {
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";
import { GitHub, VisibilitySharp } from "@material-ui/icons";

//-----> Image's & Icon's
import TodoImage from "./images/training.jpg";
import ContactImage from "./images/contact_list.png";
import SocialMedia from "./images/socail_media.png";


//-----> SCSS
import "./projects.scss";

const Projects = () => {
	const webProjects = [
		{
			name: "Training Institute",
			description:"Keep yourself updated by learning latest technologies ",
			image: TodoImage,
		},
		{
			name: "Omniscape",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			image: ContactImage,
		},
		{
			name: "Bakekick",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
			image: SocialMedia,
		},
		
	];
	
	return (
		<div className="projects_main">
			<h1>Projects</h1>
			<div className="all_projects_list">
				<div className="web_projects">
					
					<Grid container className="projects">
						{webProjects.map(
							({ image, name, description, source }) => {
								return (
									<Grid
										item
										xs={11}
										sm={11}
										md={3}
										lg={3}
										className="project"
									>
										<Card
											className="card"
											data-aos="zoom-in"
											data-aos-duration="1500"
										>
											<CardMedia
												component="img"
												height="140"
												image={image}
												alt="green iguana"
											/>
											<CardContent className="card_content">
												<Typography
													gutterBottom
													variant="h5"
													component="div"
												>
													{name}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													{description}
												</Typography>
											</CardContent>
											<CardActions className="card_buttons">
												<Button
													variant="contained"
													size="small"
													endIcon={<GitHub />}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Source
												</Button>
												<Button
													variant="contained"
													size="small"
													endIcon={
														<VisibilitySharp />
													}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Visit
												</Button>
											</CardActions>
										</Card>
									</Grid>
								);
							}
						)}
					</Grid>
				</div>
				
				
			</div>
		</div>
	);
};

export default Projects;
