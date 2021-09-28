import React from "react";
import DocumentItem from "./DocumentItem";

const documents = [
	{ id: "006", name: "Desktop", type: "folder" },
	{ id: "001", name: "Documents", type: "folder" },
	{ id: "002", name: "Downloads", type: "folder" },
	{ id: "003", name: "Music", type: "folder" },
	{ id: "004", name: "Pictures", type: "folder" },
	{ id: "005", name: "Videos", type: "folder" },
	{ id: "007", name: "Lesson 1", type: "file" },
	{ id: "008", name: "Lesson 2", type: "file" },
	{ id: "009", name: "Exercise 1.docx", type: "file" },
	{ id: "010", name: "Exercise 2.docx", type: "file" },
	{ id: "011", name: "កាលវិភាគ.docx", type: "file" },
	{ id: "012", name: "បញ្ជីឈ្មោះសិស្ស.docx", type: "file" },
];

export default function Document() {
	return (
		<div
			className="w-[calc(100vw-11.5rem)] h-[calc(100vh-11.5rem)] bg-blue-100 rounded-xl grid justify-evenly content-start gap-4 p-8 overflow-x-hidden overflow-y-scroll"
			style={{
				gridTemplateColumns: "repeat(auto-fit, 180px)",
				scrollbarWidth: "thin",
			}}
		>
			{documents.map((doc) => (
				<DocumentItem data={doc} />
			))}
		</div>
	);
}
