import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
import Blog from "./pages/blog/Blog.jsx";
import RootLayout from "./pages/root-layout/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LabLayout from "./pages/lab/LabLayout.jsx";
import LabComponent from "./pages/lab/LabComponent.jsx";
import ExperimentPlaceholder from "./components/lab/ExperimentPlaceholder.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "laboratory",
        element: <LabLayout />,
        children: [
          { index: true, element: <ExperimentPlaceholder /> },
          {
            path: ":component",
            element: <LabComponent />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-dvh w-full bg-lab-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
