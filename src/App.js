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

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Error />,
		element: <Root />,
		children: [
			{ index: true, path: "/", element: <About /> },
			{ path: "skills", element: <Skills /> },
			{ path: "languages", element: <Languages /> },
			{ path: "education", element: <Education /> },
			{ path: "work-experience", element: <WorkExperience /> },
			{ path: "contact-me", element: <ContactMe /> },
			{ path: "portfolio", element: <Portfolio /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
