import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/UI/Header";
import About from "./pages/About";
import Footer from "./components/UI/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<About />
			</main>
			<Footer/>
		</>
	);
};

export default App;
