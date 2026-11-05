import React from "react";
import lockScreenWall from "../assets/images/wallpapers/lockScreenWall.jpg";
import SignInScreen from "../components/lockScreen/signIn.lockScreen";
import { useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import DesktopContextMenu from "../components/contextMenu/desktop.contextMenu";
import { SCREENS } from "../utils/documents/enums";

const MENU_ID = "context-menu";

function LockScreen(props) {
	const currentWallpaper = lockScreenWall;

	const { show } = useContextMenu({
		id: MENU_ID,
	});
	function handleContextMenu(event) {
		event.preventDefault();
		show(event, {
			props: {
				key: "value",
			},
		});
	}

	return (
		<div
			className="uk-background-cover uk-background-muted screenHeight"
			style={{
				backgroundImage: `url(${currentWallpaper})`,
			}}
			onContextMenu={handleContextMenu}
		>
			<SignInScreen />
			<DesktopContextMenu location={SCREENS.LOCK_SCREEN} />
		</div>
	);
}

export default LockScreen;
