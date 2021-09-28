import React from "react";
// Icons
import Folder from "../../../Assets/folder-96px.png";
import File from "../../../Assets/document-96px.png";

export default function DocumentItem({ data }) {
	const { id, type, name } = data;
	if (data.type === "folder") {
		return (
			<div className="h-[180px] rounded-xl bg-blue-200 flex justify-center items-center transition hover:bg-blue-400 cursor-pointer">
				<center>
					<img src={Folder} alt="" />
					<div>{name}</div>
				</center>
			</div>
		);
	} else {
		return (
			<div className="h-[180px] rounded-xl bg-blue-200 flex justify-center items-center transition hover:bg-blue-400 cursor-pointer">
				<center>
					<img src={File} alt="" />
					<div>{name}</div>
				</center>
			</div>
		);
	}
}
