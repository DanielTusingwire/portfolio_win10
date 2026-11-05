import React from "react";
import { useDispatch } from "react-redux";
import { handleApplicationClick } from "../../utils/actions/app.action";
import folder from "../../assets/images/baseImages/default_folder.png";

function AppIcon(props) {
	const dispatch = useDispatch();
	const handleIconClick = (app) => {
		// The click action toggles minimize; a desktop icon should only open,
		// so the second click of a double-click doesn't hide the window again.
		if (app.isOpened && !app.isMinimized) {
			return;
		}
		dispatch(handleApplicationClick(app));
	};

	return (
		<div
			className="uk-text-center uk-margin-small uk-button app-icon uk-border-rounded"
			onClick={() => handleIconClick(props.appInfo)}
		>
			<div>
				<img
					src={
						props.appInfo.icon !== undefined &&
						props.appInfo.icon !== null &&
						props.appInfo.icon !== ""
							? props.appInfo.icon
							: folder
					}
					alt={props.appInfo.name}
					width="30"
					height="30"
				/>
			</div>
			<div className="font-color-white uk-text-small">
				{props.appInfo.name}
			</div>
		</div>
	);
}

export default AppIcon;
