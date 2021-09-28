import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
// Icons
import Monotor from "../../Assets/monitor-96px.png";
import RemoteDesktop from "../../Assets/remote-desktop-96px.png";
import CloudFolder from "../../Assets/cloud-folder-96px.png";
import Exit from "../../Assets/exit-96px.png";
// Pages
import ClassView from "./ClassManager/ClassView";
import Document from "./FileManager/Document";
import Remote from "./RemoteManager/Remote";

// Static Data
const page_list = [
	{ order: 1, title: "Class", icon: Monotor, to: "/auth/class" },
	{ order: 2, title: "Remote", icon: RemoteDesktop, to: "/auth/remote" },
	{ order: 3, title: "Documents", icon: CloudFolder, to: "/auth/document" },
	{ order: 4, title: "Leave", icon: Exit, to: "/leave" },
];

export default function MainView() {
	const [selected, setSelected] = useState(1);
	return (
		<div className="w-screen h-[calc(100vh-10rem)] py-2 inline-flex space-x-2">
			<div className="flex-initial w-40 h-[calc(100%-0.5rem)] bg-blue-100 rounded-xl text-center flex-col space-y-4 p-4">
				{page_list.map((page) => (
					<div
						key={page.order}
						className={
							selected === page.order
								? "flex-1 bg-blue-600 text-white font-bold rounded-2xl cursor-pointer transition"
								: "flex-1 bg-blue-200 font-medium rounded-2xl cursor-pointer transition"
						}
						onClick={(e) => setSelected(page.order)}
					>
						<NavLink exact to={page.to} className="block p-2">
							<center>
								<img src={page.icon} alt={page.title} />
								<span>{page.title}</span>
							</center>
						</NavLink>
					</div>
				))}
			</div>

			<Switch>
				<Route exact path="/auth/class" component={ClassView} />
				<Route exact path="/auth/document" component={Document} />
				<Route exact path="/auth/remote" component={Remote} />
			</Switch>
		</div>
	);
}
