import React from "react";
import RemoteList from "./RemoteList";
import RemoteViewer from "./RemoteViewer";

export default function Remote() {
	return (
		<div
			className="w-[calc(100vw-11.5rem)] h-[calc(100vh-11.5rem)] bg-blue-100 rounded-xl grid justify-evenly gap-4 p-8 overflow-hidden content-start"
			style={{
				gridTemplateColumns: "75% 25%",
				gridTemplateRows: "1fr",
				scrollbarWidth: "thin",
			}}
		>
			<RemoteViewer />
			<RemoteList />
		</div>
	);
}
