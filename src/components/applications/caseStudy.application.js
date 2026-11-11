import { Icon } from "@fluentui/react";
import React from "react";
import "./application.scss";

// Shows a case study page from /public inside a desktop window.
function caseStudyViewer(url, title) {
	function CaseStudy() {
		return (
			<div className="case-study-viewer">
				<div className="case-study-bar">
					<span>{title}</span>
					<a href={url} target="_blank" rel="noopener noreferrer">
						Open full page <Icon iconName="NavigateExternalInline" />
					</a>
				</div>
				<iframe src={url} title={title} className="case-study-frame" />
			</div>
		);
	}
	return CaseStudy;
}

export default caseStudyViewer;
