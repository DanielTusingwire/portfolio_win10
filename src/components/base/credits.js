import { IconButton, Modal } from "@fluentui/react";

import React from "react";
import user from "../../utils/data/user.config";

function Credits(props) {
	const cancelIcon = { iconName: "Cancel" };
	const navigate = (link) => {
		window.open(link, "_blank");
	};
	return (
		<Modal
			isOpen={props.isModalOpen}
			onDismiss={props.hideModal}
			isBlocking={false}
		>
			<div className="uk-card uk-card-default uk-card-body uk-border-rounded">
				<h3 className="uk-card-title">Credits</h3>
				<p>
					<table className="uk-table">
						<tbody>
							<tr>
								<td>Framework : </td>
								<td>
									<span
										onClick={() =>
											navigate("https://getuikit.com/")
										}
									>
										UIKit
									</span>
									{" ,"}{" "}
									<span
										onClick={() =>
											navigate(
												"https://developer.microsoft.com/en-us/fluentui#/"
											)
										}
									>
										Fluent UI
									</span>
								</td>
							</tr>
							<tr>
								<td>Icons: </td>
								<td>
									<span
										onClick={() =>
											navigate("https://icons8.com/")
										}
									>
										Icons8
									</span>
								</td>
							</tr>
							<tr>
								<td>Other Plugins : </td>
								<td>
									<span
										onClick={() =>
											navigate(
												"https://www.npmjs.com/package/react-draggable"
											)
										}
									>
										React Draggable
									</span>
									{", "}
									<span
										onClick={() =>
											navigate(
												"https://www.npmjs.com/package/react-contexify"
											)
										}
									>
										ContextMenu
									</span>
									{", "}
									<span
										onClick={() =>
											navigate(
												"https://www.npmjs.com/package/react-live-clock"
											)
										}
									>
										React Live Clock
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</p>
				<IconButton
					iconProps={cancelIcon}
					ariaLabel="Close popup modal"
					onClick={props.hideModal}
					className="uk-position-top-right"
				/>
				<div className="uk-card-footer uk-text-center">
					<p>
						{user.firstName} {user.lastName}'s portfolio, based on{" "}
						<span
							onClick={() =>
								navigate(
									"https://github.com/srinibasbiswal/Portfolio_OS_Theme"
								)
							}
						>
							Portfolio OS Theme
						</span>{" "}
						by Srinibas Biswal (MIT License)
					</p>
				</div>
			</div>
		</Modal>
	);
}

export default Credits;
