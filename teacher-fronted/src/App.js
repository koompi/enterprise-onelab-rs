import { Switch, Route } from "react-router-dom";
import Ribbon from "./Components/Ribbon/Ribbon";
import MainView from "./Components/MainView/MainView";

function App() {
	return (
		<div className="w-screen h-screen overflow-hidden bg-gray-100 p-2 select-none">
			<Ribbon />
			<MainView />
		</div>
	);
}

export default App;
