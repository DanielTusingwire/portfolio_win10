import React from "react";
import "./about.scss";
import user from "../../../utils/data/user.config";
import { PrimaryButton } from "@fluentui/react";
import { useDispatch, useSelector } from "react-redux";
import { handleApplicationClick } from "../../../utils/actions/app.action";

function Projects() {
	const apps = useSelector((state) => state.appState.apps) || [];
	const dispatch = useDispatch();
	const openApp = (id) => {
		const app = apps.find((a) => a.id === id);
		// Opening an app that is already on screen would minimise it.
		if (app && !(app.isOpened && !app.isMinimized)) {
			dispatch(handleApplicationClick(app));
		}
	};

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
						{project.caseStudyApp && (
							<PrimaryButton
								className="uk-margin-small-right uk-margin-small-bottom"
								iconProps={{ iconName: "ReadingMode" }}
								text="Read Case Study"
								onClick={() => openApp(project.caseStudyApp)}
							/>
						)}
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
