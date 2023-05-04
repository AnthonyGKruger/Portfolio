import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Root from "./pages/Root";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import Languages from "./pages/Languages";
import Education from "./pages/Education";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import ThankYou from "./pages/ThankYou";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Error />,
		element: <Root />,
		children: [
			{ index: true, path: "/", errorElement: <Error />, element: <About /> },
			{ path: "skills", errorElement: <Error />, element: <Skills /> },
			{ path: "languages", errorElement: <Error />, element: <Languages /> },
			{
				path: "qualifications",
				errorElement: <Error />,
				element: <Education />,
			},
			{
				path: "work-experience",
				errorElement: <Error />,
				element: <WorkExperience />,
			},
			{ path: "contact-me", errorElement: <Error />, element: <ContactMe /> },
			{ path: "portfolio", errorElement: <Error />, element: <Portfolio /> },
			{ path: "thank-you", errorElement: <Error />, element: <ThankYou /> },
		],
	},
]);

const App = () => {
	return (
			<RouterProvider router={router} />
	
	);
};

export default App;
