import React from "react";
import "./about.scss";
import user from "../../../utils/data/user.config";
import { PrimaryButton } from "@fluentui/react";

function Projects() {
	return (
		<div>
			{user.projects.map((project, index) => {
				return (
					<div
						className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-border-rounded project-card uk-shadow-large uk-margin"
						key={index}
					>
						<h3 className="uk-card-title font-color-white">
							{project.projectName}
						</h3>
						<p className="font-color-white">{project.description}</p>

						<p>
							{project.madeWith.map((stack, stackIndex) => {
								return (
									<span
										className="uk-badge uk-padding-small uk-background-secondary"
										key={stackIndex}
									>
										{stack}
									</span>
								);
							})}
						</p>
						{project.availabilityNote ? (
							<span className="project-availability">
								{project.availabilityNote}
							</span>
						) : (
							(
								project.links || [
									{ label: "View in Figma", url: project.link },
								]
							).map((link) => (
								<PrimaryButton
									key={link.url}
									className="uk-margin-small-right uk-margin-small-bottom"
									iconProps={{ iconName: "NavigateExternalInline" }}
									text={link.label}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
								/>
							))
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Projects;
