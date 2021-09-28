import React from "react";

export default function RemoteViewer() {
	return (
		<div className="w-full h-[75vh] rounded-xl bg-blue-200 overflow-y-auto relative">
			<div className="h-full bg-blue-200"></div>
			<div className="w-[calc(100%-2rem)] h-14 rounded-2xl shadow bg-blue-900 bg-opacity-30 absolute left-4 bottom-4 p-4"></div>
		</div>
	);
}
