import React from "react";
import user from "../../../utils/data/user.config";

function Skills() {
	return (
		<div
			className="uk-grid-small uk-child-width-1-2@s uk-text-center uk-grid-match"
			uk-grid={"true"}
		>
			{user.skills.map((skill, index) => {
				return (
					<div key={index}>
						<div className="uk-card uk-card-default uk-card-body uk-border-rounded project-card uk-shadow-large">
							<p className=" font-color-white">{skill.name}</p>
							<div>
								{skill.values.map((value, valIndex) => {
									return (
										<span
											className="uk-badge skill-badge uk-background-secondary"
											key={valIndex}
										>
											{value}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Skills;
