import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
