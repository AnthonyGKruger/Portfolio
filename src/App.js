import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/UI/Header";
import About from "./pages/About";
// import Footer from "./components/UI/Footer";
import Root from "./pages/Root";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Error />,
		element: <Root />,
		children: [
			{ index: true, path: "/", element: <About /> },
			{ path: "contact-me", element: <ContactMe /> },
			{ path: "portfolio", element: <Portfolio /> },
		],
	},
]);

const App = () => {
	return (
		<RouterProvider router={router} />
		// <>
		// 	<Header />
		// 	<main>
		// 		<About />
		// 	</main>
		// 	<Footer />
		// </>
	);
};

export default App;
