import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menu_groups = [
	{ title: "School", order: 1 },
	{ title: "Student", order: 2 },
	{ title: "Group", order: 3 },
	{ title: "View", order: 4 },
	{ title: "Monitor", order: 5 },
	{ title: "Layout", order: 6 },
	{ title: "Help", order: 7 },
];

export default function Ribbon() {
	const [Tab, setTab] = useState([...menu_groups]);
	const [selectedTab, setselectedTab] = useState(1);
	return (
		<div className="w-[calc(100vw-1rem)] h-40 overflow-hidden bg-blue-100 p-2 rounded-xl">
			<ul className="w-full inline-flex space-x-4 items-center ">
				{Tab.map((item) => (
					<li
						key={item.order}
						className={
							selectedTab === item.order
								? "px-4 py-2 font-bold bg-blue-600 text-white rounded-lg text-center cursor-pointer transition shadow-lg"
								: "px-4 py-2 font-medium bg-blue-300 rounded-lg text-center cursor-pointer transition shadow-sm"
						}
						onClick={(e) => setselectedTab(item.order)}
					>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
}
