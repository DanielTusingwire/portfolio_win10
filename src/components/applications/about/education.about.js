import React from "react";
import user from "../../../utils/data/user.config";

function Education() {
	return (
		<div>
			<div className="uk-width-1-1 uk-padding">
				<div className="container uk-margin-medium-left">
					{user.education.map((education, index) => {
						return (
							<div className="timeline-block " key={index}>
								<div className="marker"></div>
								<div className="timeline-content">
									<p className="uk-text-lead font-color-white">
										{education.degree}
									</p>
									<span>
										{education.year} | {education.location}
									</span>
									<p className="positon-desc">
										{education.instituteName}
									</p>
								</div>
							</div>
						);
					})}
				</div>
				<h3 className="uk-text-large font-color-white">
					PROFESSIONAL TRAINING &amp; CERTIFICATIONS
				</h3>
				<div className="container uk-margin-medium-left">
					{user.certifications.map((certification, index) => {
						return (
							<div className="timeline-block " key={index}>
								<div className="marker"></div>
								<div className="timeline-content">
									<p className="uk-text-lead font-color-white">
										{certification.name}
									</p>
									<p className="positon-desc">
										{certification.issuer}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Education;
